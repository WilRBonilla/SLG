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

  name :string = '';
  cuisine: string ='';
  tag1 : string = '';
  tag2 : string = '';
  search : string = '';
  resultList :Array<Recipe>=[];


recipeResults(){
  if(this.cuisine != '' && this.tag1 != '' && this.tag2 != '') {
    this.search='?cuisine='+this.cuisine+'&tag1='+this.tag1+'&tag2='+this.tag2;
  } else if(this.cuisine !='' && this.tag1 != '' && this.tag2 == '') {
    this.search='?cuisine='+this.cuisine+'&tag1='+this.tag1;
  } else if(this.cuisine !='' && this.tag2 != '' && this.tag1 == '') {
    this.search='?cuisine='+this.cuisine+'&tag2='+this.tag2;
  } else if(this.tag1 !='' && this.tag2 !='' && this.cuisine == ''){
    this.search='?tag1='+this.tag1+'&tag2='+this.tag2;
  } else if(this.tag1 != '' && this.cuisine == '' && this.tag2== '') {
    this.search='?tag1='+this.tag1;
  } else if (this.tag2 != '' && this.cuisine == '' && this.tag1== '') {
    this.search='?tag2='+this.tag2;
  } else if (this.cuisine != '' && this.tag1 == '' && this.tag2 == '') {
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
}