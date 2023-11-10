import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class AuthAdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  async canActivate(): Promise<boolean> {

    if (!this.loginService.isLoggedIn()) return false;

    try {
      const acc = await firstValueFrom(this.loginService.getUser());

      if (acc.role !== 'ADMIN') {
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
