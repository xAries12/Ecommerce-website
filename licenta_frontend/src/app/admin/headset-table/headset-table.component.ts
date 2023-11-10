import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Headset } from 'src/app/models/product.model';
import { HeadsetService } from 'src/app/products/headset.service';

@Component({
  selector: 'app-headset-table',
  templateUrl: './headset-table.component.html',
  styleUrls: ['./headset-table.component.scss']
})
export class HeadsetTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Headset>;
  statsAddHeadset:boolean=false;
  selectedHeadset: Headset | null = null;
  filterValue='';
  newHeadset:Headset={
    id: 0,
    image: '',
    stock: 0,
    category: 'headset',
    price: 0,
    warranty: 0,
    name: '',
    brand: '',
    technology: '',
    sound: '',
    type: '',
    sensitivity: '',
    response: '',
    microphoneNoiseCancelling: true,
    compatibility: '',
    connectivity: '',
    light: true,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private headsetService:HeadsetService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getHeadsets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getHeadsets() {
    this.headsetService.getHeadsets().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (headset: Headset, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        headset.id === filterNum ||
        headset.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedHeadset(headset: Headset): void {
    this.selectedHeadset = {...headset};
  }

  updateHeadset(){
    if(this.selectedHeadset)
    this.headsetService.updateHeadset(this.selectedHeadset).subscribe(()=>{
      this.selectedHeadset=null;
      this.getHeadsets();
    })
  }
  cancelEdit(){
    this.selectedHeadset=null;
    this.getHeadsets();
  }
  toggleAddHeadsetForm(){
    this.statsAddHeadset=!this.statsAddHeadset;
  }
  addHeadset(){
    const { id, ...headsetWithoutId } = this.newHeadset;
    this.headsetService.createHeadset(this.newHeadset).subscribe(()=>{
      this.statsAddHeadset=false;
      this.newHeadset={
        id: 0,
        image: '',
        stock: 0,
        category: 'headset',
        price: 0,
        warranty: 0,
        name: '',
        brand: '',
        technology: '',
        sound: '',
        type: '',
        sensitivity: '',
        response: '',
        microphoneNoiseCancelling: true,
        compatibility: '',
        connectivity: '',
        light: true,
        other: '',
        reviews:[]
      };
      this.getHeadsets();
    }
    );
  }
}
