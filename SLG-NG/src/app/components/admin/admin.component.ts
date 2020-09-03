import { Component, OnInit } from '@angular/core';
import { SlgService } from '../../services/slg.service';
import { Ingredient } from '../../models/Ingredient';
import { Recipe } from '../../models/Recipe';
import { RecipeIngredient } from '../../models/RecipeIngredient';

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
  recipeId: number = 0;
  title: string = "";
  cuisine: string = "";
  tag1: string = "";
  tag2: string = "";
  ing1amount: number = null;
  ing2amount: number = null;
  ing3amount: number = null;
  ing4amount: number = null;
  ing5amount: number = null;
  recipeIngredientId1: number = null;
  recipeIngredientId2: number = null;
  recipeIngredientId3: number = null;
  recipeIngredientId4: number = null;
  recipeIngredientId5: number = null;
  newRecipeId: number = null;


  

  getAllIngredients(){
    this.slgService.getAllIngredients().subscribe(
      (response) => {
        console.log(response);
        this.allIngredients = response
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
        console.log("1",this.recipeIngredientId1);
        console.log("2",this.recipeIngredientId2);
        console.log("3",this.recipeIngredientId3);
        console.log("Recipe successfully added");
        console.log(response);
        this.newRecipeId = response.r_id
      }, 
      (response) => {
        console.log("Failed to add Recipe");
        console.log(response);
      },
      () => {
        this.addAllRecipeIngredients();
        // this.resetValues();
      }
    )
  }

  addAllRecipeIngredients(){
    this.addRecipeIngredient1();
    this.addRecipeIngredient2();
    this.addRecipeIngredient3();
    this.addRecipeIngredient4();
    this.addRecipeIngredient5();
  }
  
  addRecipeIngredient1(){
    this.slgService.addRecipeIngredient(new RecipeIngredient(1, this.recipeIngredientId1, this.newRecipeId, this.ing1amount)).subscribe(
      (response) => {
        console.log("RecipeIngredient1 successfully added");
      },
      (response) => {
        console.log("Failed to add RecipeIngredient");
        console.log(response);
      }
    )
  }

  addRecipeIngredient2() {
    this.slgService.addRecipeIngredient(new RecipeIngredient(2, this.recipeIngredientId2, this.newRecipeId, this.ing2amount)).subscribe(
      (response) => {
        console.log("RecipeIngredient2 successfully added");
      },
      (response) => {
        console.log("Failed to add RecipeIngredient");
        console.log(response);
      }
    )
  }

  addRecipeIngredient3() {
    this.slgService.addRecipeIngredient(new RecipeIngredient(3, this.recipeIngredientId3, this.newRecipeId, this.ing3amount)).subscribe(
      (response) => {
        console.log("RecipeIngredient3 successfully added");
      },
      (response) => {
        console.log("Failed to add RecipeIngredient");
        console.log(response);
      }
    )
  }


  addRecipeIngredient4() {
    this.slgService.addRecipeIngredient(new RecipeIngredient(4, this.recipeIngredientId4, this.newRecipeId, this.ing4amount)).subscribe(
      (response) => {
        console.log("RecipeIngredient4 successfully added");
      },
      (response) => {
        console.log("Failed to add RecipeIngredient");
        console.log(response);
      }
    )
  }

  addRecipeIngredient5() {
    this.slgService.addRecipeIngredient(new RecipeIngredient(5, this.recipeIngredientId5, this.newRecipeId, this.ing5amount)).subscribe(
      (response) => {
        console.log("RecipeIngredient5 successfully added");
      },
      (response) => {
        console.log("Failed to add RecipeIngredient");
        console.log(response);
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
