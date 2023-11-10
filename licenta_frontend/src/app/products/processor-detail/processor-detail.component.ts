import { ProcessorService } from './../processor.service';
import { Component } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { CommentDTO, CommentUpdateDto } from 'src/app/models/commentDto.model';
import { Processor } from 'src/app/models/product.model';
import { Review } from 'src/app/models/review.model';
import { ReviewsDto } from 'src/app/models/reviewDto.model';
import { AddCommentStats, UpdateCommentStats } from '../keyboard-detail/keyboard-detail.component';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { LoginService } from 'src/app/login/login.service';
import { ReviewService } from 'src/app/myreviews/review.service';
import { CommentService } from 'src/app/services/comment.service';
import { Commentcoment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-processor-detail',
  templateUrl: './processor-detail.component.html',
  styleUrls: ['./processor-detail.component.scss']
})
export class ProcessorDetailComponent {
  id: number = 0;
  processor?: Processor;
  stars:number =1;
  panelOpenState:boolean=false;
  reviews!: Review[];
  reviewtext:string="";
  starRatings: number[] = [1, 2, 3, 4, 5];
  account!:Account
  editingReview: ReviewsDto | null = null;
  openComment:AddCommentStats[]=[];
  updateComment:UpdateCommentStats[]=[]
  messageComment:string="";
  messageCommentUpdate:string="";
  editingComment:CommentUpdateDto | null=null;

  constructor(
    private route: ActivatedRoute,
    private processorService: ProcessorService,
    public loginService: LoginService,
    public datepipe:DatePipe,
    private reviewService:ReviewService,
    private commentService:CommentService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProcessorById(this.id);
    this.loginService.getUser().subscribe(account=>{
      this.account=account;
    });
  }
  getProcessorById(id: number): void {
    this.processorService
      .getProcessorById(id)
      .subscribe((processor) => {
        this.processor = processor
        this.reviews = processor.reviews
      });
  }
  isNaN(value: any): boolean {
    return Number.isNaN(Number(value));
  }

  getStarArray(numStars: number): number[] {
    return Array(numStars);
  }
  haveReview(reviews: Review[]): boolean {
    return reviews.some(review => review.account.email === this.loginService.getUsername());
  }

  starsOverAll(reviews: Review[]):number{
    const reviews2 = reviews.filter(review => review.checked === true);
    return this.starsSumAll(reviews2)/this.numberOfReview(reviews2);
  }

  starsSumAll(reviews: Review[]):number{
    const sum = reviews ? reviews.reduce((acc, review) => acc + review.reviewStars, 0) : 0;
    return sum;
  }
  numberOfReview(reviews: Review[]):number{
    return reviews.length;
  }
  addReview():void{
    const review:ReviewsDto={
       productId:this.id,
       accountId:this.account.idc,
       content : this.reviewtext,
       reviewStars: this.stars
     };
     this.reviewService.addReview(review).subscribe(review1=>{
       this.reviews = this.reviews.filter(review2 => {
         return review2.idReview !== review1.idReview});
       this.reviews.push(review1);
       this.getProcessorById(this.id);

     });
   }
   removeReview():void{
    this.reviewService.findByAccountIdc().subscribe(reviews => {
      const reviewToRemove = reviews.find(review => {
        return review.productIdp === this.id;
      });
      if (reviewToRemove) {
        this.reviewService.removeReview(reviewToRemove.idReview).subscribe(() => {
          this.reviews = this.reviews.filter(review2 => {
            return review2.idReview !== reviewToRemove.idReview;
          });
        });
      }
    });
  }
  selectStars(rating: number): void {
    this.stars = rating;
    console.log(rating);
  }
  selectStarsUpdate(rating: number): void {
    this.editingReview!.reviewStars = rating;
    console.log(rating);
  }
  editReview(review: Review): void {
    this.editingReview = {
    accountId:review.account.idc,
    productId:this.id,
    reviewStars:review.reviewStars,
    content:review.reviewMessage};
  }
  updateReview(): void {
    if (this.editingReview) {
      this.reviewService.addReview(this.editingReview).subscribe(review1=>{
        this.reviews = this.reviews.filter(review2 => {
          return review2.idReview !== review1.idReview});
        this.reviews.push(review1);
        this.getProcessorById(this.id);
      });
      this.editingReview=null;
    }
  }
  editUpdate(comment: Commentcoment): void {
    this.editingComment = {
    idComment:comment.idComment,
    commentMessage:comment.commentMessage,
  };
  this.messageCommentUpdate=this.editingComment.commentMessage;
  this.openUpdateComment(this.editingComment.idComment);
  console.log(this.editingComment);
}

closReview():void{
  this.editingReview=null;
}
openAddComment(idReview:number) {
  this.openComment=[];
  this.messageComment="";
  const elemnt:AddCommentStats={
    idReview:idReview,
    status:true
  }
  this.openComment.push(elemnt);
  }
openUpdateComment(idComment:number) {
  this.updateComment=[];
  const elemnt:UpdateCommentStats={
    idComment:idComment,
    status:true
  }
  this.updateComment.push(elemnt);
  console.log(this.updateComment);
  }

  statusAddComment(idReview:number):boolean {
    const stat=this.openComment.find(ids=>{
      return ids.idReview===idReview;
     });
    return stat===undefined? false : stat.status;
    }
statusUpdateComment(idComment:number):boolean {
   const stat=this.updateComment.find(ids=>{
    return ids.idComment===idComment;
      });
    return stat===undefined? false : stat.status;
    }

closeAddComment(idReview:number){
  this.openComment=this.openComment.filter(ids=>{
    return ids.idReview!==idReview;
   });
   this.messageCommentUpdate="";
   this.messageComment=="";
}
closeUpdateComment(idComment:number){
  this.updateComment=this.updateComment.filter(ids=>{
    return ids.idComment!==idComment;
   });
   this.editingComment=null;
   this.messageCommentUpdate="";
}
addComment(idReview:number){
  const commentDto:CommentDTO={
    idReview:idReview,
    accountIdc:this.account.idc,
    commentMessage:this.messageComment
  }
    this.commentService.addComment(commentDto).subscribe(()=>{
      this.getProcessorById(this.id);
      this.openComment=[];
      this.messageComment="";
    });

}
updateCommentAndRefresh(idComment:number){
  const commentDto:CommentUpdateDto={
    idComment:idComment,
    commentMessage:this.messageCommentUpdate
  }
    this.commentService.updateComment(commentDto).subscribe(()=>{
      this.getProcessorById(this.id);
      this.updateComment=[];
      this.messageCommentUpdate="";
      this.editingComment=null;
    });

}
deleteComment(idComment:number){
  this.commentService.deleteComment(idComment).subscribe(()=>{
    this.getProcessorById(this.id);
  })
}
addToCart(event:Event,id:number) {
  this.cartService.addToCart(id);
  event.stopPropagation();
}
reviewsLength(reviews: Review[]): number {
  return reviews.filter(review => review.checked === true).length;
}
commentsLength(comments: Commentcoment[]): number {
  return comments.filter(comment => comment.checked === true).length;
}
}
