package com.revature.services;

import java.util.List;

import com.revature.beans.Ingredient;

public interface IngredientService {

	public Ingredient addIngredient(Ingredient i);
	public List<Ingredient> getAllIngredients();
	public Ingredient getIngredient(int ing_id);
	public Ingredient findByName(String Name);
	public boolean deleteIngredient(Ingredient i);
	
}
