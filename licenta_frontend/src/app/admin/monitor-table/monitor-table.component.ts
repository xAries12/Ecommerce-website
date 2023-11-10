import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Monitor } from 'src/app/models/product.model';
import { MonitorService } from 'src/app/products/monitor.service';

@Component({
  selector: 'app-monitor-table',
  templateUrl: './monitor-table.component.html',
  styleUrls: ['./monitor-table.component.scss']
})
export class MonitorTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<Monitor>;
  statsAddMonitor:boolean=false;
  selectedMonitor: Monitor | null = null;
  filterValue='';
  newMonitor:Monitor={
    id: 0,
    image: '',
    stock: 0,
    category: 'monitor',
    price: 0,
    warranty: 0,
    name: '',
    brand: '',
    diagonal: 0,
    resolution: '',
    responseTime: 0,
    refreshRate: 0,
    technology: '',
    color: '',
    aspectRatio: '',
    ports: '',
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private monitorService:MonitorService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getMonitors();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getMonitors() {
    this.monitorService.getMonitors().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (monitor: Monitor, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        monitor.id === filterNum ||
        monitor.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedMonitor(monitor: Monitor): void {
    this.selectedMonitor = {...monitor};
  }

  updateMonitor(){
    if(this.selectedMonitor)
    this.monitorService.updateMonitor(this.selectedMonitor).subscribe(()=>{
      this.selectedMonitor=null;
      this.getMonitors();
    })
  }
  cancelEdit(){
    this.selectedMonitor=null;
    this.getMonitors();
  }
  toggleAddMonitorForm(){
    this.statsAddMonitor=!this.statsAddMonitor;
  }
  addMonitor(){
    const { id, ...monitorWithoutId } = this.newMonitor;
    this.monitorService.createMonitor(this.newMonitor).subscribe(()=>{
      this.statsAddMonitor=false;
      this.newMonitor={
        id: 0,
        image: '',
        stock: 0,
        category: 'monitor',
        price: 0,
        warranty: 0,
        name: '',
        brand: '',
        diagonal: 0,
        resolution: '',
        responseTime: 0,
        refreshRate: 0,
        technology: '',
        color: '',
        aspectRatio: '',
        ports: '',
        other: '',
        reviews:[]
      };
      this.getMonitors();
    }
    );
  }
}
