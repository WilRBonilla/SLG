package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.beans.Recipe;
import com.revature.beans.RecipeIngredient;
import com.revature.controllers.IngredientController;
import com.revature.controllers.RecipeController;
import com.revature.controllers.RecipeIngredientController;

@SpringBootTest
class RecipeIngredientControllerTests {
	
	@Autowired
	RecipeIngredientController ric;
	
	@Autowired
	IngredientController ic;
	
	@Autowired
	RecipeController rc;

	@Test
	public void addRecipeIngredient() {

		Ingredient ingredient = ic.getIngredient(1);
		
		Recipe recipe = new Recipe(0, "test", "test", "test", "test");
		
		Recipe addrecipe = rc.addRecipe(recipe);
		
		RecipeIngredient recipeIngredient = new RecipeIngredient(ingredient, addrecipe, 0);
		
		RecipeIngredient addRecipeIngredient = ric.addRecipeIngredient(recipeIngredient);

		assertEquals(addrecipe.getR_id(), addRecipeIngredient.getRecipe().getR_id());
		
		ric.deleteRecipeIngredient(addRecipeIngredient.getRing_id());
		
		rc.deleteRecipe(addrecipe.getR_id());
		
	}
	
	@Test
	public void getRecipeIngredients() {
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Recipe recipe = new Recipe(0, "test", "test", "test", "test");
		
		Recipe addrecipe = rc.addRecipe(recipe);
		
		RecipeIngredient recipeIngredient = new RecipeIngredient(ingredient, addrecipe, 0);
		
		RecipeIngredient addRecipeIngredient = ric.addRecipeIngredient(recipeIngredient);
		
		assertFalse(ric.getRecipeIngredients(addrecipe.getR_id()).isEmpty());
		
		ric.deleteRecipeIngredient(addRecipeIngredient.getRing_id());
		
		rc.deleteRecipe(addrecipe.getR_id());

	}
	
	@Test
	public void updateRecipeIngredient() {
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Recipe recipe = new Recipe(0, "test", "test", "test", "test");
		
		Recipe addrecipe = rc.addRecipe(recipe);
		
		RecipeIngredient recipeIngredient = new RecipeIngredient(ingredient, addrecipe, 0);
		
		RecipeIngredient addRecipeIngredient = ric.addRecipeIngredient(recipeIngredient);
		
		recipeIngredient.setRing_id(addRecipeIngredient.getRing_id());
		recipeIngredient.setAmount(1);
		
		assertEquals(1, ric.updateRecipeIngredient(addRecipeIngredient.getRing_id(), recipeIngredient).getAmount());
		
		ric.deleteRecipeIngredient(addRecipeIngredient.getRing_id());
		
		rc.deleteRecipe(addrecipe.getR_id());
		
	}
	
	@Test
	public void deleteRecipeIngredient() {
		Ingredient ingredient = ic.getIngredient(1);
		
		Recipe recipe = new Recipe(0, "test", "test", "test", "test");
		
		Recipe addrecipe = rc.addRecipe(recipe);
		
		RecipeIngredient recipeIngredient = new RecipeIngredient(ingredient, addrecipe, 0);
		
		RecipeIngredient addRecipeIngredient = ric.addRecipeIngredient(recipeIngredient);
		
		assertTrue(ric.deleteRecipeIngredient(addRecipeIngredient.getRing_id()));
		
		rc.deleteRecipe(addrecipe.getR_id());
		
	}
}
