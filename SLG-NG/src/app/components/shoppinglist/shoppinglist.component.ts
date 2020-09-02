import { Component, OnInit } from '@angular/core';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Ingredient } from 'src/app/models/Ingredient';
import { Shopper } from 'src/app/models/Shopper';
import { Note } from 'src/app/models/Note';
import { SlgService } from 'src/app/services/slg.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  constructor(private slservice : SlgService) { }

  ngOnInit(): void {
    this.shoppingListLoad();
  }

  ing: Ingredient = new Ingredient(1, "Chicken Breasts", "number");
  user: Shopper = new Shopper("william", "bonilla", "username3", "password");
  note: Note = new Note(1, "TEST NOTES");

  
  // Example fake data for funzies
  sl: ShoppingListEntry = new ShoppingListEntry(9001,this.ing, this.user, 2,  this.note);
  shoppingList: Array<ShoppingListEntry>;

    shoppingListLoad(){
    let saveduser = JSON.parse(localStorage.getItem("user"));
    console.log("SHOPPING LIST COMPONENT");
    console.log(saveduser);
    
    this.slservice.getUserShoppingListEntries(saveduser.u_id).subscribe(
      (response) =>{
        console.log(response);
        this.shoppingList = response;
      }

    )
  }


  
}
