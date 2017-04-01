import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy', 'dummy', 'http://ersuk.co.uk/ekmps/shops/express2011/images/female-tailor-dummy-with-tripod-base-round-top-511-p.jpg')

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
