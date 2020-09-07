import {Component, OnInit} from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeIngredient } from 'src/app/models/RecipeIngredient';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Shopper } from 'src/app/models/Shopper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {

  constructor(private rservice: SlgService,public router:Router) {}

  ngOnInit(): void {
  }

  searched: string = '';
  separate: Array<string> = [];
  name: string = '';
  cuisine: string = '';
  tag1: string = '';
  tag2: string = '';
  search: string = '';
  resultList: Array<Recipe> = [];
  selectList: Array<Recipe> = [];
  riList: Array<RecipeIngredient> = [];
  riList2: Array<RecipeIngredient> = [];
  user: Shopper;
  noSelect: Boolean= false;
  mySelect: Boolean= false;
  getButton: Boolean=false;

  recipeResults() {
    this.noSelect=true;
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
   this.noSelect=false;
   this.mySelect=true;
    for (let i = 0; i < this.resultList.length; i++) {
      if (r.r_id == this.resultList[i].r_id) {
        let tRec: Recipe = this.resultList[i];
        this.selectList.push(tRec);
        this.getButton=true;
      }
    }
  };
  showRecipeIngredients(r) {
    this.rservice.getRecipeIngredients(r.r_id).subscribe((response) => {
      this.riList2 = response;
    });
  }
  getIngredients() {
    this.user = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < this.selectList.length; i++) {
      this.rservice.getRecipeIngredients(this.selectList[i].r_id).subscribe(
        (response) => {
          localStorage.setItem('ingredList' + this.user.u_id,JSON.stringify(response));
            this.riList =JSON.parse(JSON.stringify(response));
              for(let p=0;p<this.riList.length;p++){
                let entry= new ShoppingListEntry(600,this.riList[p].ingredient,this.user,this.riList[p].amount)
                this.rservice.addToMyList(this.user.u_id, entry).subscribe();
          }
        });
      }this.router.navigate(['/shoppinglist']);
    }
  }