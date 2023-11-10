import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/myreviews/review.service';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.scss']
})
export class ReviewTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['idReview', 'account.email', 'reviewMessage', 'reviewStars', 'reviewData', 'checked'];
  dataSource: MatTableDataSource<Review>;
  filterValue='';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private reviewService:ReviewService,
    public datepipe:DatePipe
    ) {
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit(): void {
    this.getReviews();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  getReviews() {
    this.reviewService.findAllUnChecked().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (review: Review, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or Email
      return (
        review.idReview === filterNum ||
        review.account.email.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  makeChecked(idReview:number){
    this.reviewService.makeChecked(idReview).subscribe(()=>{
      this.getReviews();
      console.log("A fost confirmat " + idReview);

    });
  }
  deleteReview(idReview:number){
    this.reviewService.removeReview(idReview).subscribe(()=>{
    this.getReviews();
    console.log("A fost respins " + idReview);
  });
  }
}
