import { Component } from '@angular/core';
import { Todo } from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(todo: string): void {
    if (todo.length <= 3) {
      alert('Zadanie musi mieć co najmniej 4 znaki!');
      return;
    }
    this.todos.push({ name: todo, isComplete: false });
    console.log('Aktualna lista todo', this.todos);
  }

  toggleComplete(index: number): void {
    this.todos[index].isComplete = !this.todos[index].isComplete;
  }
}
