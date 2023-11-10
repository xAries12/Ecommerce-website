import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, catchError, throwError, switchMap } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private http:HttpClient){}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('access_token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(catchError((err: HttpErrorResponse)=>{
      if(err.status===401){
        return this.http.post('http://localhost:9090/store/refresh-token',{},{withCredentials:true}).pipe(switchMap((res:any)=>{
          let reftoken = localStorage.getItem('refresh_token');
          return next.handle(request.clone({
            setHeaders: {
              Authorization: `Bearer ${reftoken}`
            }
          }))
        }));
      }
        return throwError(()=> err);
    }));
  }
}
