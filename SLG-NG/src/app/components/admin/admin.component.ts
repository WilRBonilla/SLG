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
    this.getAllIngredients(),
    this.getAllRecipes()
  }

  allIngredients: Array<Ingredient> = [];
  allRecipes: Array<Recipe>=[];
  rId: number = null;
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
  addedRecipe: Recipe = null;

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

  getAllRecipes() {
    this.slgService.getAllRecipes().subscribe(
      (response) => {
        console.log(response);
        this.allRecipes = response
        this.rId = this.allRecipes.length + 1
      },
      (response) => {
        console.log("Failed to get recipes list")
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
    let newRecipe = new Recipe(this.recipeId, this.title, this.cuisine, this.tag1, this.tag2)
    this.addedRecipe = newRecipe
    this.slgService.addRecipe(this.addedRecipe).subscribe(
      (response) => {
        console.log("Recipe successfully added");
        console.log(response);
        this.addedRecipe = response
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

  findIngredientFromArray(ingId){
    return this.allIngredients.find(i => i.ing_id == ingId)
  }
  
  addRecipeIngredient1(){
    let specificIngredient = this.findIngredientFromArray(this.recipeIngredientId1)
    let newIngredient = new Ingredient(specificIngredient.ing_id, specificIngredient.name, specificIngredient.units)

    this.slgService.addRecipeIngredient(new RecipeIngredient(77, newIngredient, this.addedRecipe, this.ing1amount)).subscribe(
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
    let specificIngredient = this.findIngredientFromArray(this.recipeIngredientId2)
    let newIngredient = new Ingredient(specificIngredient.ing_id, specificIngredient.name, specificIngredient.units)

    this.slgService.addRecipeIngredient(new RecipeIngredient(78, newIngredient, this.addedRecipe, this.ing2amount)).subscribe(
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
    let specificIngredient = this.findIngredientFromArray(this.recipeIngredientId3)
    let newIngredient = new Ingredient(specificIngredient.ing_id, specificIngredient.name, specificIngredient.units)

    this.slgService.addRecipeIngredient(new RecipeIngredient(79, newIngredient, this.addedRecipe, this.ing3amount)).subscribe(
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
    let specificIngredient = this.findIngredientFromArray(this.recipeIngredientId4)
    let newIngredient = new Ingredient(specificIngredient.ing_id, specificIngredient.name, specificIngredient.units)


    this.slgService.addRecipeIngredient(new RecipeIngredient(80, newIngredient, this.addedRecipe, this.ing4amount)).subscribe(
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
    let specificIngredient = this.findIngredientFromArray(this.recipeIngredientId5)
    let newIngredient = new Ingredient(specificIngredient.ing_id, specificIngredient.name, specificIngredient.units)

    this.slgService.addRecipeIngredient(new RecipeIngredient(81, newIngredient, this.addedRecipe, this.ing5amount)).subscribe(
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
