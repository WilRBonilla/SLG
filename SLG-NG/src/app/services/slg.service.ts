import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../models/Recipe';
import { Ingredient } from '../models/Ingredient';
import { Note } from '../models/Note';
import { Pantry } from '../models/Pantry';
import { RecipeIngredient } from '../models/RecipeIngredient';
import { Shopper } from '../models/Shopper';
import { ShoppingListEntry } from '../models/ShoppingListEntry';
import { Stock } from '../models/Stock';


@Injectable({
  providedIn: 'root'
})
export class SlgService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  getLoginInfo(shopper: Shopper): Observable<Shopper> {
    return this.http.post<Shopper>('http://localhost:8080/login', shopper, {headers: this.headers});
  }

  addShopper(shopper: Shopper): Observable<Shopper> {
    console.log(shopper);
    return this.http.post<Shopper>('http://localhost:8080/shopper', shopper, {headers: this.headers});
  } 

  getAllRecipes() :Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/');
  }

  // getAllIngredients(): Observable<Ingredient[]> {
  //   return this.http.get<Recipe>('http://localhost:8080/.do');
  // }



}
