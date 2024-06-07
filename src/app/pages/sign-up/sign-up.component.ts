import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public isSubmissionDisable = false;
  public passwordsMatch = true;


  public customer = {
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
    address: null,
    email: null,
    nic: null,
    contactNumber: null,
    password: null,
    confirmPassword: null
  };

  constructor(private http: HttpClient, private router: Router) { }

  validateForm(): boolean {
    const customer = this.customer;
    return (
      !!customer.firstName &&
      !!customer.lastName &&
      !!customer.dob &&
      !!customer.gender &&
      !!customer.address &&
      !!customer.email &&
      !!customer.nic &&
      !!customer.contactNumber &&
      !!customer.password &&
      !!customer.confirmPassword
    );
  }

  validateSubmit() {
    if (this.validateForm()) {
      if (this.passwordsMatch) {
        this.createCustomer();
      } else {
        console.error('Passwords do not match');
        this.showToast('Passwords do not match.');
      }
    } else {
      console.error('Form is incomplete');
      this.showToast('Please fill in all fields correctly.');
    }
  }

  createCustomer() {
    this.http.post('http://localhost:8080/api/customers', this.customer).subscribe({
      next: (data) => {
        this.isSubmissionDisable = false;
        console.log(data);
        this.resetForm();
        this.router.navigate(['/thank-you']);
      },
      error: (error) => {
        console.error(error);
        this.showToast('An error occurred while submitting the form.');
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  validatePassword() {
    this.passwordsMatch = this.customer.password === this.customer.confirmPassword;
  }

  resetForm() {
    this.customer = {
      firstName: null,
      lastName: null,
      dob: null,
      gender: null,
      address: null,
      email: null,
      nic: null,
      contactNumber: null,
      password: null,
      confirmPassword: null
    };
    this.passwordsMatch = true;
  }

  showToast(message: string) {
    const toastElement = document.getElementById('toast-web');
    if (toastElement) {
      const toastBody = toastElement.querySelector('.toast-body');
      if (toastBody) {
        toastBody.textContent = message;
      }
      const toast = new bootstrap.Toast(toastElement);
      toast.show();
    }
  }
}