import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!localStorage.getItem('token'))  {
      this._router.navigate(['/login']);
      return false;
    }
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];

    if (user.role.toLowerCase() === 'doctor' || user.role.toLowerCase() === 'employee') {
      if (!user.isActive) {
        this._router.navigate(['/inactive-account']);
        return false;
      }
    }
    if (next.data['roles'].indexOf(user.role.toLowerCase()) > -1) {
      return true;
    }
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    return false;
  }

}
