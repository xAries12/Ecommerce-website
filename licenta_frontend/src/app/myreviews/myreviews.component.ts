import { Product } from './../models/product.model';
import { ProductService } from './../services/product.service';
import { DatePipe } from '@angular/common';
import { MyReview } from '../models/myreviews.model';
import { Review } from '../models/review.model';
import { LoginService } from './../login/login.service';
import { ReviewService } from './review.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.component.html',
  styleUrls: ['./myreviews.component.scss']
})
export class MyreviewsComponent implements OnInit {
  starRatings: number[] = [1, 2, 3, 4, 5];
  stars:number =1;
  reviews:MyReview[]=[];
  constructor(public reviewService:ReviewService,public loginService:LoginService,public datepipe: DatePipe,private productService:ProductService,private router:Router){}
  ngOnInit(): void {
    this.findByAccountIdc();
  }

  findByAccountIdc(): any {
   this.reviewService.findByAccountIdc().subscribe(re=>{
    this.reviews=re;
    this.reviews.forEach(review => {
        this.productService.getProduct(review.productIdp).subscribe(prod=>{
          review.product=prod;
        })
    });
   });
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
