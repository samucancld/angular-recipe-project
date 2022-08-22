import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[];


  constructor() {
    this.recipes = [new Recipe(
      "Lemon Cake",
      "Lemon cake is a waste of the galaxy of the galaxy",
      60,
      100,
      "https://charlotteslivelykitchen.com/wp-content/uploads/2019/05/lemon-cake-2-500x500.jpg",)]
  }

  ngOnInit(): void {
  }

}
