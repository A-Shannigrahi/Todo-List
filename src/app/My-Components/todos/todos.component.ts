import { ApplicationRef, Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todosarray:Todo[];
  localItem:string;
  constructor() { 
    this.localItem=localStorage.getItem("todos") || '{}';
    if (this.localItem=='{}')
    {
    this.todosarray=[ ];
    }
    else
    {
      
      this.todosarray=JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodoFunc(todo:Todo)
  {
    const index=this.todosarray.indexOf(todo)
    this.todosarray.splice(index,1)
    console.log("Triggerred")
    localStorage.setItem("todos",JSON.stringify(this.todosarray))
  }
  OnAdd(todo:Todo)
  {
    this.todosarray.push(todo)
    console.log("operation executed here")
    localStorage.setItem("todos",JSON.stringify(this.todosarray))
  }
  onToggleCheck(todo:Todo)
  {
    
    const index=this.todosarray.indexOf(todo)
    this.todosarray[index].active=!this.todosarray[index].active
    
    localStorage.setItem("todos",JSON.stringify(this.todosarray))
  }

}
