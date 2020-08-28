package com.revature.services;

import com.revature.beans.Ingredient;

public interface IngredientService {

	public Ingredient addIngredient(Ingredient i);
	public Ingredient getIngredient(int ing_id);
	public Ingredient findByName(String Name);
	
}
