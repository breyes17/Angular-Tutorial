import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeBook } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeBook>();
  recipes: RecipeBook[] = [
    new RecipeBook('The Worst Recipe','Yuck and super ew','https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new RecipeBook('Angel Locsin','Yummy super juicy','https://i.pinimg.com/originals/08/49/6e/08496e608d9602beb6c1201f9dbbdb34.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe){
    this.recipeWasSelected.emit(recipe)
    console.log(recipe)
  }

}
