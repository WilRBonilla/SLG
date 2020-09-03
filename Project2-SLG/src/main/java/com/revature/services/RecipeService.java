package com.revature.services;

import java.util.List;

import com.revature.beans.Recipe;

public interface RecipeService {

	public Recipe addRecipe(Recipe r);
	public Recipe getRecipe(int id);
	public Recipe findByTitle(String title);
	public List<Recipe> findByCuisine(String cuisine);
	public List<Recipe> findByCuisineAndTag1(String cuisine, String tag1);
	public List<Recipe> findByCuisineAndTag1AndTag2(String cuisine, String tag1, String tag2);
	public List<Recipe> allRecipes();
	public Recipe updateRecipe(Recipe r);
	public boolean deleteRecipe(Recipe r);
	
}

//Pretty sure these are not needed anymore but leaving them for now just in case
//	Maybe we'll end up needing some of it for Admin functionality

//public List<Recipe> findByTag1(String tag1);
//public List<Recipe> findByTag2(String tag2);
//public List<Recipe> findByTag1AndTag2(String tag1, String tag2);
//public List<Recipe> findByCuisineAndTag2(String cuisine, String tag2);