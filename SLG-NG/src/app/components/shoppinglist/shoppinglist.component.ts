import { Component, OnInit } from '@angular/core';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Ingredient } from 'src/app/models/Ingredient';
import { Shopper } from 'src/app/models/Shopper';
import { Note } from 'src/app/models/Note';
import { SlgService } from 'src/app/services/slg.service';
import { Pantry } from 'src/app/models/Pantry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  constructor(private slservice: SlgService, public router: Router) {}

  ngOnInit(): void {
    this.customItems = JSON.parse(localStorage.getItem('customItems'));
    this.pantryListLoad();
    if (this.customItems == null) {
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
  notes: string = '';
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
        // if(custom != null){
        //   this.shoppingList = this.shoppingList.concat(custom);
        // }
      });
  }
  // When an item is clicked, we add it to a list of items we intend to purchase.
  purchaseItem(entry: ShoppingListEntry) {
    let ingred = entry.ingredient;

    let pantryEntry = new Pantry(
      9000000,
      this.globalUser,
      ingred,
      entry.amount
    );

    if (this.purchaseList.length == 0) {
      this.purchaseList.push(pantryEntry);
    } else {
      for (let index = 0; index < this.purchaseList.length; index++) {
        if (entry.ingredient.name == this.purchaseList[index].ingredient.name) {
          break;
        } else if (index == this.purchaseList.length - 1) {
          this.purchaseList.push(pantryEntry);
        }
      }
      console.log('SELECTED ITEM');
      console.log(this.purchaseList);
    }
  }
  // Adds custom item.
  addCustom() {
    if (this.notes != '') {
      this.customItems = JSON.parse(localStorage.getItem('customItems'));
      if (this.customItems == null) {
        this.customItems = [];
      }
      let customIngredient = new Ingredient(null, this.notes, 'number');
      let customEntry = new ShoppingListEntry(
        null,
        customIngredient,
        this.globalUser,
        1
      );
      this.customItems.push(customEntry);
      localStorage.setItem('customItems', JSON.stringify(this.customItems));
    }
  }

  selectAll() {
    this.shoppingList.forEach((e) => {
      this.purchaseItem(e);
    });
  }
  deselectAll() {
    this.purchaseList = [];
  }

  // Functions dealing with the pantrylist
  pantryListLoad() {
    this.slservice
      .getPantryByUser(this.globalUser.u_id)
      .subscribe((response) => {
        this.pantryList = response;
        this.outPantry = JSON.parse(JSON.stringify(this.pantryList));

        console.log('PANTRY LIST FROM DB: ');
        console.log(this.pantryList);
      });

    this.slservice
      .getPantryByUser(this.globalUser.u_id)
      .subscribe((response) => {
        // this.outPantry = response;
      });
  }

  purchase() {
    localStorage.removeItem('customItems');
    console.log(this.purchaseList);
    if (this.outPantry.length == 0) {
      console.log("Empty pantry, ADDING item(s)")
      var copyList = JSON.parse(JSON.stringify(this.purchaseList)); 
      this.outPantry = this.outPantry.concat(copyList);
    } else {

    // For every item we intend to purchase,
    for (let j = 0; j < this.purchaseList.length; j++) {
      // Search every item in the pantry
      for (let i = 0; i < this.outPantry.length; i++) {
        if (
          this.outPantry[i].ingredient.name ==
          this.purchaseList[j].ingredient.name
        ) {
          console.log('ING FOUND, ADDING AMT');
          let selected: Pantry = JSON.parse(
            JSON.stringify(this.purchaseList[j])
          );

          this.outPantry[i].amount += selected.amount;
          // this.outPantry[i].amount = pantryAMT + purchaseAMT;

          console.log(this.outPantry[i].amount);
          console.log(this.purchaseList[j].amount);
          break; // stops searching pantry the rest of the pantry if item is found.
        } else if (
          this.outPantry[i].ingredient.name !=
            this.purchaseList[j].ingredient.name &&
          i == this.outPantry.length - 1
        ) {
          console.log('ING NOT FOUND, CREATING PANTRY ENTRY');

          this.outPantry.push(JSON.parse(JSON.stringify(this.purchaseList[j])));
          break;
        }
      }
    }
  }
    console.log('SENDING PANTRYLIST TO DB: ');
    this.outPantry.forEach(p => {console.log(p.ingredient.name)});
  

    // This will add to pantry and remove from shoppinglist. Probably abstract it to another function.
    this.slservice.addPantryList(this.outPantry).subscribe((response) => {
      let deleted: Array<ShoppingListEntry> = [];
      console.log('success');
      this.router.navigate(['/pantry']);
      this.purchaseList.forEach((p) => {
        this.shoppingList.forEach((sl) => {
          if( p.ingredient.ing_id == sl.ingredient.ing_id){
            this.slservice.deleteShoppingListEntry(sl.entry_id).subscribe();
            deleted.push(sl);
            var index = this.shoppingList.indexOf(sl);
            this.shoppingList.splice(index);
          }

        });
      });
      console.log("DELETED FROM LIST");
      deleted.forEach(d => {console.log(d.ingredient.name)})
    });
  }
  clearSelected(selected?: Array<Pantry>) {
    this.purchaseList = [];
    console.log('CLEARING SELECTIONS');
    console.log(this.purchaseList);
  }
  clearList() {
    localStorage.removeItem('customItems');
    this.customItems = [];
    this.shoppingList = [];
    this.shoppingList.forEach((sl) => {
      this.slservice
        .deleteShoppingListEntry(sl.entry_id)
        .subscribe((response) => {
          console.log('delete from DB success');
        });
    });
  }
}
