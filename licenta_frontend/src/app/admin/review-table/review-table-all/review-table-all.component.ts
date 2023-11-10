import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/myreviews/review.service';

@Component({
  selector: 'app-review-table-all',
  templateUrl: './review-table-all.component.html',
  styleUrls: ['./review-table-all.component.scss']
})
export class ReviewTableAllComponent implements AfterViewInit {
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
    this.reviewService.findAllChecked().subscribe(kb => {
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
  deleteReview(idReview:number){
    this.reviewService.removeReview(idReview).subscribe(()=>{
    this.getReviews();
    console.log("A fost respins " + idReview);
  });
  }
}
