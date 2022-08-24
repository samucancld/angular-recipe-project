import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input('recipe')
  recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
