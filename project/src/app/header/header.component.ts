import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dataStorageService: DataStorageService,private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipe()
    .subscribe(
      (response : Response) => {
        console.log(response.json());
      }
    );
  }

  onFetchData(){
    this.dataStorageService.fetchRecipe()
    .subscribe(
      (response: Response) => {
        const recipes = response.json();
        this.recipeService.setRecipes(recipes)
      }
    )
  }

}
