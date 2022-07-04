import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiKey = "https://jsonplaceholder.typicode.com/comments"
  constructor(private httpClient:HttpClient) { }

  getComments():Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.apiKey)
  }
}
