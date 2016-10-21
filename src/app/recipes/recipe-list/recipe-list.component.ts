import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();

	dummyRecipe = new Recipe ('Dummy','Dummy','http://placehold.it/350x150');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe);
  }

}
