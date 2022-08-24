import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  @Output('recipeClicked')
  itemClickedEmitter: EventEmitter<void> = new EventEmitter<void>();

  onClickItem(){
    this.itemClickedEmitter.emit();
  };

  constructor() { }

  ngOnInit(): void {
  }

}
