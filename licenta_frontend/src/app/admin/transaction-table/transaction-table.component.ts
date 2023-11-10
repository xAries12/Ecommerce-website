import { DatePipe } from '@angular/common';
import { ProductService } from './../../services/product.service';
import { TransactionService } from './../../services/transaction.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/models/transaction.mode';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['idTransaction','account.email', 'status', 'address', 'totalPrice', 'transactionDate','action'];
  dataSource: MatTableDataSource<Transaction>;
  filterValue='';
  editingTransaction:Transaction | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private transactionService:TransactionService,
    private productService:ProductService,
    public datepipe:DatePipe
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
  this.getTransactions();
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(kb => {
      kb.forEach(trans=>{
        trans.transactionHasProducts.forEach(prod=>{
          this.productService.getProduct(prod.productId).subscribe(pro=>{
            prod.product=pro;
          })
        })
      });
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (account: Transaction, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or email
      return (
        account.idTransaction === filterNum ||
        account.account.email.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  changeEditing(transaction:Transaction){
    this.editingTransaction={...transaction};
    console.log(this.editingTransaction);

  }
  onSubmit(){
    if(this.editingTransaction!==null)
    this.transactionService.updateStatus(this.editingTransaction.idTransaction,this.editingTransaction.status).subscribe(()=>{
      this.getTransactions();
      this.editingTransaction=null;
    })
  }
  cancelEdit(){
    this.editingTransaction=null;
    this.getTransactions();
  }
}
