import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeBook } from 'src/app/recipe-book/recipe-book.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeProp : RecipeBook
@Output() clickedRec = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(){
    this.clickedRec.emit()
  }

  
}
