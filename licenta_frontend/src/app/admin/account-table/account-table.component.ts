import { AccountsettingsService } from './../../accountsettings/accountsettings.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.scss']
})
export class AccountTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['idc','email', 'firstname', 'lastname', 'phoneNumber', 'role', 'status','edit'];
  dataSource: MatTableDataSource<Account>;
  editingAccount:Account | null = null;
  filterValue='';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private accountService:AccountsettingsService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
  this.getAccounts();
  }

  getAccounts() {
    this.accountService.findAll().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (account: Account, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        account.idc === filterNum ||
        account.email.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  changeEditing(account:Account){
    this.editingAccount={...account};
    console.log(this.editingAccount);

  }
  cancelEdit(){
    this.editingAccount=null;
    this.getAccounts();
  }
  onSubmit(){
    if(this.editingAccount!==null)
    this.accountService.updateRole(this.editingAccount.idc,this.editingAccount.role).subscribe(()=>{
      this.getAccounts();
      this.editingAccount=null;
    })
  }
}
