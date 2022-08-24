import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeOnDetail!: Recipe;

  onRecipeClicked($event: Recipe){
    this.recipeOnDetail = $event;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
