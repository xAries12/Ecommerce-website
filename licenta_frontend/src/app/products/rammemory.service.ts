import { Injectable } from '@angular/core';
import { RamMemory } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RammemoryService {
  private apiURL = '/api/products/ram_memories';
  constructor(private http: HttpClient) { }

      // Create
      createRamMemory(ramMemory: RamMemory): Observable<any> {
        return this.http.post<RamMemory>(this.apiURL, ramMemory);
      }

      // Read
      getRamMemories(): Observable<RamMemory[]> {
        return this.http.get<RamMemory[]>(this.apiURL);
      }

      // Update
      updateRamMemory(ramMemory: RamMemory): Observable<RamMemory> {
        return this.http.put<RamMemory>(`${this.apiURL}/${ramMemory.id}`, ramMemory);
      }

      // Delete
      deleteRamMemory(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
      //Read by id
      getRamMemoryById(id: number): Observable<RamMemory>{
        return this.http.get<RamMemory>(`${this.apiURL}/${id}`);
      }
}


