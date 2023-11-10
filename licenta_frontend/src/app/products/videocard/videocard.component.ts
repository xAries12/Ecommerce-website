import { VideocardService } from './../videocard.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { VideoCard } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.scss']
})
export class VideocardComponent {
  videocards: VideoCard[] = [];
  selectedVideocard: VideoCard | null = null;
  filtred:boolean=false;
  starRatings: number[] = [1, 2, 3, 4, 5];
  filteredProducts: VideoCard[] = [];
  searchQuery='';

  constructor(private videocardService: VideocardService, private router:Router,private cartService:CartService) {

  }
  ngOnInit() {
    this.getVideocards();
  }
  getVideocards(): void {
    this.videocardService.getVideocards().subscribe(videocards => {
      this.videocards = videocards;
    });
  }
  navigate(id: number) {
    this.router.navigate(['/videocard/', id]);
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
    this.filteredProducts = this.videocards.filter((product: VideoCard) => {
      let match = true;

      if (this.brandFilter && !product.producer.toLowerCase().includes(this.brandFilter.toLowerCase())) {
        match = false;
      }

      if (this.interfaceFilter && !product.memoryType.toLowerCase().includes(this.interfaceFilter.toLowerCase())) {
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
  searchInProduct(product: VideoCard): boolean {
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
