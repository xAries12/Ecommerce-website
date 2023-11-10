import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Commentcoment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-table-all',
  templateUrl: './comment-table-all.component.html',
  styleUrls: ['./comment-table-all.component.scss']
})
export class CommentTableAllComponent implements AfterViewInit {
  displayedColumns: string[] = ['idComment', 'account.email', 'commentMessage', 'commentDate','checked'];
  dataSource: MatTableDataSource<Commentcoment>;
  filterValue='';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private commentService:CommentService,
    public datepipe:DatePipe
    ) {
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit(): void {
    this.getComments();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  getComments() {
    this.commentService.findAllChecked().subscribe(kb => {
      this.dataSource.data=kb;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.data);
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (review: Commentcoment, filter: string) => {
      const filterNum = Number(filter);

      // Filter by ID or Email
      return (
        review.idComment === filterNum ||
        review.account.email.toLowerCase().includes(filter)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteReview(idComment:number){
    this.commentService.deleteComment(idComment).subscribe(()=>{
    this.getComments();
    console.log("A fost sters " + idComment);
  });
  }
}

