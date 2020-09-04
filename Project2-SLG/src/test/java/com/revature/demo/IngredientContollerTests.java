package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.controllers.IngredientController;

@SpringBootTest
class IngredientContollerTests {

	@Autowired
	IngredientController ic;
	
	@Test
	public void addIngredient() {
		Ingredient ingredient = ic.addIngredient(new Ingredient(10000, "test", "test"));
		
		assertEquals("test", ingredient.getName());
		
		ic.deleteIngredient(ingredient.getIng_id());
	}
	
	@Test
	public void allIngredients() {
		assertFalse(ic.allIngredients().isEmpty());
	}
	
	@Test
	public void getIngredient( ) {
		
		Ingredient ingredient = ic.addIngredient(new Ingredient(10000, "test", "test"));
		
		
		assertEquals(10000, ingredient.getIng_id());
		
		ic.deleteIngredient(ingredient.getIng_id());
	}
	
	@Test
	public void findByName() {
		Ingredient ingredient = ic.addIngredient(new Ingredient(10000, "test1", "test1"));
	
		assertEquals("test1", ic.findByName(ingredient.getName()).getName());
		
		ic.deleteIngredient(ingredient.getIng_id());
	}
	
	@Test
	public void deleteIngredient() {
		Ingredient ingredient = ic.addIngredient(new Ingredient(10000, "test", "test"));
		assertTrue(ic.deleteIngredient(ingredient.getIng_id()));
	}

}
