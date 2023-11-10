import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HardDisk } from 'src/app/models/product.model';
import { HarddiskService } from 'src/app/products/harddisk.service';

@Component({
  selector: 'app-motherboard-table',
  templateUrl: './motherboard-table.component.html',
  styleUrls: ['./motherboard-table.component.scss']
})
export class MotherboardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<HardDisk>;
  statsAddHardDisk:boolean=false;
  selectedHardDisk: HardDisk | null = null;
  filterValue='';
  newHardDisk:HardDisk={
    id: 0,
    image: '',
    stock: 0,
    category: 'hard_disk',
    price: 0,
    warranty: 0,
    name: '',
    series: '',
    interfaceType: '',
    typeHdd: '',
    capacity: 0,
    buffer: 0,
    speed: 0,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private hardDiskService:HarddiskService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getHardDisks();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getHardDisks() {
    this.hardDiskService.getHardDisks().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (hardDisk: HardDisk, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        hardDisk.id === filterNum ||
        hardDisk.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedHardDisk(hardDisk: HardDisk): void {
    this.selectedHardDisk = {...hardDisk};
  }

  updateHardDisk(){
    if(this.selectedHardDisk)
    this.hardDiskService.updateHardDisk(this.selectedHardDisk).subscribe(()=>{
      this.selectedHardDisk=null;
      this.getHardDisks();
    })
  }
  cancelEdit(){
    this.selectedHardDisk=null;
    this.getHardDisks();
  }
  toggleAddHardDiskForm(){
    this.statsAddHardDisk=!this.statsAddHardDisk;
    this.getHardDisks();
  }
  addHardDisk(){
    const { id, ...hardDiskWithoutId } = this.newHardDisk;
    this.hardDiskService.createHardDisk(this.newHardDisk).subscribe(()=>{
      this.statsAddHardDisk=false;
      this.newHardDisk={
        id: 0,
        image: '',
        stock: 0,
        category: 'hard_disk',
        price: 0,
        warranty: 0,
        name: '',
        series: '',
        interfaceType: '',
        typeHdd: '',
        capacity: 0,
        buffer: 0,
        speed: 0,
        other: '',
        reviews:[]
      };
      this.getHardDisks();
    }
    );
  }
}
