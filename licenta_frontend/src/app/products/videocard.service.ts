import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoCard } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class VideocardService {

  private apiURL = '/api/products/video_cards';

  constructor(private http: HttpClient) { }

  // Create
  createVideocard(videocard: VideoCard): Observable<any> {
    return this.http.post<VideoCard>(this.apiURL, videocard);
  }

  // Read
  getVideocards(): Observable<VideoCard[]> {
    return this.http.get<VideoCard[]>(this.apiURL);
  }

  // Update
  updateVideocard(videocard: VideoCard): Observable<VideoCard> {
    return this.http.put<VideoCard>(`${this.apiURL}/${videocard.id}`, videocard);
  }

  // Delete
  deleteVideocard(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
  //Read by id
  getVideocardById(id: number): Observable<VideoCard>{
    return this.http.get<VideoCard>(`${this.apiURL}/${id}`);
  }
}
