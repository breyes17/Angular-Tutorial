import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Input() receivedItem : Ingredient
@Output() items = new EventEmitter<Ingredient>();
@ViewChild('nameInput') nameInput : ElementRef;
@ViewChild('amountInput') amountInput : ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addItem(){
    this.items.emit(
      new Ingredient(
        this.nameInput.nativeElement.value, 
        this.amountInput.nativeElement.value
      ))
  }

  clearItems(){
    this.nameInput.nativeElement.value = ""
    this.amountInput.nativeElement.value = ""
  }


}
