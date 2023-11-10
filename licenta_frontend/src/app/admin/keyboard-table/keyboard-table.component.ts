import { KeyboardService } from './../../products/keyboard.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Keyboard } from 'src/app/models/product.model';


@Component({
  selector: 'app-keyboard-table',
  templateUrl: './keyboard-table.component.html',
  styleUrls: ['./keyboard-table.component.scss']
})


export class KeyboardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Keyboard>;
  statsAddKeyboard:boolean=false;
  selectedKeyboard: Keyboard | null = null;
  filterValue='';
  newKeyboard:Keyboard={
    id: 0,
    image: '',
    stock: 0,
    category: 'keyboard',
    price: 0,
    warranty: 0,
    name: '',
    brand: '',
    type: '',
    color: '',
    numberKeys: false,
    technology: '',
    size: '',
    weight: 0,
    keyboardInterface: '',
    soSystems: '',
    palmRest: false,
    characteristics: '',
    lighting: false,
    layout: '',
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private keyboardService:KeyboardService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getKeyboards();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getKeyboards() {
    this.keyboardService.getKeyboards().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (keyboard: Keyboard, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        keyboard.id === filterNum ||
        keyboard.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedKeyboard(keyboard: Keyboard): void {
    this.selectedKeyboard = {...keyboard};
  }

  updateKeyboard(){
    if(this.selectedKeyboard)
    this.keyboardService.updateKeyboard(this.selectedKeyboard).subscribe(()=>{
      this.selectedKeyboard=null;
      this.getKeyboards();
    })
  }
  cancelEdit(){
    this.selectedKeyboard=null;
    this.getKeyboards();
  }
  toggleAddKeyboardForm(){
    this.statsAddKeyboard=!this.statsAddKeyboard;
  }
  addKeyboard(){
    const { id, ...keyboardWithoutId } = this.newKeyboard;
    this.keyboardService.createKeyboard(this.newKeyboard).subscribe(()=>{
      this.statsAddKeyboard=false;
      this.newKeyboard={
        id: 0,
        image: '',
        stock: 0,
        category: 'keyboard',
        price: 0,
        warranty: 0,
        name: '',
        brand: '',
        type: '',
        color: '',
        numberKeys: false,
        technology: '',
        size: '',
        weight: 0,
        keyboardInterface: '',
        soSystems: '',
        palmRest: false,
        characteristics: '',
        lighting: false,
        layout: '',
        other: '',
        reviews:[]
      };
      this.getKeyboards();
    }
    );
  }
}

