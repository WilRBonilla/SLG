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
    this.shoppingListLoad();
  }

  ing: Ingredient;

  note: Note = new Note(1, 'TEST NOTES');
  shoppingList: Array<ShoppingListEntry>;
  purchaseList: Array<Pantry> = [];
  selected: boolean;
  notes: string;

  // Example fake data for funzies
  // sl: ShoppingListEntry = new ShoppingListEntry(
  //   9001,
  //   this.ing,
  //   this.user,
  //   2,
  //   this.note
  // );
  

  shoppingListLoad() {
    let saveduser = JSON.parse(localStorage.getItem('user'));
    console.log('SHOPPING LIST COMPONENT');
    console.log(saveduser);

    this.slservice
      .getUserShoppingListEntries(saveduser.u_id)
      .subscribe((response) => {
        console.log(response);
        this.shoppingList = response;
      });
  }
  purchaseItem(entry :ShoppingListEntry){
    let ingred = entry.ingredient;
    let pantryEntry = new Pantry(9000000, JSON.parse(localStorage.getItem('user')), ingred, entry.amount)

    if(this.purchaseList.length == 0){
      this.purchaseList.push(pantryEntry)
    } else {
      for (let index = 0; index < this.purchaseList.length; index++) {

        if(entry.ingredient.ing_id == this.purchaseList[index].ingredient.ing_id){
          break;
        } else if ( index == this.purchaseList.length-1){
          this.purchaseList.push(pantryEntry);
        }
        
      }
    }
    
    
    
    console.log(this.purchaseList);
  }





}
