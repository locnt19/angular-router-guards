import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  private jwtHelper = new JwtHelperService();

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    const tokenPayLoad = this.jwtHelper.decodeToken(token);
    console.log(tokenPayLoad);
    if (!this.auth.isAuthenticated() || tokenPayLoad.role !== expectedRole) {
      alert('Bạn không có quyền truy cập router này');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route);
  }
}
