package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Recipe;
import com.revature.controllers.RecipeController;

@SpringBootTest
class RecipeControllerTests {
	
	@Autowired
	RecipeController rc;
	
	

	@Test
	public void addRecipe() {
		Recipe recipe = new Recipe("test", "test", "test", "test");
		System.out.println(recipe);
		Recipe addedRecipe = rc.addRecipe(recipe);
		System.out.println(addedRecipe);
		
		assertEquals(recipe.getCuisine(), addedRecipe.getCuisine());
		
		rc.deleteRecipe(addedRecipe.getR_id());
	}
	
	@Test
	public void deleteRecipe() {
		Recipe recipe = new Recipe(1000, "test", "test", "test", "test");
		Recipe addedRecipe = rc.addRecipe(recipe);
		assertTrue(rc.deleteRecipe(addedRecipe.getR_id()));
	}
	
	@Test
	public void allRecipes() {
		assertFalse(rc.allRecipes().isEmpty());
	}
	
	@Test
	public void findByTitle() {
		
		Recipe recipe = new Recipe(1000, "test", "test", "test", "test");
		Recipe addedRecipe = rc.addRecipe(recipe);
		assertEquals("test", rc.findByTitle("test").getTitle());
		rc.deleteRecipe(addedRecipe.getR_id());
	}
	
	@Test
	public void findRecipe() {
		Recipe recipe = new Recipe(1000, "test", "test", "test", "test");
		Recipe addedRecipe = rc.addRecipe(recipe);
		assertFalse(rc.findRecipe("test", "test", "test").isEmpty());
		
		rc.deleteRecipe(addedRecipe.getR_id());
		
		
		
		Recipe recipe2 = new Recipe(1000, "test", "test", "test", "test");
		Recipe addedRecipe2 = rc.addRecipe(recipe2);
		assertFalse(rc.findRecipe("test", "test", null).isEmpty());
		
		rc.deleteRecipe(addedRecipe2.getR_id());
	}
	
	
	
}
