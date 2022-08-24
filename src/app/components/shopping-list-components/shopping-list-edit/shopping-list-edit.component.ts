import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output()
  ingredientCreated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  addIngredient(nameInput:HTMLInputElement){
    let newIngredient = new Ingredient(nameInput.value!);
    this.ingredientCreated.emit(newIngredient);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
