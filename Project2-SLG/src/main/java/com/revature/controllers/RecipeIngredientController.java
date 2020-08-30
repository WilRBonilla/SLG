package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeIngredient;
import com.revature.services.RecipeIngredientService;

@RestController
public class RecipeIngredientController {
	
	@Autowired
	RecipeIngredientService recipeIngredientService;
	
	@RequestMapping(value = "/recipeingredient", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public RecipeIngredient addRecipeIngredient(@RequestBody RecipeIngredient recipeIngredient) {
		
		return recipeIngredientService.addRecipeIngredient(recipeIngredient);
	}
	
	@GetMapping(value = "/recipeingredient/{recipe}", produces = "application/json")
	public List<RecipeIngredient> getRecipeIngredients(@PathVariable("recipe") Recipe recipe) {
		
		return recipeIngredientService.findAllByRecipe(recipe);
		
	}
	
	@RequestMapping(value = "/recipeingredient/{id}", consumes = "application/json")
	public RecipeIngredient updateRecipeIngredient(@PathVariable("id") int id, @RequestBody RecipeIngredient recipeIngredient) {
		recipeIngredient.setRing_id(id);
		return recipeIngredientService.updateRecipeIngredient(recipeIngredient);
	}
	
	@DeleteMapping(value = "/recipeingredient/{id}")
	public boolean deleteRecipeIngredient(@PathVariable("id") int ring_id) {
		return recipeIngredientService.deleteRecipeIngredient(recipeIngredientService.getRecipeIngredient(ring_id));
	}
}
