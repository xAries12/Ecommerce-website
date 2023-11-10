import { Address } from './../models/address.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountsettingsService } from '../accountsettings/accountsettings.service';
import { LoginService } from '../login/login.service';
import { Account } from '../models/account.model';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = '/api';
  account: Account | undefined;

  constructor(private http: HttpClient,private accountSettingsService:AccountsettingsService,private loginService:LoginService) { }


  findByAccountIdc(): Observable<Address[]> {
    return this.accountSettingsService.findByEmail2(this.loginService.getUsername()).pipe(
      switchMap((account: Account) => {
        this.account = account;
        const url = `${this.apiUrl}/accounts/${this.account?.idc}/addresses`;
        return this.http.get<Address[]>(url);
      })
    );
  }
  updateAddress(ida:number,address:Address):any{
    const url = `${this.apiUrl}/addresses/${ida}`;
   return this.http.put<Address>(url,address);

  }
  addAddress(address:Address):any{
    return this.accountSettingsService.findByEmail2(this.loginService.getUsername()).pipe(
      switchMap((account: Account) => {
        this.account = account;
        address.account=account;
        const newAdd: any = address;
        delete newAdd.idAddress;
        console.log(newAdd);

        console.log("Am ajuns aici baii"+account);
        const url =`${this.apiUrl}/accounts/${account.idc}/addresses`;
        return this.http.post<Address>(url,newAdd);
      })
    );
  }
  removeAddress(ida:number):Observable<void>{
    const url = `${this.apiUrl}/addresses/${ida}`;
    return this.http.delete<void>(url);
  }
  findAddressById(idAddress:number):Observable<Address>{
    const url = `api/addresses/${idAddress}`;
    return this.http.get<Address>(url);
  }
}
