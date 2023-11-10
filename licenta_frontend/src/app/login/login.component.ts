import { LoginService } from './login.service';
import { Login } from './../models/login.model';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
logOut() {
  this.loginService.logout();
}
  email: string="";
  password: string="";
  faile=false;

  constructor(public loginService:LoginService,private router:Router,private snackBar: MatSnackBar) {}

  authenticateData(): void {
    const login: Login = {
      email: this.email,
      password: this.password
    }
    this.getAuth(login);
}
  getAuth(login:Login):void{
    this.loginService.authenticate(login).subscribe(
      () => {
        this.navigate();
      },
      (error) => {
        this.snackBar.open('Wrong email or password!', 'Close', {
          duration: 3000, // Set the duration for which the snackbar will be displayed
        });
      }
    );
  }

  navigate(){
    this.router.navigate(['/home'])
  }
}
