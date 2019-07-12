import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  sRecipe : boolean
  sShop : boolean

  onGetHeader(getOutput:{rec: boolean, shop : boolean}){
    this.sRecipe = getOutput.rec
    this.sShop = getOutput.shop
  }
}
