import { Component, OnInit } from '@angular/core';
import { Pantry } from 'src/app/models/Pantry'
import { SlgService } from 'src/app/services/slg.service';
import { Ingredient } from 'src/app/models/Ingredient';
import { Shopper } from 'src/app/models/Shopper';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  constructor(private slgService: SlgService) { }

  
  ngOnInit(): void {
    this.getShopper();
    this.displayPantry();
    this.getIngredients();
    
  } 
  isAdding: boolean = false;
  isSelected: boolean = false;
  selectedPantryItem: Pantry = new Pantry(0, new Shopper("N/A", "N/A", "N/A", "N/A"), new Ingredient(0, "N/A", "N/A"), 0);
  pantryList: Array<Pantry> = [];
  foodName: string;
  foodAmount: number;
  ingredients: Array<Ingredient> = [];
  addPantryList: Array<Pantry> = [];
  newItem: Pantry;
  selectedIngredient: Ingredient;
  addItem: Ingredient = new Ingredient(0, "N/A", "N/A");
  addItemAmount: number;
  shopper: Shopper;
  ingredientId: number;
  newIngredient: Ingredient;


  getIngredients() {
    this.slgService.getAllIngredients().subscribe(
      (response) => {
        this.ingredients = response;
      }
    );
  }

  displayPantry() {
    this.slgService.getPantryByUser(this.shopper.u_id).subscribe(
      (response) => {
        this.pantryList = response;        
      }
    )
  }
  onSelect(selectedItem: any) {
    this.selectedPantryItem = selectedItem;
    console.log(this.selectedPantryItem);
    this.isSelected = true;
    this.isAdding = false;
  }

  updateFoodItem() {
    this.selectedPantryItem.amount = this.foodAmount;
    console.log(this.selectedPantryItem);
    this.slgService.updatePantry(this.selectedPantryItem.p_id, this.selectedPantryItem).subscribe();
    this.isSelected = false;
  }

  removeFoodItem() {
    console.log(this.selectedPantryItem.p_id);
    this.slgService.deletePantryItem(this.selectedPantryItem.p_id).subscribe();
    for (let i = 0; i < this.pantryList.length; i++) {
      if (this.selectedPantryItem.p_id == this.pantryList[i].p_id) {
        this.pantryList.splice(i);
      }
    } 
    this.isSelected = false;
  }

  displayIngredient() {
    console.log(this.ingredientId);
    if (this.ingredientId != undefined) {
    this.getIngredient();
    console.log("this is the ingredient after getIngredient(): ");
    console.log(JSON.stringify(this.addItem));
    }
    
  }

  addFoodItem() {
    console.log(this.addItem); 
    
    if (this.pantryList.length == 0) {
      this.newItem = new Pantry(0, this.shopper, this.addItem, this.addItemAmount);
      console.log(this.newItem);
      this.slgService.addPantryItem(this.newItem).subscribe(
        (response) => {
          this.pantryList.push(response);
        }
      );
      this.isAdding = false;
    }

    for (let i = 0; i < this.pantryList.length; i++) {
      if (i == this.pantryList.length - 1) {   
        if (this.pantryList[i].ingredient.ing_id != this.addItem.ing_id) {
          this.newItem = new Pantry(0, this.shopper, this.addItem, this.addItemAmount);
          console.log(this.newItem);
          this.slgService.addPantryItem(this.newItem).subscribe(
            (response) => {
              this.pantryList.push(response);
            }
          );
          this.isAdding = false;
        }
      }
  }
}

  getIngredient() {
    this.slgService.getIngredient(this.ingredientId).subscribe(
      (response) => {
        console.log("this is the response: " + JSON.stringify(response));
        this.addItem.ing_id = response.ing_id;
        this.addItem.name = response.name;
        this.addItem.units = response.units;
      }
    )
  }

  getShopper() {
    this.shopper = JSON.parse(localStorage.getItem("user"));
  }

  displayadd() {
    this.isSelected = false;
    this.isAdding = true;
  }
}