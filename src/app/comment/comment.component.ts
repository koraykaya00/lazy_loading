import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[]
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.commentService.getComments().subscribe(data => {
      this.comments = data
    })
  }

}
