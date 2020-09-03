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
    this.pantryListLoad();
    if(this.customItems == null){
      this.shoppingListLoad();
    } else {
      this.shoppingListLoad(this.customItems);
    }
  }

  ing: Ingredient;

  note: Note = new Note(1, 'TEST NOTES');
  // Necessary Arrays
  pantryList: Array<Pantry> = [];
  shoppingList: Array<ShoppingListEntry> = [];
  purchaseList: Array<Pantry> = [];
  customItems: Array<ShoppingListEntry> = [];
  outPantry: Array<Pantry> = [];


  selected: boolean;
  notes: string = "";
  globalUser: Shopper = JSON.parse(localStorage.getItem('user'));

  // Example fake data for funzies
  // sl: ShoppingListEntry = new ShoppingListEntry(
  //   9001,
  //   this.ing,
  //   this.user,
  //   2,
  //   this.note
  // );
  
  

// Working
  shoppingListLoad(custom?: Array<ShoppingListEntry>) {
    let saveduser = JSON.parse(localStorage.getItem('user'));

    this.slservice
      .getUserShoppingListEntries(saveduser.u_id)
      .subscribe((response) => {
        this.shoppingList = response;
        if(custom != null){
          this.shoppingList = this.shoppingList.concat(custom);
        }
        
      });
  }
  // When an item is clicked, we add it to a list of items we intend to purchase.
  purchaseItem(entry :ShoppingListEntry){
    let ingred = entry.ingredient;

    let pantryEntry = new Pantry(9000000, this.globalUser, ingred, entry.amount)

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
      console.log("SELECTED ITEM");
      console.log(this.purchaseList);
      console.log(this.pantryList);
    }
  }
  // Adds custom item.
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

  

// Functions dealing with the pantrylist
  pantryListLoad(){
    this.slservice.getPantryByUser(this.globalUser.u_id)
    .subscribe(
      (response) => {
        this.pantryList = response;
        // this.outPantry = response;
        console.log("PANTRY LIST FROM DB: ");
        console.log(this.pantryList);
      }


    )
  }


  purchase(){
    localStorage.removeItem("customItems");
    // Pantrylist shouldn't be changing, but it is.
    console.log("Pantry List");
    console.log(this.pantryList);
    console.log("Output Pantry");
    // this.outPantry = this.pantryList.slice();
    
    // console.log(this.outPantry);
   for (let index = 0; index < this.pantryList.length; index++) {
      this.outPantry.push(this.pantryList[index]);
     
   }
   console.log(this.outPantry);
    
    

    // For every item we intend to purchase,
    for (let j = 0; j < this.purchaseList.length; j++) {

      // Search every item in the pantry
      for (let i = 0; i < this.pantryList.length; i++) {
        

        if(this.pantryList[i].ingredient.name == this.purchaseList[j].ingredient.name){
              console.log("If ING FOUND, ADD AMT: ")
              console.log(this.pantryList[i].ingredient.name)
              this.outPantry[i].amount = (this.pantryList[i].amount + this.purchaseList[j].amount);
              console.log(this.pantryList[i].amount);
              break; // stops searching pantry the rest of the pantry if item is found.
            } 
        else if(this.pantryList[i].ingredient.name != this.purchaseList[j].ingredient.name && i == (this.pantryList.length-1)){
          console.log("ING NOT FOUND, CREATING PANTRY ENTRY")
          // console.log(this.pantryList[i].ingredient.name)
          this.outPantry.push(this.purchaseList[j]);
          break;
        }

      }
      
    
    }
    console.log("AFTER FORLOOPS PANTRY LIST FROM DB");
    console.log(this.pantryList);
    console.log("SENDING PANTRYLIST TO DB: ")
    console.log(this.outPantry);
  }







}
