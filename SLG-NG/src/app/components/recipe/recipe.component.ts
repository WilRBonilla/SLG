import { Component, OnInit, Directive, Input, ViewChild, ElementRef } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeIngredient } from 'src/app/models/RecipeIngredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @ViewChild('t') t: ElementRef;

  constructor(private rservice : SlgService) { }

  ngOnInit(): void {
  }

  searched :string = '';
  separate :Array<string>= [];
  name :string = '';
  cuisine: string ='';
  tag1 : string = '';
  tag2 : string = '';
  search : string = '';
  sTitle: string;
  resultList :Array<Recipe>=[];
  r :Recipe;
  selectList :Array<Recipe>=[];
  riList : Array<RecipeIngredient>=[];
  riList2 : Array<RecipeIngredient>=[];
  sendList : Array<RecipeIngredient>=[];


recipeResults(){
  console.log(this.searched);
 this.separate= this.searched.split(" ");
 this.cuisine= this.separate[0];
 this.tag1= this.separate[1];
 this.tag2= this.separate[2];
  if(this.cuisine != undefined && this.tag1 != undefined && this.tag2 != undefined) {
    this.search='?cuisine='+this.cuisine+'&tag1='+this.tag1+'&tag2='+this.tag2;
  } else if(this.cuisine !=undefined && this.tag1 != undefined && this.tag2 == undefined) {
    this.search='?cuisine='+this.cuisine+'&tag1='+this.tag1;
  } else if(this.cuisine !=undefined && this.tag2 != undefined && this.tag1 == undefined) {
    this.search='?cuisine='+this.cuisine+'&tag2='+this.tag2;
  } else if (this.cuisine != undefined && this.tag1 == undefined && this.tag2 == undefined) {
    this.search='?cuisine='+this.cuisine;
  } else {
    this.search= undefined;
  }
  this.rservice.getRecipeResults(this.search).subscribe(
    (response)=> {
      this.resultList = response;

    }
  );
}
nameResults(){
  this.rservice.getResultsByName(this.name).subscribe(
    (response)=> {
      console.log(response);
      this.resultList=[];
      this.resultList.push(response);

      console.log(this.resultList);

    }
  )
}
addToSelections=(r)=>{
  this.sTitle="My Selections"
  for(let i=0; i<this.resultList.length; i++){
    
    if (r.r_id==this.resultList[i].r_id){
      let tRec: Recipe= this.resultList[i] 
    this.selectList.push(tRec);
    console.log("My selections");
    console.log(this.selectList);

  }
}
}
getRecipeIngredients(r):Array<RecipeIngredient>{
  console.log(r.r_id);
  this.rservice.getRecipeIngredients(r.r_id).subscribe(
  (response)=>{
    this.riList=response;
    console.log("Recipe Ingredient LIST")
    console.log(this.riList);
     }
  )
  return this.riList;

}
addToShoppingList(r){
  this.rservice.getRecipeIngredients(r.r_id).subscribe(
  (response)=>{
    this.sendList=response;
    for(let i=0; i<this.sendList.length; i++){
    this.riList2.push(this.sendList[i]);
    console.log(this.riList2);
     }
    }
  )
}
}
