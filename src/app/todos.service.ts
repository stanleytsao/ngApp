import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    uri = 'http://localhost:4000/products';

    constructor(private http: HttpClient) { }
  
    createTodo(Todo, TodoDescription, DueDate) {
      const obj = {
        Todo,
        TodoDescription,
        DueDate
      };
      console.log(obj);
      this.http.post(`${this.uri}/create`, obj)
          .subscribe(res => console.log('Done'));
    }
}
