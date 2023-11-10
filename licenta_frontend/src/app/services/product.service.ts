import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="api/products"
  constructor(private http:HttpClient) { }

  getProduct(idp:number):Observable<Product>{
    return this.http.get<Product>(`${this.url}/${idp}`);
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`api/get_products`);
  }
}
