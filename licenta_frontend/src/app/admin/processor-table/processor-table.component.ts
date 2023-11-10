import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Processor } from 'src/app/models/product.model';
import { ProcessorService } from 'src/app/products/processor.service';

@Component({
  selector: 'app-processor-table',
  templateUrl: './processor-table.component.html',
  styleUrls: ['./processor-table.component.scss']
})
export class ProcessorTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Processor>;
  statsAddProcessor:boolean=false;
  selectedProcessor: Processor | null = null;
  filterValue='';
  newProcessor:Processor={
    id: 0,
    image: '',
    stock: 0,
    category: 'processor',
    price: 0,
    warranty: 0,
    name: '',
    producer: '',
    model: '',
    socket: '',
    core: '',
    series: '',
    numberOfCores: 0,
    numberOfThreads: 0,
    frequency: 0,
    frequencyMax: 0,
    cache: 0,
    tdpMax: 0,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private processorService:ProcessorService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getProcessors();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getProcessors() {
    this.processorService.getProcessors().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (processor: Processor, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        processor.id === filterNum ||
        processor.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedProcessor(processor: Processor): void {
    this.selectedProcessor = {...processor};
  }

  updateProcessor(){
    if(this.selectedProcessor)
    this.processorService.updateProcessor(this.selectedProcessor).subscribe(()=>{
      this.selectedProcessor=null;
      this.getProcessors();
    })
  }
  cancelEdit(){
    this.selectedProcessor=null;
    this.getProcessors();
  }
  toggleAddProcessorForm(){
    this.statsAddProcessor=!this.statsAddProcessor;
  }
  addProcessor(){
    const { id, ...processorWithoutId } = this.newProcessor;
    this.processorService.createProcessor(this.newProcessor).subscribe(()=>{
      this.statsAddProcessor=false;
      this.newProcessor={
        id: 0,
        image: '',
        stock: 0,
        category: 'processor',
        price: 0,
        warranty: 0,
        name: '',
        producer: '',
        model: '',
        socket: '',
        core: '',
        series: '',
        numberOfCores: 0,
        numberOfThreads: 0,
        frequency: 0,
        frequencyMax: 0,
        cache: 0,
        tdpMax: 0,
        other: '',
        reviews:[]
      };
      this.getProcessors();
    }
    );
  }
}

