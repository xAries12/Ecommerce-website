import { Component } from '@angular/core';
import { Headset } from 'src/app/models/product.model';
import { HeadsetService } from '../headset.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-headset',
  templateUrl: './headset.component.html',
  styleUrls: ['./headset.component.scss']
})
export class HeadsetComponent {
  headsets: Headset[] = [];
  selectedMouse: Headset | null = null;
  filtred:boolean=false;
  starRatings: number[] = [1, 2, 3, 4, 5];
  filteredProducts: Headset[] = [];
  searchQuery='';


  constructor(private headsetService: HeadsetService, private router:Router,private cartService:CartService) {

  }

  ngOnInit() {
    this.getHeadsets();
  }
  getHeadsets(): void {
    this.headsetService.getHeadsets().subscribe(headset => {
      this.headsets = headset;
    });
  }
  navigate(id: number) {
    this.router.navigate(['/headset/', id]);
  }
  addToCart(event:Event,id:number) {
    this.cartService.addToCart(id);
    event.stopPropagation();
  }
  brandFilter: string = '';
  interfaceFilter: string = '';
  priceFilterMax: number | null=null;
  priceFilterMin: number | null=null;
  applyFilters() {
    this.filtred=true;
    this.filteredProducts = this.headsets.filter((product: Headset) => {
      let match = true;

      if (this.brandFilter && !product.brand.toLowerCase().includes(this.brandFilter.toLowerCase())) {
        match = false;
      }

      if (this.interfaceFilter && product.connectivity.toLowerCase() !== this.interfaceFilter.toLowerCase()) {
        match = false;
      }

      if (this.priceFilterMax && product.price > this.priceFilterMax) {
        match = false;
      }
      if (this.priceFilterMin && product.price < this.priceFilterMin) {
        match = false;
      }
      if (this.searchQuery && !this.searchInProduct(product)) {
        match = false;
      }

      return match;
    });
  }
  searchInProduct(product: Headset): boolean {
    const searchTerm = this.searchQuery.toLowerCase();
    for (const field in product) {
      if (
        Object.prototype.hasOwnProperty.call(product, field) &&
        (typeof (product as any)[field] === 'string' ||
          typeof (product as any)[field] === 'number') && // Add condition for number type
        String((product as any)[field]).toLowerCase().includes(searchTerm) // Convert numbers to string for searching
      ) {
        return true;
      }
    }
    return false;
  }
  starsOverAll(reviews: Review[]):number{
    const reviews2 = reviews.filter(review => review.checked === true);
    return this.starsSumAll(reviews2)/this.numberOfReview(reviews2);
  }
  starsSumAll(reviews: Review[]):number{
    const sum = reviews ? reviews.reduce((acc, review) => acc + review.reviewStars, 0) : 0;
    return sum;
  }
  numberOfReview(reviews: Review[]):number{
    return reviews.length;
  }
  isNaN(value: any): boolean {
    return Number.isNaN(Number(value));
  }
  reviewsLength(reviews: Review[]): number {
    return reviews.filter(review => review.checked === true).length;
  }
}
