package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Recipe;
import com.revature.services.RecipeService;


@RestController
public class RecipeController {


	@Autowired
	 RecipeService rs;
	
	@PostMapping(value="/recipe", consumes = "application/json", produces = "application/json")
	public Recipe addRecipe(@RequestBody Recipe r) {
		System.out.println(r);
		return rs.addRecipe(r);
	}
	@DeleteMapping("/recipe/{id}")
	public boolean deleteRecipe(@PathVariable("id") int id) {
		return rs.deleteRecipe(rs.getRecipe(id));
	}
	
	@GetMapping(value = "/recipe", produces = "application/json")
	public List<Recipe> allRecipes() {
		return rs.allRecipes();

	}
	@GetMapping("/recipe/{title}")
	public Recipe findByTitle(@PathVariable("title") String title) {
		return rs.findByTitle(title);

	}

	@GetMapping("/recipe/search")
	public List<Recipe> findRecipe(@RequestParam(required = false) String cuisine, @RequestParam(required = false) String tag1, @RequestParam(required = false) String tag2) {
		
		if(cuisine != null && tag1 != null && tag2 != null) {
			return rs.findByCuisineAndTag1AndTag2(cuisine, tag1, tag2);
		} else if(cuisine !=null && tag1 != null && tag2 == null) {
			return rs.findByCuisineAndTag1(cuisine, tag1);
		} else if (cuisine != null && tag1 == null && tag2 == null) {
			return rs.findByCuisine(cuisine);
		} else {
			return null;
		}
	}
	
}

