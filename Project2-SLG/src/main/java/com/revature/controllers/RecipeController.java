package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Recipe;
import com.revature.services.RecipeService;


@RestController
public class RecipeController {


	@Autowired
	 RecipeService rs;
	
	@GetMapping(value = "/recipe", produces = "application/json")
	public List<Recipe> allRecipes() {
		return rs.allRecipes();

	}
	@GetMapping(value = "/recipe/{title}")
	public Recipe findByTitle(@PathVariable("title") String title) {
		return rs.findByTitle(title);

	}
	@GetMapping(value = "/recipe/search")
	public List<Recipe> findRecipe(@RequestParam(required = false) String tag1, @RequestParam(required = false) String tag2) {
		
		if(tag1 != null && tag2 != null) {
			return rs.findByTag1AndTag2(tag1, tag2);
		} else if(tag1 != null) {
			return rs.findByTag1(tag1);
		} else if(tag2 != null) {
			return rs.findByTag2(tag2);
		} else {
			return null;
		}
	}
	
}
