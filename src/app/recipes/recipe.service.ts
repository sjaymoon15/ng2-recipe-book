import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe ('pizza','this is pizza recipe','http://placehold.it/350x150', 
    	[new Ingredient('dough', 10),
    	new Ingredient('source', 20)]	),
    new Recipe ('Dummy2','Dummy2','http://placehold.it/350x150',
			[new Ingredient('dummy ing', 10),
    	new Ingredient('dummm', 20)]	),
  ];
  constructor() { }

	getRecipes() {
		return this.recipes;
	}
}
