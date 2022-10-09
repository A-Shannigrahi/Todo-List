import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './My-Components/about/about.component';
import { TodosComponent } from './My-Components/todos/todos.component';


const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about-page', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
