import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Keyboard } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

    private apiURL = '/api/products/keyboards';

    constructor(private http: HttpClient) { }

    // Create
    createKeyboard(keyboard: Keyboard): Observable<any> {
      return this.http.post<Keyboard>(this.apiURL, keyboard);
    }

    // Read
    getKeyboards(): Observable<Keyboard[]> {
      return this.http.get<Keyboard[]>(this.apiURL);
    }

    // Update
    updateKeyboard(keyboard: Keyboard): Observable<Keyboard> {
      return this.http.put<Keyboard>(`${this.apiURL}/${keyboard.id}`, keyboard);
    }

    // Delete
    deleteKeyboard(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/${id}`);
    }
    //Read by id
    getKeyboardById(id: number): Observable<Keyboard>{
      return this.http.get<Keyboard>(`${this.apiURL}/${id}`);
    }

}
