import { Component, OnInit, Input } from '@angular/core';
import { RecipeBook } from 'src/app/recipe-book/recipe-book.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() selectedRecipe : RecipeBook
  constructor() { }

  ngOnInit() {
  }

}
