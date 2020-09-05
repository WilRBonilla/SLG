import {
  Component,
  OnInit,
  Directive,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeIngredient } from 'src/app/models/RecipeIngredient';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Shopper } from 'src/app/models/Shopper';
import { Ingredient } from 'src/app/models/Ingredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @ViewChild('t') t: ElementRef;

  constructor(private rservice: SlgService) {}

  ngOnInit(): void {
    this.getShopper();
  }

  searched: string = '';
  separate: Array<string> = [];
  name: string = '';
  cuisine: string = '';
  tag1: string = '';
  tag2: string = '';
  search: string = '';
  sTitle: string;
  resultList: Array<Recipe> = [];
  r: Recipe;
  i: RecipeIngredient;
  selectList: Array<Recipe> = [];
  riList: Array<RecipeIngredient> = [];
  iList: Array<RecipeIngredient> = [];

  riList2: Array<RecipeIngredient> = [];

  sleList: Array<ShoppingListEntry> = [];
  nonDupeList: Array<RecipeIngredient> = [];
  nonDupe: Array<ShoppingListEntry> = [];
  user: Shopper;
  hide: string = 'visibility: hidden; width:50';
  amt: number;
  ria: Ingredient;
  dri: Ingredient;

  recipeResults() {
    console.log(this.searched);
    this.separate = this.searched.split(' ');
    this.cuisine = this.separate[0];
    this.tag1 = this.separate[1];
    this.tag2 = this.separate[2];
    if (
      this.cuisine != undefined &&
      this.tag1 != undefined &&
      this.tag2 != undefined
    ) {
      this.search =
        '?cuisine=' +
        this.cuisine +
        '&tag1=' +
        this.tag1 +
        '&tag2=' +
        this.tag2;
    } else if (
      this.cuisine != undefined &&
      this.tag1 != undefined &&
      this.tag2 == undefined
    ) {
      this.search = '?cuisine=' + this.cuisine + '&tag1=' + this.tag1;
    } else if (
      this.cuisine != undefined &&
      this.tag2 != undefined &&
      this.tag1 == undefined
    ) {
      this.search = '?cuisine=' + this.cuisine + '&tag2=' + this.tag2;
    } else if (
      this.cuisine != undefined &&
      this.tag1 == undefined &&
      this.tag2 == undefined
    ) {
      this.search = '?cuisine=' + this.cuisine;
    } else {
      this.search = undefined;
    }
    this.rservice.getRecipeResults(this.search).subscribe((response) => {
      this.resultList = response;
    });
  }
  nameResults() {
    this.rservice.getResultsByName(this.name).subscribe((response) => {
      this.resultList = [];
      this.resultList.push(response);
    });
  }
  addToSelections = (r) => {
    this.sTitle = 'My Selections';
    this.hide = 'visibility:visible; width:50';
    for (let i = 0; i < this.resultList.length; i++) {
      if (r.r_id == this.resultList[i].r_id) {
        let tRec: Recipe = this.resultList[i];
        this.selectList.push(tRec);
      }
    }
  };
  showRecipeIngredients(r) {
    this.rservice.getRecipeIngredients(r.r_id).subscribe((response) => {
      this.riList2 = response;
    });
  }
  getIngredients() {
    for (let i = 0; i < this.selectList.length; i++) {
      this.rservice
        .getRecipeIngredients(this.selectList[i].r_id)
        .subscribe((response) => {
          localStorage.setItem(
            'ingredList' + this.user.u_id,
            JSON.stringify(response)
          );
          this.riList = this.riList.concat(response);

          this.addToMyShoppingList();
        });
    }
  }
  addToMyShoppingList() {
    this.user = JSON.parse(localStorage.getItem('user'));
    let id = 600;
    // Gets the user's shoppinglist entries currently in DB.
    this.rservice.getUserShoppingListEntries(this.user.u_id).subscribe(
      (response) => {
        // Making a copy of the response cause response objs are weird.
        this.sleList = JSON.parse(JSON.stringify(response));
        // For every RI (per recipe), search through the shopping list for a match.
        if (this.sleList.length != 0) { // Let's first check if the shopping list is empty.

          for (let i = 0; i < this.riList.length; i++) {
            console.log(this.riList[i].ingredient);
            let ri: Ingredient = JSON.parse(JSON.stringify(this.riList[i].ingredient));
            let match: boolean = false;
            for (let p = 0; p < this.sleList.length; p++) {
              // Ingredient already in shopping list.
              let asle: Ingredient = JSON.parse(JSON.stringify(this.sleList[p].ingredient));
              console.log(asle.name + " " + ri.name);
              // If a matching name is found (ID could be an alternative)
              if (ri.name == asle.name) {
                console.log(this.sleList[p].amount);
                this.amt = this.sleList[p].amount;
                console.log('duplicate');
                let newamt = this.amt + this.riList[i].amount;
                let upEntry = new ShoppingListEntry(
                  this.sleList[p].entry_id,
                  this.sleList[p].ingredient,
                  this.user,
                  newamt
                );
                // Added this log for debugging.
                console.log("UPDATING AMOUNT FOR: " + upEntry.ingredient.name + " TO " + upEntry.amount);
                // updateMyList works, but it might be slightly safer to send an entire array so Hibernate
                // can batch update in DB. 
                this.rservice.updateMyList(this.user.u_id, upEntry).subscribe(
                  (response) => {
                    console.log('updated amount');
                  });
                break;
              } else if (p == this.sleList.length -1 ){  // Changed this to only happen after we reach the END of the shopping list.
                let entry = new ShoppingListEntry(
                  id++,
                  this.riList[i].ingredient,
                  this.user,
                  this.riList[i].amount
                );
                console.log(entry);
                this.rservice
                  .addToMyList(this.user.u_id, entry)
                  .subscribe((response) => {
                    console.log('added' + entry);
                  });
              }
            }

            // for(let i=0; i<this.riList.length; i++){
            //   this.ria= JSON.parse(JSON.stringify(this.riList[i].ingredient));
            //   this.nonDupeList.push(this.riList[i]);
            //   for(let p=0; p<this.nonDupeList.length;p++){
            //     this.dri= JSON.parse(JSON.stringify(this.nonDupeList[p].ingredient));
            // // for(let i=0; i<this.sleList.length; i++){
            // //   this.ria= JSON.parse(JSON.stringify(this.sleList[i].ingredient));
            // //   this.nonDupe.push(this.sleList[i]);
            // //   for(let p=0; p<this.nonDupe.length;p++){
            // //     this.dri= JSON.parse(JSON.stringify(this.nonDupe[p].ingredient))
            // }
            // if(this.ria.name==this.dri.name){

            //     }else{
            //       console.log("add")
            //     let entry = new ShoppingListEntry(id++,this.nonDupe[i].ingredient,this.user,this.nonDupe[i].amount);
            //   this.rservice.addToMyList(this.user.u_id,entry).subscribe(
            //    (response)=>{
            //      console.log("added");
            //       }
            // )
            //     }
            // }
            // }
            // }
          }
        } else {
          // If it's empty, do this.
          let outputArray: Array<ShoppingListEntry> = [];
          // For every recipe ingredient, simply create a new entry and add it to the outputArray.
          this.riList.forEach(ring => {
            outputArray.push(new ShoppingListEntry(99999, ring.ingredient, this.user, ring.amount));
          });
          // Send all the entries at once.
          this.rservice.updateShoppingList(this.user.u_id, outputArray).subscribe();

        }
      });
  }

  getShopper() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
