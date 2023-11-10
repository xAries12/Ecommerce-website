import { Injectable } from '@angular/core';
import { Motherboard } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotherboardService {
  private apiURL = '/api/products/motherboards';
  constructor(private http: HttpClient) { }

      // Create
      createMotherboard(motherboard: Motherboard): Observable<any> {
        return this.http.post<Motherboard>(this.apiURL, motherboard);
      }

      // Read
      getMotherboards(): Observable<Motherboard[]> {
        return this.http.get<Motherboard[]>(this.apiURL);
      }

      // Update
      updateMotherboard(motherboard: Motherboard): Observable<Motherboard> {
        return this.http.put<Motherboard>(`${this.apiURL}/${motherboard.id}`, motherboard);
      }

      // Delete
      deleteMotherboard(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
      //Read by id
      getMotherboardById(id: number): Observable<Motherboard>{
        return this.http.get<Motherboard>(`${this.apiURL}/${id}`);
      }
}

