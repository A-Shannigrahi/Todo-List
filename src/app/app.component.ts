import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// element selector app-root present in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-simple';
  constructor(){
    setTimeout(()=>this.title="Angular is Complex",2500);
  }
}
