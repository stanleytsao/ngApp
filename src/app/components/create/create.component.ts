import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: TodosService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Todo: ['', Validators.required ],
      TodoDescription: ['', Validators.required ],
      DueDate: ['', Validators.required ]
    });
  }

  createTodo(Todo, TodoDescription, DueDate) {
    this.ps.createTodo(Todo, TodoDescription, DueDate);
  }

  ngOnInit() {
  }

}
