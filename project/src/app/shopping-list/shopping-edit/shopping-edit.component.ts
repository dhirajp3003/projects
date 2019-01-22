import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
   
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index :number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount : this.editedItem.amount
        });
      }
    );
  }
  onAddItem(form: NgForm){
    const value = form.value;
    const ingredient = new Ingredient(value.name,value.amount)
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editedItemIndex,ingredient);
    }else{ 
      this.shoppinglistService.addedIngredient.next(ingredient);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  OnDelete(){
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.OnClear();
  }
}
