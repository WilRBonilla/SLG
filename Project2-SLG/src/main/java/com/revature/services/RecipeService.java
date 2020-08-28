package com.revature.services;

import java.util.List;

import com.revature.beans.Recipe;

public interface RecipeService {

	public Recipe addRecipe(Recipe r);
	public Recipe findByTitle(String title);
	public List<Recipe> findByCuisine(String cuisine);
	public List<Recipe> findByTag1(String tag1);
	public List<Recipe> findByTag2(String tag2);
	public List<Recipe> findByTag1AndTag2(String tag1, String tag2);
	public List<Recipe> allRecipes();
	public Recipe updateRecipe(Recipe r);
	public boolean deleteRecipe(Recipe r);
	
	
	
}
