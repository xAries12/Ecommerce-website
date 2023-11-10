import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ssd } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsdService {
  private apiURL = '/api/products/ssds';
  constructor(private http: HttpClient) { }

  // Create
  createSsd(mouse: Ssd): Observable<any> {
    return this.http.post<Ssd>(this.apiURL, mouse);
  }

  // Read
  getSsds(): Observable<Ssd[]> {
    return this.http.get<Ssd[]>(this.apiURL);
  }

  // Update
  updateSsd(mouse: Ssd): Observable<Ssd> {
    return this.http.put<Ssd>(`${this.apiURL}/${mouse.id}`, mouse);
  }

  // Delete
  deleteSsd(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
  //Read by id
  getSsdById(id: number): Observable<Ssd>{
    return this.http.get<Ssd>(`${this.apiURL}/${id}`);
  }
}
