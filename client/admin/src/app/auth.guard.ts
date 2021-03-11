import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private rout: Router, private loginService: LoginService) { }
  canActivate() {

    if (this.loginService.activeUser) {
      return true;
    }
    this.rout.navigate(['/login']);
    return false;
  }

}
