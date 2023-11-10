import { LoginService } from './../login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Account } from '../models/account.model';
import { AccountSettings } from '../models/accountsettings.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsettingsService {
  private apiUrl = '/api/accounts';

  constructor(private http: HttpClient,private loginService:LoginService) {}

  findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl);
  }

  update(account: AccountSettings, idc: number): Observable<any> {
    const { password, ...newObj } = account;
    const url = `${this.apiUrl}/${idc}`;
    console.log(newObj);
    return this.http.put<any>(url, newObj);
  }
  updatePass(account: AccountSettings, idc: number): Observable<any> {
    const url = `${this.apiUrl}/${idc}`;
    console.log(account);
    return this.http.put<any>(url, account);
  }

  findById(idc: number): Observable<Account> {
    const url = `${this.apiUrl}/${idc}`;
    return this.http.get<Account>(url);
  }

  deleteById(idc: number): Observable<void> {
    const url = `${this.apiUrl}/${idc}`;
    return this.http.delete<void>(url);
  }

  findByEmail(email: string): Observable<AccountSettings> {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<AccountSettings>(url);
  }
  findByEmail2(email: string): Observable<Account> {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<Account>(url);
  }
  updateRole(idAccount:number,role:string):Observable<void>{
    const url = `${this.apiUrl}/role/${idAccount}`;
    return this.http.put<void>(url,role);
  }
}
