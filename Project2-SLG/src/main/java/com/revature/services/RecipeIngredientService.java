package com.revature.services;

import java.util.List;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeIngredient;
import com.revature.repositories.RecipeIngredientRepository;

public interface RecipeIngredientService {
	
	public RecipeIngredient addRecipeIngredient(RecipeIngredient recipeIngredient);
	public RecipeIngredient getRecipeIngredient(int ring_id);
	public List<RecipeIngredient> findAllByRecipe(Recipe recipe);
	public RecipeIngredient updateRecipeIngredient(RecipeIngredient recipeIngredient);
	public boolean deleteRecipeIngredient(RecipeIngredient recipeIngredient);

}
