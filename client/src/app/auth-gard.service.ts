import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    if (localStorage.getItem('token')) {
      const tokenData = JSON.parse(localStorage.getItem('token'));
      const tokenPayload = decode(tokenData.token);
      if (
        !this.auth.isAuthenticated() ||
        tokenPayload.role !== expectedRole
      ) {

        switch (tokenPayload.role) {
          case "customer":
            this.router.navigate(['/customer']);
            break;
          case "admin":
            this.router.navigate(['/admin']);
            break;
          case "supervisor":
            this.router.navigate(['/supervisor']);
            break;
          default:
            this.router.navigate(['/customer']);
            break;
        }
        return false;

      }
    }
    return true;
  }

}
