import { Keyboard } from 'src/app/models/product.model';
import { KeyboardService } from './../keyboard.service';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
 export class KeyboardComponent implements OnInit {
  keyboards: Keyboard[] = [];
  keyboardForm: FormGroup;
  selectedKeyboard: Keyboard | null = null;
  selectedKeyboardForm: FormGroup;
  filtred:boolean=false;
  starRatings: number[] = [1, 2, 3, 4, 5];
  filteredProducts: Keyboard[] = [];
  searchQuery: string = '';


  constructor(private keyboardService: KeyboardService, private fb: FormBuilder,private router:Router,private cartService:CartService) {
    this.keyboardForm = this.fb.group({
      id: [''],
      image: [''],
      stock: [''],
      category: [''],
      price: [''],
      warranty: [''],
      reviews: [''],
      name: [''],
      brand: [''],
      type: [''],
      color: [''],
      numberKeys: [''],
      technology: [''],
      size: [''],
      weight: [''],
      keyboardInterface: [''],
      soSystems: [''],
      palmRest: [''],
      characteristics: [''],
      lighting: [''],
      layout: [''],
      other: ['']
    });

    this.selectedKeyboardForm = this.fb.group({
      id: [''],
      image: [''],
      stock: [''],
      category: [''],
      price: [''],
      warranty: [''],
      reviews: [''],
      name: [''],
      brand: [''],
      type: [''],
      color: [''],
      numberKeys: [''],
      technology: [''],
      size: [''],
      weight: [''],
      keyboardInterface: [''],
      soSystems: [''],
      palmRest: [''],
      characteristics: [''],
      lighting: [''],
      layout: [''],
      other: ['']
    });
  }

  ngOnInit() {
    this.getKeyboards();
  }

  getKeyboards(): void {
    this.keyboardService.getKeyboards().subscribe(keyboards => {
      this.keyboards = keyboards;
    });
  }

  createKeyboard(): void {
    this.keyboardService.createKeyboard(this.keyboardForm.value).subscribe(keyboard => {
      this.keyboards.unshift(keyboard);
      this.keyboardForm.reset();
    });
  }

  selectKeyboard(keyboard: Keyboard): void {
    this.selectedKeyboard = keyboard;
    this.selectedKeyboardForm.patchValue(keyboard);
  }

  updateKeyboard(event: Event): void {
    if (this.selectedKeyboard) {
      const updatedKeyboard = { ...this.selectedKeyboard, ...this.selectedKeyboardForm.value };
      this.keyboardService.updateKeyboard(updatedKeyboard).subscribe(updatedKeyboard => {
        this.keyboards = this.keyboards.map(keyboard => keyboard.id === updatedKeyboard.id ? updatedKeyboard : keyboard);
        this.selectedKeyboard = null;

      });
    }
    event.stopPropagation();
  }

  deleteKeyboard(id: number): void {
    this.keyboardService.deleteKeyboard(id).subscribe(() => {
      this.keyboards = this.keyboards.filter(keyboard => keyboard.id !== id);

    });
  }
  navigate(id: number) {
    this.router.navigate(['/keyboard/', id]);

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
    this.filteredProducts = this.keyboards.filter((product: Keyboard) => {
      let match = true;

      if (this.brandFilter && !product.brand.toLowerCase().includes(this.brandFilter.toLowerCase())) {
        match = false;
      }

      if (this.interfaceFilter && product.keyboardInterface.toLowerCase() !== this.interfaceFilter.toLowerCase()) {
        match = false;
      }

      if (this.priceFilterMax && product.price > this.priceFilterMax) {
        match = false;
      }
      if (this.priceFilterMin && product.price < this.priceFilterMin) {
        match = false;
      }
      if (this.searchQuery && !this.searchInKeyboard(product)) {
        match = false;
      }
      return match;
    });
  }
  searchInKeyboard(product: Keyboard): boolean {
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
