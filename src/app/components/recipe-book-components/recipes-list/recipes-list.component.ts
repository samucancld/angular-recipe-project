import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[];
  @Output('recipeClicked')
  recipeClickedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();


  constructor() {
    this.recipes = [
      new Recipe(
        "Lemon Cake",
        "Lemon cake is a waste of the galaxy of the galaxy",
        60,
        100,
        "https://charlotteslivelykitchen.com/wp-content/uploads/2019/05/lemon-cake-2-500x500.jpg",
      ),
      new Recipe(
        "Chicken Wings",
        "Chicken wings is a waste of the world and the planet",
        75,
        100,
        "https://lnnk.in/dwhG",
      ),
    ]
  }

  onClickRecipe($event: Recipe){
    this.recipeClickedEmitter.emit($event);
  };

  ngOnInit(): void {
  }

}
