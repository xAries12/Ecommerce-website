import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mouse } from 'src/app/models/product.model';
import { MouseService } from 'src/app/products/mouse.service';

@Component({
  selector: 'app-mouse-table',
  templateUrl: './mouse-table.component.html',
  styleUrls: ['./mouse-table.component.scss']
})
export class MouseTableComponent  implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Mouse>;
  statsAddMouse:boolean=false;
  selectedMouse: Mouse | null = null;
  filterValue='';
  newMouse:Mouse={
    id: 0,
    image: '',
    stock: 0,
    category: 'mouse',
    price: 0,
    warranty: 0,
    name: '',
    brand: '',
    technology: '',
    mouseInterface: '',
    sensorType: '',
    maximumResolution: 0,
    numberButtons: 0,
    scrollWheel: 0,
    color: '',
    size: '',
    weight: 0,
    supportedOs: '',
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private mouseService:MouseService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getMouses();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getMouses() {
    this.mouseService.getMouses().subscribe(ms => {
      this.dataSource.data=ms;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (keyboard: Mouse, filter: string) => {
      const filterNum = Number(filter);
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
  getEditedMouse(keyboard: Mouse): void {
    this.selectedMouse = {...keyboard};
  }

  updateMouse(){
    if(this.selectedMouse)
    this.mouseService.updateMouse(this.selectedMouse).subscribe(()=>{
      this.selectedMouse=null;
      this.getMouses();
    })
  }
  cancelEdit(){
    this.selectedMouse=null;
    this.getMouses();
  }
  toggleAddMouseForm(){
    this.statsAddMouse=!this.statsAddMouse;
  }
  addMouse(){
    const { id, ...mouseWithoutId } = this.newMouse;
    this.mouseService.createMouse(this.newMouse).subscribe(()=>{
      this.statsAddMouse=false;
      this.newMouse={
        id: 0,
        image: '',
        stock: 0,
        category: 'mouse',
        price: 0,
        warranty: 0,
        name: '',
        brand: '',
        technology: '',
        mouseInterface: '',
        sensorType: '',
        maximumResolution: 0,
        numberButtons: 0,
        scrollWheel: 0,
        color: '',
        size: '',
        weight: 0,
        supportedOs: '',
        other: '',
        reviews:[]
      };
      this.getMouses();
    }
    );
  }
}
