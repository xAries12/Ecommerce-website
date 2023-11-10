import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Motherboard } from 'src/app/models/product.model';
import { MotherboardService } from 'src/app/products/motherboard.service';

@Component({
  selector: 'app-harddisk-table',
  templateUrl: './harddisk-table.component.html',
  styleUrls: ['./harddisk-table.component.scss']
})
export class HarddiskTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Motherboard>;
  statsAddMotherboard:boolean=false;
  selectedMotherboard: Motherboard | null = null;
  filterValue='';
  newMotherboard:Motherboard={
    id: 0,
    image: '',
    stock: 0,
    category: 'motherboard',
    price: 0,
    warranty: 0,
    name: '',
    format: '',
    processorSocket: '',
    memoryType: '',
    numberOfSlots: 0,
    audioChipset: '',
    integratedNetworkcard: '',
    integratedVideocard: '',
    sataNumber: 0,
    ssdNumber: 0,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private motherboardService:MotherboardService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getMotherboards();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getMotherboards() {
    this.motherboardService.getMotherboards().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (motherboard: Motherboard, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        motherboard.id === filterNum ||
        motherboard.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedMotherboard(motherboard: Motherboard): void {
    this.selectedMotherboard = {...motherboard};
  }

  updateMotherboard(){
    if(this.selectedMotherboard)
    this.motherboardService.updateMotherboard(this.selectedMotherboard).subscribe(()=>{
      this.selectedMotherboard=null;
      this.getMotherboards();
    })
  }
  cancelEdit(){
    this.selectedMotherboard=null;
    this.getMotherboards();
  }
  toggleAddMotherboardForm(){
    this.statsAddMotherboard=!this.statsAddMotherboard;
  }
  addMotherboard(){
    const { id, ...motherboardWithoutId } = this.newMotherboard;
    this.motherboardService.createMotherboard(this.newMotherboard).subscribe(()=>{
      this.statsAddMotherboard=false;
      this.newMotherboard={
        id: 0,
        image: '',
        stock: 0,
        category: 'motherboard',
        price: 0,
        warranty: 0,
        name: '',
        format: '',
        processorSocket: '',
        memoryType: '',
        numberOfSlots: 0,
        audioChipset: '',
        integratedNetworkcard: '',
        integratedVideocard: '',
        sataNumber: 0,
        ssdNumber: 0,
        other: '',
        reviews:[]
      };
      this.getMotherboards();
    }
    );
  }
}
