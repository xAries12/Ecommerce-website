import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processor } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  private apiURL = '/api/products/processors';

  constructor(private http: HttpClient) { }

  // Create
  createProcessor(mouse: Processor): Observable<any> {
    return this.http.post<Processor>(this.apiURL, mouse);
  }

  // Read
  getProcessors(): Observable<Processor[]> {
    return this.http.get<Processor[]>(this.apiURL);
  }

  // Update
  updateProcessor(mouse: Processor): Observable<Processor> {
    return this.http.put<Processor>(`${this.apiURL}/${mouse.id}`, mouse);
  }

  // Delete
  deleteProcessor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
  //Read by id
  getProcessorById(id: number): Observable<Processor>{
    return this.http.get<Processor>(`${this.apiURL}/${id}`);
  }

}
