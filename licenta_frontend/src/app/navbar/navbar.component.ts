import { CartService } from 'src/app/cart/cart.service';
import { CartComponent } from './../cart/cart.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription, firstValueFrom, map } from 'rxjs';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  peripheralsMenu = "";
  isAdminStatus$: Observable<boolean> | undefined;
  account?:Account;



  constructor(public loginService :LoginService,private router:Router,private cartService:CartService){

  }
  ngOnInit() {
    if(this.loginService.isLoggedIn()){
   this.loginService.getUser().subscribe(ac=>{
    this.account=ac;
   });
  }
  }
  logOut(){
    this.account=undefined;
    this.loginService.logout();
  }

  getCartSize():number{
    return this.cartService.getCartSize();
  }

  navigate(email: string) {
    this.router.navigate(['/accountsettings/', email]);
  }

  navigateReviews(email: string) {
    this.router.navigate(['/myreviews/', email]);
  }

  navigateAddresses(email: string) {
    this.router.navigate(['/myaddresses/', email]);
  }
  navigateTransactions(email: string) {
    this.router.navigate(['/mytransactions/', email]);
  }
  navigateAdmin(){
    this.router.navigate(['/admin']);
  }
  navigateManager(){
    this.router.navigate(['/manager']);
  }
}

