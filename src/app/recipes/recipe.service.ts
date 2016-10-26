import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe ('Dummy1','Dummy1','http://placehold.it/350x150', []),
    new Recipe ('Dummy2','Dummy2','http://placehold.it/350x150', [])
  ];
  constructor() { }

	getRecipes() {
		return this.recipes;
	}
}
