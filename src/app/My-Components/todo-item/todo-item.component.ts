import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo :Todo;
  @Input() i :number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickHandle(todo:Todo){
    this.todoDelete.emit(todo)
    
    console.log(todo.sno)
  }
  onClickCheckbox(todo:Todo)
  {
    console.log("bef")
    console.log(todo)
    this.todoCheck.emit(todo);
    
   
    
  }

}
