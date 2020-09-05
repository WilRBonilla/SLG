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

  // EC2
  // url:String = 'http://ec2-18-216-48-96.us-east-2.compute.amazonaws.com:8081/';
  // Localhost
  // Localhost
  url : string ='http://localhost:8081/'
  // url : string ='http://localhost:8080/'



  // -------------------------INGREDIENT SERVICES--------------------------------------------------------------------

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url+'ingredient');
  }

  getIngredient(ing_id: number):Observable<Ingredient> {
    return this.http.get<Ingredient>(this.url+'ingredient/' + ing_id);
  }

  deleteIngredient(ingId: number): Observable<Ingredient>{
    return this.http.delete<Ingredient>(this.url+'ingredient/' + ingId)
  }

  addIngredient(ingredient :Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.url+'ingredient', ingredient, {headers: this.headers});

  }

  // -------------------------PANTRY SERVICES--------------------------------------------------------------------
  getPantryByUser(uid: number): Observable<Pantry[]>{
    return this.http.get<Pantry[]>(this.url+'pantry/user/' + uid);
  }

  updatePantry(pid: number, change: Pantry): Observable<Pantry> {
    return this.http.put<Pantry>(this.url+'pantry/' + pid, change, {headers: this.headers});
  }

  getPantryItem(pid: number): Observable<Pantry> {
    return this.http.get<Pantry>(this.url+'pantry/' + pid);
  }

  deletePantryItem(pid: number): Observable<Pantry> {
    return this.http.delete<Pantry>(this.url+'pantry/' + pid);
  }

  addPantryList(pantryList: Pantry[]): Observable<Pantry[]> {
    return this.http.post<Pantry[]>(this.url+'pantry', pantryList, {headers: this.headers});

  }

  addPantryItem(pantry: Pantry): Observable<Pantry> {
    return this.http.post<Pantry>(this.url+'singlepantry', pantry, {headers: this.headers});
  }


  // -------------------------SHOPPING LIST ENTRY SERVICES ------------------------------------------------------
  // This function gets the shopping list by userid.
  getUserShoppingListEntries(uid: number): Observable<ShoppingListEntry[]>{
    // Returns an array of ShoppingListEntry objects.
    return this.http.get<ShoppingListEntry[]>(this.url+'shoppingList/'+ uid);
  }

  // This function retrieves a single entry. Doubt it'll be useful. here just in case
  getOneShoppingListEntry(eid: number): Observable<ShoppingListEntry>{
    return this.http.get<ShoppingListEntry>(this.url+'getShoppingListEntry/'+eid);
  }

  // This function adds an array of (one or more) entries to the DB
  addToShoppingList(shopList: ShoppingListEntry[]): Observable<ShoppingListEntry[]>{
    // Returns only the updated entities that we can add to our current array.
    return this.http.post<ShoppingListEntry[]>(this.url+'addShoppingList', shopList, {headers: this.headers});
  }
  addToMyList(id,listEntry: ShoppingListEntry): Observable<ShoppingListEntry>{
    return this.http.post<ShoppingListEntry>(this.url+'addShoppingList/'+id, listEntry, {headers: this.headers});
  }
  updateMyList(id,listEntry: ShoppingListEntry): Observable<ShoppingListEntry>{
    return this.http.put<ShoppingListEntry>(this.url+'updateList/'+id, listEntry, {headers: this.headers});
  }
  // This function appends UID to url and adds (or updates current entries) to the DB.
  updateShoppingList(uid:number, shopList: ShoppingListEntry[]): Observable<ShoppingListEntry[]>{
    // Returns only the updated entities in the shopping list.
    return this.http.put<ShoppingListEntry[]>(this.url+'shoppingList/' + uid, shopList, {headers: this.headers})
  }

  // This function deletes a SLE with an eid.
  deleteShoppingListEntry(eid: number){
    // Returns nothing of importance, but have to see if we can still measure success.
    return this.http.delete(this.url+'shoppingListEntry/' + eid)
  }


  // -----------------------------SHOPPER SERVICES --------------------------------------------------------------------

  
  getLoginInfo(shopper: Shopper): Observable<Shopper> {
    return this.http.post<Shopper>(this.url+'login', shopper, {headers: this.headers});
  }

  addShopper(shopper: Shopper): Observable<Shopper> {
    console.log(shopper);
    return this.http.post<Shopper>(this.url+'shopper', shopper, {headers: this.headers});
  } 

  getShopper(uid: number): Observable<Shopper> {
    return this.http.get<Shopper>(this.url+'shopper/' + uid);
  }



  // -----------------------------RECIPE SERVICES ---------------------------------------------------------------------

  getRecipeResults(search: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.url+'recipe/search'+ search);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.url+'recipe', recipe, { headers: this.headers });
  }
  getResultsByName(name): Observable <Recipe>{
    return this.http.get<Recipe>(this.url+'recipe/'+name);
  }

  getAllRecipes() :Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url+'recipe');
  }




 // -----------------------------RECIPE INGREDIENT SERVICES ---------------------------------------------------------------------


  addRecipeIngredient(recipeIngredient: RecipeIngredient): Observable<RecipeIngredient> {
   return this.http.post<RecipeIngredient>('http://localhost:8080/recipeingredient', recipeIngredient, { headers: this.headers });
    }

  getRecipeIngredients(r_id): Observable <RecipeIngredient[]>{
    return this.http.get<RecipeIngredient[]>(this.url+'recipeingredient/'+r_id);
  }
  
}
