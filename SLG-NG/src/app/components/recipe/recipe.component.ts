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
  sendList : Array<RecipeIngredient>=[];

  sleList : Array<ShoppingListEntry>=[];
  updateList : Array<ShoppingListEntry>=[];
  user: Shopper; 
  hide: string= "visibility: hidden; width:50"
amt: number;


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

addToMyShoppingList(){
  this.user= JSON.parse(localStorage.getItem('user'));
  let id = 600;
  this.rservice.getUserShoppingListEntries(this.user.u_id).subscribe(
    (response)=>{
      this.sleList=response;
      console.log(this.sendList);
      console.log(this.sleList);
      
for(let i=0; i<this.sleList.length; i++){
  // console.log(this.sleList[i].ingredient);
  // console.log(this.sendList[i].ingredient);
  if(this.sleList[i].ingredient.name==this.sendList[i].ingredient.name){
    console.log(this.sleList[i].amount)
    this.amt= this.sleList[i].amount;
    console.log("duplicate")
    console.log(this.amt);
    let newamt= (this.amt*2);
    console.log(newamt);
    console.log
    let upEntry= new ShoppingListEntry(this.sleList[i].entry_id,this.sleList[i].ingredient,this.user,newamt);
    console.log(upEntry);
      this.rservice.updateMyList(this.user.u_id,upEntry).subscribe(
        (response)=>{
          console.log("updated amount");
        }
      )
  }else{
    let entry = new ShoppingListEntry(id++,this.sleList[i].ingredient,this.user,this.sleList[i].amount);
    this.rservice.addToMyList(this.user.u_id,entry).subscribe(
     (response)=>{
       console.log("added"+entry)
  }
    )
}
} 
})
}
getIngredients(){
  for(let i=0; i<this.selectList.length; i++){
    this.rservice.getRecipeIngredients(this.selectList[i].r_id).subscribe(
      (response)=>{
      this.sendList=this.sendList.concat(response);
      this.addToMyShoppingList();
  } 
    )
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
