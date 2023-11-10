import { ProductService } from './../services/product.service';
import { Transaction } from './../models/transaction.mode';
import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TransactionService } from '../services/transaction.service';
import { AddressService } from '../myaddresses/address.service';
import { Observable, map } from 'rxjs';
import { DatePipe } from '@angular/common';
import { KeyboardService } from '../products/keyboard.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mytransactions',
  templateUrl: './mytransactions.component.html',
  styleUrls: ['./mytransactions.component.scss']
})
export class MytransactionsComponent {
  transactions?:Transaction[];
  constructor(
    private loginService:LoginService,
    private transactionService:TransactionService,
    private addressService:AddressService,
    public datepipe:DatePipe,
    private productService:ProductService,
    private router:Router
    ){
      this.getTransactios();

    }

 getTransactios(){
  this.loginService.getUser().subscribe((acc)=>{
    this.transactionService.getTransactionsByAccountId(acc.idc).subscribe((tr)=>{
      this.transactions=tr;
      this.transactions.map(tr=>{
        tr.transactionHasProducts.map(tp=>{
          this.productService.getProduct(tp.productId).subscribe(kb=>{
            tp.product=kb;
            console.log(kb);

          });
        })
      })
    });
  })
 }
 navigate(product: Product) {
  if(product.category==='video_card')
  this.router.navigate([`/videocard/`, product.id]);
  else if(product.category==='ram')
  this.router.navigate([`/ram-memory/`, product.id]);
  else if(product.category==='hard_disk')
  this.router.navigate([`/hard-disk/`, product.id]);
  else
  this.router.navigate([`/${product.category}/`, product.id]);
}


}
