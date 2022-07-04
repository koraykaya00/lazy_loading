import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[]
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(data => {
      this.posts = data
    })
  }

}
