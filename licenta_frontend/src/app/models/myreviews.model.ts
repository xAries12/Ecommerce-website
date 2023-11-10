import { Product } from "./product.model";

export interface MyReview {
  idReview: number;
  accountIdc: number;
  productIdp: number;
  reviewMessage: string;
  reviewStars: number;
  reviewDate: string;
  product?:Product;
}
