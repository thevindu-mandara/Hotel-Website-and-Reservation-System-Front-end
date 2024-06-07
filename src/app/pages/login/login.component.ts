import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    console.log('Login attempt', this.email, this.password);
    if (this.email.trim() && this.password.trim()) {
      console.log('Sending login request...');
      this.http.post<any>(this.loginUrl, { email: this.email, password: this.password }).subscribe(
        (response: any) => {
          console.log('Login response:', response);
          if (response.success) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', this.email);
            this.router.navigate(['/customer-dashboard']);
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
