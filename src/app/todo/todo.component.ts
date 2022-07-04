import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[]
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todoService.getTodos().subscribe(data => {
      this.todos = data
    })
  }

}
