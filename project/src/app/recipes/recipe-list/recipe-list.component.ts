import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,private route: Router,private router:ActivatedRoute,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipes= recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  newRecipe(){
    this.route.navigate(['new'],{relativeTo:this.router});

  }

  check(){
    this.dataStorageService.check().subscribe(
      (response : Response) =>{
        console.log(response.json());
      }
    )
  }
}
