import { Component, OnInit } from '@angular/core';
import Todo from '../../Todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  todos: Todo[];
  constructor(private ps: TodosService) { }

  ngOnInit() {
    this.ps
      .getTodos()
      .subscribe((data: Todo[]) => {
        this.todos = data;
    });
  }

}
