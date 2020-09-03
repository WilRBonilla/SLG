import { Component, OnInit } from '@angular/core';
import { SlgService } from 'src/app/services/slg.service';
import { Recipe } from 'src/app/models/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

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
  resultList :Array<Recipe>=[];


  recipeResults(){
    console.log(this.searched);
    this.separate= this.searched.split(" ");
    this.cuisine= this.separate[0];
    this.tag1= this.separate[1];
    this.tag2= this.separate[2];

    console.log(this.separate);
    console.log(this.separate[0]);
    console.log(this.separate[2]);
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
        console.log(response);
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
      }
    )

  }

  getRecipeIngredients(){

  }
}