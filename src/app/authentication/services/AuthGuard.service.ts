import { Injectable } from '@angular/core';
import { LoginService } from './login.service'
import { Router, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate{
  IsActiveUser = false;
  constructor(private authService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.login()) {
      this.IsActiveUser = true;
      //console.log('login success');
      return true;
    }
    else {
      //console.log("Please login")
      this.IsActiveUser = false;
      this.authService.logout();
      if (localStorage.getItem('access_token') == null || localStorage.getItem('access_token')=='')
        this.router.navigate(['Login']);
      else
        this.router.navigate(['Login']);

    }
  }
}