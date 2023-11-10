import { ProductService } from './../services/product.service';
import { AddressService } from './../myaddresses/address.service';
import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from './cart.service';
import { Product } from '../models/product.model';
import { ThpDto, Transaction, TransactionDto } from '../models/transaction.mode';
import { TransactionService } from '../services/transaction.service';
import { LoginService } from '../login/login.service';
import { Address } from '../models/address.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  productsList: Product[] = [];
  transaction!: Transaction;
  private storageKey = 'cartItems';
  openAddress=false;
  showAddAddressForm=false;
  addresses:Address[]=[];
  transsucces=false;
  products:{ product: Product, count: number }[]=[];
  selectedAddressId:string | undefined;
  selectedPayment:number | undefined;
  transactionSend:TransactionDto={
    idAccount:0,
    address:"",
    totalPrice:0
  }
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

  constructor(public cartService: CartService,
     private productService: ProductService,
     private transactionService:TransactionService,
     public loginService:LoginService,
     private addressService:AddressService
     ) {
    this.cartItems = this.cartService.getItems();
  }

  ngOnInit() {
    this.getKeyboards();
    this.getAddresses();
  }
  getAddresses(): any {
    if(this.loginService.isLoggedIn()){
    this.addressService.findByAccountIdc().subscribe(re=>{
     this.addresses=re;
    });
  }
   }

  getKeyboards(): void {
    this.productService.getProducts().subscribe(products => {
      this.productsList = products;
      this.products=this.getFilteredProducts();
    });
  }

  getFilteredProducts(): { product: Product, count: number }[] {
    const filteredProducts: { product: Product, count: number }[] = [];
    this.cartItems.forEach(cartItem => {
      const foundProduct = this.productsList.find(product => product.id === cartItem.id);
      if (foundProduct) {
        filteredProducts.push({ product: foundProduct, count: cartItem.count });
      }
    });
    return filteredProducts;
  }

  decreaseCount(product: { product: Product, count: number }): void {
    if (product.count > 1) {
      this.cartService.removeItem(product.product.id);
    }
    else(this.removeItem(product.product.id))
  }

  increaseCount(product: { product: Product, count: number }): void {
      this.cartService.addToCart(product.product.id);
  }

  removeItem(productId: number): void {
    const index = this.cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveItemsToLocalStorage();
    }
  }
  private saveItemsToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }
  getTotalPrice(): number {
    let totalPrice = 0;
    const filteredProducts = this.getFilteredProducts();
    for (const product of filteredProducts) {
      totalPrice += product.product.price * product.count;
    }
    return totalPrice;
  }

  addTransaction(transactionDto:TransactionDto){
   this.transactionService.addTransaction(transactionDto).subscribe((tr)=>{
    this.transaction=tr;
    this.addProductToTransaction(tr.idTransaction);
   });
  }

  addProductToTransaction(idTrans:number)
  {
    const localStorageData = localStorage.getItem('cartItems');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : null;
    const cartItems: ThpDto[] = parsedData.map((item: any) => ({
      idProduct: item.id,
      idTransaction:idTrans,
      count: item.count
    }));
    console.log(cartItems);
    cartItems.map((item)=>{
      this.transactionService.addProductToTransaction(item).subscribe();
    });
    this.cartService.removeAllItems();
    this.products=this.getFilteredProducts();
    this.cartService.getItems();
  }
  finishTransaction(){
    this.loginService.getUser().subscribe((acc)=>{
      this.transactionSend.idAccount=acc.idc;
      if(this.selectedAddressId)
      this.transactionSend.address=this.selectedAddressId;
      this.transactionSend.totalPrice = this.getTotalPrice();
      this.addTransaction(this.transactionSend);
      this.transsucces=true;
    });
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
findByAccountIdc(): any {
  this.addressService.findByAccountIdc().subscribe(re=>{
   this.addresses=re;
   console.log(this.addresses);
  });
 }
 setAddress(address:Address):string{
  return `Country: ${address.country}, City: ${address.city}, Address: ${address.address}`;
 }
}
