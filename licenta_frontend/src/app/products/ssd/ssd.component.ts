import { Component } from '@angular/core';
import { Ssd } from 'src/app/models/product.model';
import { SsdService } from '../ssd.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.scss']
})
export class SsdComponent {
  ssds: Ssd[] = [];
  selectedMouse: Ssd | null = null;
  filtred:boolean=false;
  starRatings: number[] = [1, 2, 3, 4, 5];
  filteredProducts: Ssd[] = [];
  searchQuery='';

  constructor(private ssdService: SsdService, private router:Router,private cartService:CartService) {

  }
  ngOnInit() {
    this.getSsds();
  }
  getSsds(): void {
    this.ssdService.getSsds().subscribe(ssds => {
      this.ssds = ssds;
    });
  }
  navigate(id: number) {
    this.router.navigate(['/ssd/', id]);
  }
  addToCart(event:Event,id:number) {
    this.cartService.addToCart(id);
    event.stopPropagation();
  }
  brandFilter: string = '';
  typeFilter: string = '';
  priceFilterMax: number | null=null;
  priceFilterMin: number | null=null;
  applyFilters() {
    this.filtred=true;
    this.filteredProducts = this.ssds.filter((product: Ssd) => {
      let match = true;

      if (this.brandFilter && !product.series.toLowerCase().includes(this.brandFilter.toLowerCase())) {
        match = false;
      }

      if (this.typeFilter && product.typeSsd.toLowerCase() !== this.typeFilter.toLowerCase()) {
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
  searchInProduct(product: Ssd): boolean {
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
