import { Component, OnInit } from '@angular/core';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Ingredient } from 'src/app/models/Ingredient';
import { Shopper } from 'src/app/models/Shopper';
import { Note } from 'src/app/models/Note';
import { SlgService } from 'src/app/services/slg.service';
import { Pantry } from 'src/app/models/Pantry';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  constructor(private slservice: SlgService) {}

  ngOnInit(): void {
    this.customItems = JSON.parse(localStorage.getItem('customItems'));
    if(this.customItems == null){
      this.shoppingListLoad();
    }
    this.shoppingListLoad(this.customItems);
  }

  ing: Ingredient;

  note: Note = new Note(1, 'TEST NOTES');
  shoppingList: Array<ShoppingListEntry>;
  purchaseList: Array<Pantry> = [];
  customItems: Array<ShoppingListEntry> = [];
  selected: boolean;
  notes: string = "";
  globalUser = JSON.parse(localStorage.getItem('user'));

  // Example fake data for funzies
  // sl: ShoppingListEntry = new ShoppingListEntry(
  //   9001,
  //   this.ing,
  //   this.user,
  //   2,
  //   this.note
  // );
  

  shoppingListLoad(custom?: Array<ShoppingListEntry>) {
    let saveduser = JSON.parse(localStorage.getItem('user'));

    this.slservice
      .getUserShoppingListEntries(saveduser.u_id)
      .subscribe((response) => {
        console.log(response);
        this.shoppingList = response;
        if(custom != null){
          this.shoppingList = this.shoppingList.concat(custom);
        }
        
      });
  }
  purchaseItem(entry :ShoppingListEntry){
    let ingred = entry.ingredient;
    let pantryEntry = new Pantry(9000000, JSON.parse(localStorage.getItem('user')), ingred, entry.amount)

    if(this.purchaseList.length == 0){
      this.purchaseList.push(pantryEntry)
    } else {
      for (let index = 0; index < this.purchaseList.length; index++) {

        if(entry.ingredient.name == this.purchaseList[index].ingredient.name){
          break;
        } else if ( index == this.purchaseList.length-1){
          this.purchaseList.push(pantryEntry);
        }
        
      }
    }

    
    
    
    
    console.log(this.purchaseList);
  }
  addCustom(){
    if(this.notes != ""){
      this.customItems = JSON.parse(localStorage.getItem("customItems"));
      if(this.customItems == null){
        this.customItems = [];
      }
      let customIngredient = new Ingredient(90000, this.notes, "number");
      let customEntry = new ShoppingListEntry(9000, customIngredient, this.globalUser, 1);
      this.customItems.push(customEntry);
      localStorage.setItem("customItems", JSON.stringify(this.customItems));
      this.shoppingList.push(customEntry);
      console.log(this.shoppingList)
    }
      
  }

  selectAll(){
    this.shoppingList.forEach(e => { 
      this.purchaseItem(e);
    });
  }

  purchase(){
    localStorage.removeItem("customItems");

  }





}
