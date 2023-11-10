import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monitor } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private apiURL = '/api/products/monitors';

  constructor(private http: HttpClient) { }

      // Create
      createMonitor(monitor: Monitor): Observable<any> {
        return this.http.post<Monitor>(this.apiURL, monitor);
      }

      // Read
      getMonitors(): Observable<Monitor[]> {
        return this.http.get<Monitor[]>(this.apiURL);
      }

      // Update
      updateMonitor(monitor: Monitor): Observable<Monitor> {
        return this.http.put<Monitor>(`${this.apiURL}/${monitor.id}`, monitor);
      }

      // Delete
      deleteMonitor(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${id}`);
      }
      //Read by id
      getMonitorById(id: number): Observable<Monitor>{
        return this.http.get<Monitor>(`${this.apiURL}/${id}`);
      }

}
