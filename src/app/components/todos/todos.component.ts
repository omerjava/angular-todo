// https://www.youtube.com/watch?v=i7KaVFOXNUQ

import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newElement: string = '';
  errorMessage: string = '';

  getInput(value: string) {
    this.newElement = value;
    console.log(this.newElement);
  }

  addToList() {
    if (this.newElement == '') {
      this.errorMessage = "You can't add empty item";
    }
   else{
      this.todos.push({
        content: this.newElement,
        completed: false,
      });
      this.newElement = '';
      this.errorMessage = '';
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: true,
      },
      {
        content: 'second todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (id == i) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
