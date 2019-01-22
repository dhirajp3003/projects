import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {

    constructor(private http:Http,private recipeService: RecipeService){}

    storeRecipe(){
      return  this.http.put('https://ng-recipe-book-49ff3.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
    }

    fetchRecipe(){
        return this.http.get('https://ng-recipe-book-49ff3.firebaseio.com/recipes.json');
    }

    check(){
        return this.http.get('http://localhost:8080/recipe');
    }
}