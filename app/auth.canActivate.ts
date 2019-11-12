import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthCanActivate implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    console.log('Called CanActivate');
    if (!this.loginService.authorised) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}