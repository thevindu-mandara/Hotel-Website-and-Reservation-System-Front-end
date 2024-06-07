import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      address: [''],
      dob: [''],
      contactNumber: [''],
      gender: [''],
      nic: ['']
    });
  }
  

  ngOnInit(): void {
    this.loadCustomerData();
  }

  loadCustomerData(): void {
    const token = localStorage.getItem('authToken');
    const email = localStorage.getItem('email');
    if (!token || !email) {
      this.router.navigate(['/login']); // Redirect to login if token or email is not found
      return;
    }

    this.http.get<any>(`http://localhost:8080/api/auth/details/${email}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).subscribe(
      (data: any) => {
        this.customerForm.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.email.split('@')[0],
          address: data.address,
          dob: data.dob,
          contactNumber: data.contactNumber,
          gender: data.gender,
          nic: data.nic
        });

        // Disable form controls after patching the value
        this.customerForm.disable();
      },
      error => {
        console.error('Error fetching customer data', error);
      }
    );
  }
}
