import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';
  private signupUrl = 'http://localhost:8080/customer';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<boolean>(this.loginUrl, { email, password }).subscribe(
      (success:boolean) => {
        if (success) {
          localStorage.setItem('email', email);
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
  }
}