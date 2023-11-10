import { Account } from "./account.model"

export interface Address {
  idAddress: number
  account: Account
  address: string
  country: string
  city:string
}
