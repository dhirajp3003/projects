import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    
    addedIngredient = new Subject<Ingredient>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
      ];
    
    getIngredients(){
        return this.ingredients;
    }
    getIngredient(index : number){
        return this.ingredients[index];
    }
    ingredientAdd(ingredient : Ingredient){
        this.ingredients.push(ingredient);
    }
    addIngredients(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
    }

    updateIngredient(index : number,newIngredient : Ingredient){
        this.ingredients[index] = newIngredient;
    }

    deleteIngredient(index :number){
        this.ingredients.splice(index,1);
    }
}