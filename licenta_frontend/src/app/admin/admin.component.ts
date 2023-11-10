import { AccountsettingsService } from './../accountsettings/accountsettings.service';
import { KeyboardService } from './../products/keyboard.service';
import {  AfterViewInit, Component, OnInit} from '@angular/core';
import { Keyboard } from '../models/product.model';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { merge, startWith, switchMap, map } from 'rxjs';
import { Account } from '../models/account.model';


@Component({
  selector: 'app-admincommentIndex',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  commentIndex=0;
  menuIndex:number=0;
  reviewIndex:number=0;

  constructor() {
  }

}
