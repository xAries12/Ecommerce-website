import { AddressService } from './address.service';
import { Account } from './../models/account.model';
import { Address } from '../models/address.model';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { AccountsettingsService } from '../accountsettings/accountsettings.service';

@Component({
  selector: 'app-myaddresses',
  templateUrl: './myaddresses.component.html',
  styleUrls: ['./myaddresses.component.scss']
})
export class MyaddressesComponent implements OnInit{
constructor(private loginService:LoginService,private addressService:AddressService){}

addresses:Address[]=[]
account:Account = {idc: 0,
  email: '',
  firstname: '',
  lastname: '',
  phoneNumber: '',
  role:''
}
editingAddress: Address | undefined;
showAddAddressForm = false;
newAddress:Address = {
  idAddress: 0,
  account: {
    idc: 0,
    email: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    role:''
  },
  address: '',
  country: '',
  city: ''
};



ngOnInit(): void {
  this.findByAccountIdc()
}
findByAccountIdc(): any {
  this.addressService.findByAccountIdc().subscribe(re=>{
   this.addresses=re;
   console.log(this.addresses);
  });
 }

 editAddress(address: Address): void {
  this.editingAddress = { ...address };
}
cancelEdit(): void {
  this.editingAddress = undefined;
}

saveAddress(): void {

  if(this.editingAddress!==undefined)
  {
    this.addressService.updateAddress(this.editingAddress.idAddress,this.editingAddress).subscribe();
    console.log(this.editingAddress);
    console.log("sunt aici");
  }
  else {
    console.log("E goala adresa!");
  }
  this.findByAccountIdc();
  this.editingAddress = undefined;
}
removeAddress(address: Address): void {
      this.addressService.removeAddress(address.idAddress).subscribe(
      ()=>{
        this.editingAddress=undefined;
        this.findByAccountIdc();
      }
    );

}
toggleAddAddressForm() {
  this.showAddAddressForm = !this.showAddAddressForm;
  this.resetNewAddress();
}
resetNewAddress() {
  this.newAddress = {
    idAddress: 0,
    account: {
      idc: 0,
      email: '',
      firstname: '',
      lastname: '',
      phoneNumber: '',
      role:''
    },
    address: '',
    country: '',
    city: ''
  };;
}
addAddress() {

    console.log(this.newAddress);

    this.addressService.addAddress(this.newAddress).subscribe(
      ()=>{
        this.resetNewAddress();
        this.showAddAddressForm = false;
        this.findByAccountIdc();
      }
    );




}
cancelAddAddress() {
  this.resetNewAddress();
  this.showAddAddressForm = false;
}

}
