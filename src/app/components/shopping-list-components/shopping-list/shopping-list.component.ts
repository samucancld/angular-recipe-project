import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];


  constructor() {
    this.ingredients = [
      new Ingredient("Limón"),
      new Ingredient("Germany"),
    ];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  ngOnInit(): void {
  }

}
