import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  private loginUrl = 'http://localhost:8080/api/admin/login';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    console.log('Login attempt', this.email, this.password);
    if (this.email.trim() && this.password.trim()) {
      console.log('Sending login request...');
      this.http.post<any>(this.loginUrl, { email: this.email, password: this.password }).subscribe(
        (response: any) => {
          console.log('Login response:', response);
          if (response) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', this.email);
            this.router.navigate(['/admin-dashboard']);
          } else {
            alert('Invalid credentials');
          }
        },
        error => {
          console.error('Login failed', error);
          alert('An error occurred during login. Please try again.');
        }
      );
    } else {
      console.log('Email or password not provided');
      alert('Please enter both email and password');
    }
  }
}
