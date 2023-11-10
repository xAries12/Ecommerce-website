import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThpDto, Transaction, TransactionChartData, TransactionDto } from '../models/transaction.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }
  url:string = 'api/transactions';
  addTransaction(transactionDto:TransactionDto):Observable<Transaction>{
    console.log(transactionDto);
    return this.http.post<Transaction>(this.url,transactionDto);
  }
  addProductToTransaction(thpDto:ThpDto){
    const urlThp='api/thp';
    console.log(thpDto);
    return this.http.post<void>(urlThp,thpDto);
  }

  getTransactionById(idTransaction:number):Observable<Transaction>{
    return this.http.get<Transaction>(`${this.url}/${idTransaction}`);
  }

  getTransactionsByAccountId(accountId:number):Observable<Transaction[]>{
    console.log(accountId);

    return this.http.get<Transaction[]>(`${this.url}/by/${accountId}`);
  }
  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url);
  }
  updateStatus(idTransaction:number,status:string):Observable<void>{
    const url =`${this.url}/${idTransaction}`;
    return this.http.put<void>(url,status);
  }

  getChartData():Observable<TransactionChartData[]>{
    const url = `${this.url}/chart`;
    return this.http.get<TransactionChartData[]>(url);
  }
  getChartData2(time:string):Observable<TransactionChartData[]>{
    const url = `${this.url}/chart/${time}`;
    return this.http.get<TransactionChartData[]>(url);
  }
}
