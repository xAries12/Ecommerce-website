import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VideoCard } from 'src/app/models/product.model';
import { VideocardService } from 'src/app/products/videocard.service';

@Component({
  selector: 'app-videocard-table',
  templateUrl: './videocard-table.component.html',
  styleUrls: ['./videocard-table.component.scss']
})
export class VideocardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','name', 'image', 'stock', 'price', 'warranty', 'edit'];
  dataSource: MatTableDataSource<VideoCard>;
  statsAddVideoCard:boolean=false;
  selectedVideoCard: VideoCard | null = null;
  filterValue='';
  newVideoCard:VideoCard={
    id: 0,
    image: '',
    stock: 0,
    category: 'video_card',
    price: 0,
    warranty: 0,
    name: '',
    type: '',
    producer: '',
    family: '',
    model: '',
    series: '',
    memoryType: '',
    memorySize: 0,
    busMemory: 0,
    other: '',
    reviews:[]
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private videoCardService:VideocardService
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.getVideoCards();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getVideoCards() {
    this.videoCardService.getVideocards().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (videoCard: VideoCard, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or name
      return (
        videoCard.id === filterNum ||
        videoCard.name.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEditedVideoCard(videoCard: VideoCard): void {
    this.selectedVideoCard = {...videoCard};
  }

  updateVideoCard(){
    if(this.selectedVideoCard)
    this.videoCardService.updateVideocard(this.selectedVideoCard).subscribe(()=>{
      this.selectedVideoCard=null;
      this.getVideoCards();
    })
  }
  cancelEdit(){
    this.selectedVideoCard=null;
    this.getVideoCards();
  }
  toggleAddVideoCardForm(){
    this.statsAddVideoCard=!this.statsAddVideoCard;
  }
  addVideoCard(){
    const { id, ...videoCardWithoutId } = this.newVideoCard;
    this.videoCardService.createVideocard(this.newVideoCard).subscribe(()=>{
      this.statsAddVideoCard=false;
      this.newVideoCard={
        id: 0,
        image: '',
        stock: 0,
        category: 'video_card',
        price: 0,
        warranty: 0,
        name: '',
        type: '',
        producer: '',
        family: '',
        model: '',
        series: '',
        memoryType: '',
        memorySize: 0,
        busMemory: 0,
        other: '',
        reviews:[]
      };
      this.getVideoCards();
    }
    );
  }
}

