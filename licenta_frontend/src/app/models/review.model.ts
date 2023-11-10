import { Account } from './account.model';
import { Data } from "@angular/router"
import { Product } from './product.model';
import { Commentcoment } from './comment.model';

export interface Review {
  idReview:number
  product: Product
  account: Account
  reviewMessage: string
  reviewStars: number
  reviewDate: string
  checked:boolean
  comments: Commentcoment[]
}
