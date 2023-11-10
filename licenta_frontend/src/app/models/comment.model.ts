import { Account } from './account.model';
import { Data } from "@angular/router";
import { AccountReg } from "./accountreg.model";

export interface Commentcoment {
  idComment: number;
  account: AccountReg;
  commentMessage: string;
  commentDate:string;
  checked:boolean;
}
