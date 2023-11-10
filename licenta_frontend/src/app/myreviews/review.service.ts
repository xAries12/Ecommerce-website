import { LoginService } from './../login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AccountSettings } from '../models/accountsettings.model';
import { MyReview } from '../models/myreviews.model';
import { AccountsettingsService } from '../accountsettings/accountsettings.service';
import { ReviewsDto } from '../models/reviewDto.model';
import { Review } from '../models/review.model';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = '/api/my_reviews';
  account: AccountSettings | undefined;

  constructor(private http: HttpClient,private accountSettingsService:AccountsettingsService,private loginService:LoginService) {

   }
   findAllChecked():Observable<Review[]>{
    const apiUrlGet='/api/reviews/checked';
    return this.http.get<Review[]>(apiUrlGet);
   }
   findAllUnChecked():Observable<Review[]>{
    const apiUrlGet='/api/reviews/unChecked';
    return this.http.get<Review[]>(apiUrlGet);
   }
   makeChecked(idReview:number):Observable<void>{
    const apiUrlMake=`/api/reviews/${idReview}`;
    return this.http.put<void>(apiUrlMake,null);
   }

  findByAccountIdc(): Observable<MyReview[]> {
    return this.accountSettingsService.findByEmail(this.loginService.getUsername()).pipe(
      switchMap((account: AccountSettings) => {
        this.account = account;
        const url = `${this.apiUrl}/${this.account?.idc}`;
        return this.http.get<MyReview[]>(url);
      })
    );
  }
  addReview(reviewDtop:ReviewsDto):Observable<Review>{
    const apiUrlAdd='/api/reviews';
    return this.http.post<Review>(apiUrlAdd,reviewDtop);
  }
  removeReview(idReview:number):Observable<void>{
    const apiUrlRem='/api/reviews';
    return this.http.delete<void>(`${apiUrlRem}/${idReview}`);
  }
}
