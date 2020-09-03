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
    this.displayPantry();
    this.getIngredients();
  } 
  isAdding: boolean = false;
  isSelected: boolean = false;
  selectedPantryItem: Pantry = new Pantry(new Shopper("N/A", "N/A", "N/A", "N/A"), new Ingredient(0, "N/A", "N/A"), 0);
  pantryList: Array<Pantry> = [];
  foodName: string;
  foodAmount: number;
  ingredients: Array<Ingredient> = [];
  addPantryList: Array<Pantry> = [];
  newItem: Pantry;
  selectedItemId: number;
  addItem: Ingredient;
  addItemAmount: number;
  shopper: Shopper;

  getIngredients() {
    this.slgService.getAllIngredients().subscribe(
      (response) => {
        this.ingredients = response;
      }
    );
  }

  displayPantry() {
    this.slgService.getPantryByUser(15).subscribe(
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
  }

  removeFoodItem() {
    console.log(this.selectedPantryItem.p_id);
    this.slgService.deletePantryItem(this.selectedPantryItem.p_id).subscribe();
    this.displayPantry();
  }

  addFoodItem() {
      this.getIngredient();
      this.getShopper();
      // for(let i = 0; i < this.ingredients.length; i++) {
      //   if (this.ingredients[i].ing_id == this.selectedItemId) {
      //     this.addItem = this.ingredients[i] as Ingredient;
      //   }
      // }
      
      this.newItem = new Pantry(<Shopper>this.shopper, <Ingredient>this.addItem, this.addItemAmount);
      console.log(this.newItem);
      this.slgService.addPantryItem(this.newItem).subscribe();
  }

  getIngredient() {
    this.slgService.getIngredient(this.selectedItemId).subscribe(
      (response) => {
        console.log(response);
        this.addItem = response;
        console.log(this.addItem);
      }
    )
  }

  getShopper() {
    this.slgService.getShopper(15).subscribe (
      (response) => {
        console.log(response);
        this.shopper = response;
        console.log(this.shopper);
      }

    )
  }

  displayadd() {
    this.isSelected = false;
    this.isAdding = true;
  }



}
