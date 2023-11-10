import { AccountReg } from './../models/accountreg.model';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { AccountsettingsService } from './accountsettings.service';
import { AccountSettings } from '../models/accountsettings.model';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponen implements OnInit {
  account: AccountSettings = {
    idc: 0,
    password:'',
    firstname: '',
    lastname: '',
    role:'',
    phoneNumber: ''
  };
  fname:string="";
  lname:string="";
  phone:string="";
  newPassword:string ="";
  repeatPassword:string="";
  messageUpdate:string="";
  passwordMessage:string="";


  constructor(private accountService: AccountsettingsService,private loginService:LoginService) {}

  ngOnInit(): void {
    this.getAccountDetails();

  }

  getAccountDetails(): void {
    const email = this.loginService.getUsername();
    console.log(email);
    this.accountService.findByEmail(email).subscribe(
      (account: AccountSettings) => {
        this.account = account;
        this.fname=account.firstname;
        this.lname=account.lastname;
        this.phone=account.phoneNumber;
      }
    );
  }

  updateAccount(): void {
    console.log(this.account);
    this.account.firstname=this.fname;
    this.account.lastname=this.lname;
    this.account.phoneNumber=this.phone;
    this.accountService.update(this.account,this.account.idc).subscribe(
      () => {
        this.messageUpdate='Account updated successfully';
      }
    );
  }
  updatePassword(): void {
    console.log(this.account);
    if(this.newPassword!=="" && this.newPassword===this.repeatPassword)
    {
      this.account.password=this.newPassword;
      this.accountService.updatePass(this.account,this.account.idc).subscribe(
        () => {
          this.passwordMessage='Password updated successfully'
        }
      );
      this.newPassword="";
      this.repeatPassword="";
    }

  }
}
