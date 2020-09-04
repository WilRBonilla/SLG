import { Component, OnInit, Directive, Input, ViewChild, ElementRef } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeIngredient } from 'src/app/models/RecipeIngredient';
import { ShoppingListEntry } from 'src/app/models/ShoppingListEntry';
import { Shopper } from 'src/app/models/Shopper';
import { Ingredient } from 'src/app/models/Ingredient';



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
  i :RecipeIngredient;
  selectList :Array<Recipe>=[];
  riList : Array<RecipeIngredient>=[];
  riList2 : Array<RecipeIngredient>=[];
  currentList : Array<ShoppingListEntry>=[];
  user: Shopper; 
  hide: string= "visibility: hidden; width:50"
  z: string;


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
      this.resultList=[];
      this.resultList.push(response);
    }
  )
}
addToSelections=(r)=>{
  this.sTitle="My Selections"
  this.hide= "visibility:visible; width:50"
  for(let i=0; i<this.resultList.length; i++){
    if (r.r_id==this.resultList[i].r_id){
      let tRec: Recipe= this.resultList[i] 
    this.selectList.push(tRec);
  
  }
}
}
showRecipeIngredients(r){
  this.rservice.getRecipeIngredients(r.r_id).subscribe(
  (response)=>{
    this.riList2=response;
     }
  )
}

getRecipeIngredients(r){
  this.user= JSON.parse(localStorage.getItem('user'));
  this.rservice.getRecipeIngredients(r.r_id).subscribe(
  (response)=>{
    this.riList=response;
    localStorage.setItem("ingredList"+this.user.u_id,JSON.stringify(response));
    let id = 600;
  this.rservice.getUserShoppingListEntries(this.user.u_id).subscribe(
    (response)=>{
      this.currentList=response;
      for(let i=0; i<this.riList.length; i++){
        this.z= this.riList[i].ingredient.name;
      for(let p=0; p<this.currentList.length; p++){
        // console.log(this.z);
        // console.log(this.currentList[i].ingredient)
        if(this.z==this.currentList[i].ingredient.name){
          console.log("Duplicate");
          console.log(this.z);
          console.log(this.currentList[i].ingredient.name);
        }else{
          console.log("Not a Duplicate");
       
        }
      }
    }

    // if(anIngredient)
//  let entry = new ShoppingListEntry(id++,this.riList[i].ingredient,this.user,this.riList[i].amount);
//  this.rservice.addToMyList(this.user.u_id,entry).subscribe(
//   (response)=>{
//   }
//     )
      }
    
    )
     }
  )
}
addToShoppingList=()=>{
  this.user= JSON.parse(localStorage.getItem('user'));
  for(let p=0; p<this.selectList.length; p++){
    console.log(this.selectList[p]);
    this.getRecipeIngredients(this.selectList[p]);
  }

  } 
}
// addToShopping=(r)=>{
//   this.user= JSON.parse(localStorage.getItem('user'));
//   console.log(this.user);
//   this.rservice.getRecipeIngredients(r.r_id).subscribe(
//     (response)=>{
//       this.riList=response;
//   let id = 600;
//   for(let i=0; i<this.riList.length; i++){
//  let entry = new ShoppingListEntry(id++,this.riList[i].ingredient,this.user,this.riList[i].amount);
//  console.log(entry);
//  this.myList.push(entry);
//  this.rservice.addToIdList(this.user.u_id,this.myList).subscribe(
//      (response)=>{
//        console.log("success");
//        console.log(response);
//      }
//        )
  
//   }
// }
//   )
// }
//  this.rservice.addToShoppingList(this.myList).subscribe(
//    (response)=>{
//      console.log("success");
//      console.log(response);
//  )
// }
//     }
// addToShoppingList(r){
//   this.rservice.getRecipeIngredients(r.r_id).subscribe(
//   (response)=>{
//     this.sendList=response;
//     for(let i=0; i<this.sendList.length; i++){
//     this.riList2.push(this.sendList[i]);
//     console.log(this.riList2);
    
//      )
//     }
//   }
