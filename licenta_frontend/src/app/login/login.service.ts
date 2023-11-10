import { AccountsettingsService } from './../accountsettings/accountsettings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import jwt_decode from 'jwt-decode';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "/api/store/authenticate";
  user?:Account;
  isLogIn=false;
  constructor(private http:HttpClient) { }

  authenticate(login: Login) {
   return this.http.post<any>(this.apiURL, login,{withCredentials:true})
      .pipe(tap(res => {
        console.log(res);
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
        this.getUser().subscribe(ac=>{
          this.user=ac;
          this.isLogIn=true;
        });
      }));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.user=undefined;
    this.isLogIn=false;
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  getDecodedAccessToken(): any {
    let token = localStorage.getItem('access_token');
    if (token) {
        return jwt_decode(token);
    }
    return null;
}

  getUsername(): string {

    let decodedToken = this.getDecodedAccessToken();
    return decodedToken ? decodedToken.sub : null;
  }
  setToken(token:string):void{
    localStorage.setItem('access_token', token);
  }

  getUser():Observable<Account>{
    const url =  `/api/accounts/email/${this.getUsername()}`;
    return this.http.get<Account>(url);
  }

}


