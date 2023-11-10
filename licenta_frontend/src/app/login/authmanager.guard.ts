import { CanActivate, CanActivateFn, Route, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthManagerGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  async canActivate(): Promise<boolean> {

    if (!this.loginService.isLoggedIn()) return false;

    try {
      const acc = await firstValueFrom(this.loginService.getUser());

      if (acc.role !== 'MANAGER') {
        this.router.navigate(['login']);
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
