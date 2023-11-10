import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentDTO, CommentUpdateDto } from '../models/commentDto.model';
import { Commentcoment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url:string='api/comments';
  constructor(private http:HttpClient) { }

  addComment(commentDto:CommentDTO):Observable<void>{
    return this.http.post<void>(this.url,commentDto);
  }

  updateComment(commentDto:CommentUpdateDto):Observable<void>{
    const apiUrl='api/comments/updates';
    return this.http.put<void>(apiUrl,commentDto);
  }

  deleteComment(commentId:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${commentId}`);
  }

  makeCheckedComment(commentId:number):Observable<void>{
    const urlMake =`api/comments/updates/${commentId}`;
    return this.http.put<void>(urlMake,null);
  }

  findAllUnChecked():Observable<Commentcoment[]>{
    const urlGet =`api/comments/allUnChecked`;
    return this.http.get<Commentcoment[]>(urlGet);
  }
  findAllChecked():Observable<Commentcoment[]>{
    const urlGet =`api/comments/allChecked`;
    return this.http.get<Commentcoment[]>(urlGet);
  }
}
