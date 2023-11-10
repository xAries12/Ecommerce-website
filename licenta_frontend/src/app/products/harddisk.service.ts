import { Injectable } from '@angular/core';
import { HardDisk } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarddiskService {

  private apiURL = '/api/products/hard_disks';

  constructor(private http: HttpClient) { }

      // Create
      createHardDisk(hardDisk: HardDisk): Observable<any> {
        return this.http.post<HardDisk>(this.apiURL, hardDisk);
      }

      // Read
      getHardDisks(): Observable<HardDisk[]> {
        return this.http.get<HardDisk[]>(this.apiURL);
      }

      // Update
      updateHardDisk(hardDisk: HardDisk): Observable<HardDisk> {
        return this.http.put<HardDisk>(`${this.apiURL}/${hardDisk.id}`, hardDisk);
      }

      // Delete
      deleteHardDisk(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
      //Read by id
      getHardDiskById(id: number): Observable<HardDisk>{
        return this.http.get<HardDisk>(`${this.apiURL}/${id}`);
      }
}
