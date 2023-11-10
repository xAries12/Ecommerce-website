import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';
  private cartItems: CartItem[] = [];

  constructor() {
    this.loadItemsFromLocalStorage();
  }

  addToCart(product: number): void {
    const existingItem = this.cartItems.find(item => item.id === product);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.cartItems.push({ id: product, count: 1 });
    }
    this.saveItemsToLocalStorage();
  }

  removeItem(productId: number): void {
    const index = this.cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      const item = this.cartItems[index];
      item.count -= 1;
      if (item.count <= 0) {
        this.cartItems.splice(index, 1);
      }
      this.saveItemsToLocalStorage();
    }
  }


  getItems(): CartItem[] {
    return this.cartItems;
  }

  private saveItemsToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }

  private loadItemsFromLocalStorage(): void {
    const storedItems = localStorage.getItem(this.storageKey);
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  getCartSize(): number {
    return this.cartItems.reduce((total, item) => total + item.count, 0);
  }
  removeAllItems(): void {
    this.cartItems = [];
    this.saveItemsToLocalStorage();
  }

  
}

