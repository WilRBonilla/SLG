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

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('http://localhost:8080/ingredient');
  }

  getIngredient(ing_id: number):Observable<Ingredient> {
    return this.http.get<Ingredient>('http://localhost:8080/ingredient/' + ing_id);
  }


  // -------------------------PANTRY SERVICES--------------------------------------------------------------------
  getPantryByUser(uid: number): Observable<Pantry[]>{
    return this.http.get<Pantry[]>('http://localhost:8080/pantry/user/' + uid);
  }

  updatePantry(pid: number, change: Pantry): Observable<Pantry> {
    return this.http.put<Pantry>('http://localhost:8080/pantry/' + pid, change, {headers: this.headers});
  }

  getPantryItem(pid: number): Observable<Pantry> {
    return this.http.get<Pantry>('http://localhost:8080/pantry/' + pid);
  }

  deletePantryItem(pid: number): Observable<Pantry> {
    return this.http.delete<Pantry>('http://localhost:8080/pantry/' + pid);
  }

  addPantryList(pantryList: Pantry[]): Observable<Pantry[]> {
    return this.http.post<Pantry[]>('http://localhost:8080/pantry', pantryList, {headers: this.headers});

  }
  addIngredient(ingredient :Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>('http://localhost:8080/ingredient', ingredient, {headers: this.headers});

  }

  addPantryItem(pantry: Pantry): Observable<Pantry> {
    return this.http.post<Pantry>('http://localhost:8080/singlepantry', pantry, {headers: this.headers});
  }

  deleteIngredient(ingId: number): Observable<Ingredient>{
    return this.http.delete<Ingredient>('http://localhost:8080/ingredient/' + ingId)
  }

  // -------------------------SHOPPING LIST ENTRY SERVICES ------------------------------------------------------
  // This function gets the shopping list by userid.
  getUserShoppingListEntries(uid: number): Observable<ShoppingListEntry[]>{
    // Returns an array of ShoppingListEntry objects.
    return this.http.get<ShoppingListEntry[]>('http://localhost:8080/shoppingList/'+ uid);
  }

  // This function retrieves a single entry. Doubt it'll be useful. here just in case
  getOneShoppingListEntry(eid: number): Observable<ShoppingListEntry>{
    return this.http.get<ShoppingListEntry>('http://localhost:8080/getShoppingListEntry/'+eid);
  }

  // This function adds an array of (one or more) entries to the DB
  addToShoppingList(shopList: ShoppingListEntry[]): Observable<ShoppingListEntry[]>{
    // Returns only the updated entities that we can add to our current array.
    return this.http.post<ShoppingListEntry[]>('http://localhost:8080/addShoppingList', shopList, {headers: this.headers});
  }

  // This function appends UID to url and adds (or updates current entries) to the DB.
  updateShoppingList(uid:number, shopList: ShoppingListEntry[]): Observable<ShoppingListEntry[]>{
    // Returns only the updated entities in the shopping list.
    return this.http.put<ShoppingListEntry[]>('http://localhost:8080/shoppingList/' + uid, shopList, {headers: this.headers})
  }

  // This function deletes a SLE with an eid.
  deleteShoppingListEntry(eid: number){
    // Returns nothing of importance, but have to see if we can still measure success.
    return this.http.delete('http://localhost:8080/shoppingListEntry/' + eid)
  }

  // -----------------------------END SHOPPING LIST ENTRY SERVICES-----------------------------------------------------

  // -----------------------------SHOPPER SERVICES --------------------------------------------------------------------

  getShopper(uid: number): Observable<Shopper> {
    return this.http.get<Shopper>('http://localhost:8080/shopper/' + uid);
  }

  // -----------------------------END SHOPPER SERVICES ----------------------------------------------------------------


  // -----------------------------RECIPE SERVICES ---------------------------------------------------------------------

  getRecipeResults(search: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>('http://localhost:8080/recipe/search'+ search);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>('http://localhost:8080/recipe', recipe, { headers: this.headers });
  }
  getResultsByName(name): Observable <Recipe>{
    return this.http.get<Recipe>('http://localhost:8080/recipe/'+name);
  }
  


  // -----------------------------END RECIPE SERVICES -----------------------------------------------------------------
}
