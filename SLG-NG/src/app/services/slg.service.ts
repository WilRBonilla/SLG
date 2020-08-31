import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../models/Recipe';


@Injectable({
  providedIn: 'root'
})
export class SlgService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllRecipes() :Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/.do');
  }

  // getAllIngredients(): Observable<Ingredient[]> {
  //   return this.http.get<Recipe>('http://localhost:8080/.do');
  // }



}
