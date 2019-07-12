import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<Ingredient>();
  ingredients : Ingredient[] = [
    new Ingredient('kangkong',5),
    new Ingredient('kamunggay',15)
  ];

  constructor() { }

  ngOnInit() {
  }

  getNewItems(items){
    this.ingredients.push(items)
  }

  eachItem(item){
    this.selectedItem.emit(item)
  }
}
