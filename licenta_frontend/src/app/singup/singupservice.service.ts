import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { AccountReg } from '../models/accountreg.model';
@Injectable({
  providedIn: 'root'
})
export class SingupserviceService {
  private apiURL = "/api/store/register";
  constructor(private http:HttpClient) { }


  register(register: AccountReg) {
  return  this.http.post<any>(this.apiURL, register);
 }
}
