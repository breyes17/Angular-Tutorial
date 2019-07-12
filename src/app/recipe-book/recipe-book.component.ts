import { Component, OnInit } from '@angular/core';
import { RecipeBook } from 'src/app/recipe-book/recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  onAssignRecipe : RecipeBook

  constructor() { }

  ngOnInit() {
  }


}
