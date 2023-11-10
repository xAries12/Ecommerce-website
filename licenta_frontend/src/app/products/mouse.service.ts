import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mouse } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  private apiURL = '/api/products/mouses';

  constructor(private http: HttpClient) { }

      // Create
      createMouse(mouse: Mouse): Observable<any> {
        return this.http.post<Mouse>(this.apiURL, mouse);
      }

      // Read
      getMouses(): Observable<Mouse[]> {
        return this.http.get<Mouse[]>(this.apiURL);
      }

      // Update
      updateMouse(mouse: Mouse): Observable<Mouse> {
        return this.http.put<Mouse>(`${this.apiURL}/${mouse.id}`, mouse);
      }

      // Delete
      deleteMouse(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
      //Read by id
      getMouseById(id: number): Observable<Mouse>{
        return this.http.get<Mouse>(`${this.apiURL}/${id}`);
      }

}
