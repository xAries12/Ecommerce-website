import { Router } from '@angular/router';
import { HarddiskService } from './../harddisk.service';
import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HardDisk } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-harddisk',
  templateUrl: './harddisk.component.html',
  styleUrls: ['./harddisk.component.scss']
})
export class HarddiskComponent {
  hardDisks: HardDisk[] = [];
  selectedHardDisk: HardDisk | null = null;
  filtred:boolean=false;
  starRatings: number[] = [1, 2, 3, 4, 5];
  filteredProducts: HardDisk[] = [];
  searchQuery='';
  constructor(private harddiskService: HarddiskService, private router:Router,private cartService:CartService) {

  }
  ngOnInit() {
    this.getMouses();
  }
  getMouses(): void {
    this.harddiskService.getHardDisks().subscribe(hardDisk => {
      this.hardDisks = hardDisk;
    });
  }
  navigate(id: number) {
    this.router.navigate(['/hard-disk/', id]);
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
    this.filteredProducts = this.hardDisks.filter((product: HardDisk) => {
      let match = true;

      if (this.brandFilter && !product.series.toLowerCase().includes(this.brandFilter.toLowerCase())) {
        match = false;
      }

      if (this.typeFilter && product.typeHdd.toLowerCase() !== this.typeFilter.toLowerCase()) {
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
  searchInProduct(product: HardDisk): boolean {
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
