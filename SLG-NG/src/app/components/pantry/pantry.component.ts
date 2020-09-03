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
  }
  isSelected: boolean = false;
  selectedPantryItem: Pantry = new Pantry(0, new Shopper("N/A", "N/A", "N/A", "N/A"), new Ingredient(0, "N/A", "N/A"), 0);
  pantryList: Array<Pantry> = [];
  foodName: string;
  foodAmount: number;
  user : Shopper;

  displayPantry() {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.slgService.getPantryByUser(this.user.u_id).subscribe(
      (response) => {
        this.pantryList = response;
      }
    )
  }
  onSelect(selectedItem: any) {
    this.selectedPantryItem = selectedItem;
    console.log(this.selectedPantryItem);
    this.isSelected = true;
  }

  updateFoodItem() {
    this.selectedPantryItem.amount = this.foodAmount;
    console.log(this.selectedPantryItem);
    this.slgService.updatePantry(this.selectedPantryItem.p_id, this.selectedPantryItem).subscribe();
  }

  removeFoodItem() {
    console.log(this.selectedPantryItem.p_id);
    this.slgService.deletePantryItem(this.selectedPantryItem.p_id);
  }

  addFoodItem() {

  }



}
