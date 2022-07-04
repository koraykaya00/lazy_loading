import { Post } from './../models/post';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiKey = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiKey)
  }
}
