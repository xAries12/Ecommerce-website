import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RamMemory } from 'src/app/models/product.model';
import { RammemoryService } from 'src/app/products/rammemory.service';

@Component({
  selector: 'app-rammemory-table',
  templateUrl: './rammemory-table.component.html',
  styleUrls: ['./rammemory-table.component.scss']
})
export class RammemoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<RamMemory>;
  statsAddRamMemory:boolean=false;
  selectedRamMemory: RamMemory | null = null;
  filterValue='';
  newRamMemory:RamMemory={
    id: 0,
    image: '',
    stock: 0,
    category: 'ram',
    price: 0,
    warranty: 0,
    name: '',
    series: '',
    type: '',
    capacity: 0,
    frequency: 0,
    lighting: true,
    color: '',
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private ramMemoryService:RammemoryService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getRamMemorys();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getRamMemorys() {
    this.ramMemoryService.getRamMemories().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (ramMemory: RamMemory, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        ramMemory.id === filterNum ||
        ramMemory.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedRamMemory(ramMemory: RamMemory): void {
    this.selectedRamMemory = {...ramMemory};
  }

  updateRamMemory(){
    if(this.selectedRamMemory)
    this.ramMemoryService.updateRamMemory(this.selectedRamMemory).subscribe(()=>{
      this.selectedRamMemory=null;
      this.getRamMemorys();
    })
  }
  cancelEdit(){
    this.selectedRamMemory=null;
    this.getRamMemorys();
  }
  toggleAddRamMemoryForm(){
    this.statsAddRamMemory=!this.statsAddRamMemory;
  }
  addRamMemory(){
    const { id, ...ramMemoryWithoutId } = this.newRamMemory;
    this.ramMemoryService.createRamMemory(this.newRamMemory).subscribe(()=>{
      this.statsAddRamMemory=false;
      this.newRamMemory={
        id: 0,
        image: '',
        stock: 0,
        category: 'ram',
        price: 0,
        warranty: 0,
        name: '',
        series: '',
        type: '',
        capacity: 0,
        frequency: 0,
        lighting: true,
        color: '',
        other: '',
        reviews:[]
      };
      this.getRamMemorys();
    }
    );
  }
}

