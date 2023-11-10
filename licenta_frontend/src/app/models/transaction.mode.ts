import { Account } from "./account.model"
import { Keyboard, Product } from "./product.model"

export interface TransactionDto {
  idAccount: number
  address: string
  totalPrice: number
}
export interface Transaction {
  idTransaction: number
  account: Account
  status:string
  transactionHasProducts:Thp2[]
  address:string
  totalPrice:number
  transactionDate: string
}

export interface ThpDto{
  idProduct:number
  idTransaction:number
  count:number
}


export interface Thp{
  transactionHasProductId:number
  product:Product
  count:number
}

export interface Thp2{
  transactionHasProductId:number
  productId:number
  count:number
  price:number
  product?:Product
}

export interface TransactionChartData{
  category:string
  number:number
}
export interface ChartData {
  label:string
  y: number
}
