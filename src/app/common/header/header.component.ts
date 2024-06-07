import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    this.router.navigate(['/']);
  }
}
