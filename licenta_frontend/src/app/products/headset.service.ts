import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headset } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadsetService {

  private apiURL = '/api/products/headsets';

  constructor(private http: HttpClient) { }

   // Create
   createHeadset(headset: Headset): Observable<any> {
    return this.http.post<Headset>(this.apiURL, headset);
  }

  // Read
  getHeadsets(): Observable<Headset[]> {
    return this.http.get<Headset[]>(this.apiURL);
  }

  // Update
  updateHeadset(headset: Headset): Observable<Headset> {
    return this.http.put<Headset>(`${this.apiURL}/${headset.id}`, headset);
  }

  // Delete
  deleteHeadset(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
  //Read by id
  getHeadsetById(id: number): Observable<Headset>{
    return this.http.get<Headset>(`${this.apiURL}/${id}`);
  }
}
