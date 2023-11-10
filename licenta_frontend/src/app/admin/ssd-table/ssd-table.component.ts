import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ssd } from 'src/app/models/product.model';
import { SsdService } from 'src/app/products/ssd.service';

@Component({
  selector: 'app-ssd-table',
  templateUrl: './ssd-table.component.html',
  styleUrls: ['./ssd-table.component.scss']
})
export class SsdTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Ssd>;
  statsAddSsd:boolean=false;
  selectedSsd: Ssd | null = null;
  filterValue='';
  newSsd:Ssd={
    id: 0,
    image: '',
    stock: 0,
    category: 'ssd',
    price: 0,
    warranty: 0,
    name: '',
    typeSsd: '',
    series: '',
    formFactor: '',
    interfaceType: '',
    nvmeSupport: true,
    capacity: 0,
    maxReading: 0,
    maxWrite: 0,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private ssdService:SsdService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getSsds();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getSsds() {
    this.ssdService.getSsds().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (ssd: Ssd, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        ssd.id === filterNum ||
        ssd.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedSsd(ssd: Ssd): void {
    this.selectedSsd = {...ssd};
  }

  updateSsd(){
    if(this.selectedSsd)
    this.ssdService.updateSsd(this.selectedSsd).subscribe(()=>{
      this.selectedSsd=null;
      this.getSsds();
    })
  }
  cancelEdit(){
    this.selectedSsd=null;
    this.getSsds();
  }
  toggleAddSsdForm(){
    this.statsAddSsd=!this.statsAddSsd;
  }
  addSsd(){
    const { id, ...ssdWithoutId } = this.newSsd;
    this.ssdService.createSsd(this.newSsd).subscribe(()=>{
      this.statsAddSsd=false;
      this.newSsd={
        id: 0,
        image: '',
        stock: 0,
        category: 'ssd',
        price: 0,
        warranty: 0,
        name: '',
        typeSsd: '',
        series: '',
        formFactor: '',
        interfaceType: '',
        nvmeSupport: true,
        capacity: 0,
        maxReading: 0,
        maxWrite: 0,
        other: '',
        reviews:[]
      };
      this.getSsds();
    }
    );
  }
}

