import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  getUsername(): string {
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];
    return user.name;
  }

  isAuthenticated(): boolean {
    return !(localStorage.getItem('token') === null);
  }

  isDonor(): boolean {
    if (!this.isAuthenticated()) {
      return false;
    }
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];

    return user.role.toLowerCase() === 'donor';
  }

  isDoctor(): boolean {
    if (!this.isAuthenticated()) {
      return false;
    }
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];

    if (user.role.toLowerCase() === 'doctor') {
      if (user.isActive) {
        return true;
      }
      return false;
    }
    return false;
  }

  isEmployee(): boolean {
    if (!this.isAuthenticated()) {
      return false;
    }
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];

    if (user.role.toLowerCase() === 'employee') {
      if (user.isActive) {
        return true;
      }
      return false;
    }
    return false;
  }

  isAdmin(): boolean {
    if (!this.isAuthenticated()) {
      return false;
    }
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];

    return user.role.toLowerCase() === 'admin';
  }

  canDonate(): boolean {
    if (this.canTakeDonationTest()) {
      return false;
    }
    if (localStorage.getItem('donation') === 'true') {
      return true;
    }
    return false;
  }

  canTakeDonationTest(): boolean {
    return (localStorage.getItem('donation') === null);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('donation');
    this._router.navigate(['/login']);
  }
}
