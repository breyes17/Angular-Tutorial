import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  sRecipe : string = 'recipe'

  onGetHeader(str : string){
    this.sRecipe = str
  }
}
