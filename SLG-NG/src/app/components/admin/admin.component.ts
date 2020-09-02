import { Component, OnInit } from '@angular/core';
import { SlgService } from '../../services/slg.service';
import { Ingredient } from '../../models/Ingredient';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private slgService: SlgService) { }

  ngOnInit( ): void {
    this.getAllIngredients()
  }

  allIngredients: Array<Ingredient> = [];
  id: number = null;
  name: string = "";
  units: string = "";
  selectedIngredientId: number = null;
  recipeId: number = null;
  title: string = "";
  cuisine: string = "";
  tag1: string = "";
  tag2: string = "";

  

  getAllIngredients(){
    this.slgService.getAllIngredients().subscribe(
      (response) => {
        console.log(response);
        this.allIngredients = response
        console.log(this.allIngredients.length);
        this.id = this.allIngredients.length + 1
      },
      (response) => {
        console.log("Failed to get ingredients list")
      }
    )
  }

  addIngredient(){
    this.slgService.addIngredient(new Ingredient(this.id, this.name, this.units)).subscribe(

      (response) => {
        console.log("Ingredient Successfully added");
        console.log(response);
        this.getAllIngredients();
      }, 
      (response) => {
        console.log("Failed to add Ingredient");
        console.log(response);
      },
      () => {
        this.resetValues();
      }
    )
  }

  deleteIngredient(){
    console.log(this.selectedIngredientId);
    this.slgService.deleteIngredient(this.selectedIngredientId).subscribe(
      (response) => {
        console.log("Ingredient Successfully deleted");
        console.log(response);
        this.getAllIngredients();
      }, 
      (response) => {
        console.log("Failed to delete Ingredient");
        console.log(response);
      },
      () => {
        this.resetValues();
      }
    )
  }

  addRecipe(){
    console.log("inside add recipe");
    this.slgService.addRecipe(new Recipe(this.recipeId, this.title, this.cuisine, this.tag1, this.tag2)).subscribe(
      (response) => {
        console.log("Recipe Successfully added");
        console.log(response);
      }, 
      (response) => {
        console.log("Failed to add Recipe");
        console.log(response);
      },
      () => {
        this.resetValues();
      }
    )
  }

  resetValues() {
    this.id = this.allIngredients.length + 1;
    this.name = "";
    this.units = "";
    this.selectedIngredientId = null;
  }

}
