package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Ingredient;
import com.revature.services.IngredientService;

@RestController
public class IngredientController {

	
	@Autowired
	IngredientService is;
	
	@RequestMapping(value="/ingredient", method=RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Ingredient addIngredient(@RequestBody Ingredient i) {
		System.out.println("inside add ingredient method inside Ingredient Controller");
		return is.addIngredient(i);
	}
	
	@GetMapping(value ="/ingredient", produces = "application/json")
	public List<Ingredient> allIngredients(){
		return is.getAllIngredients();
	}
	
	@GetMapping(value ="/ingredient/{ing_id}")
	public Ingredient getIngredient(@PathVariable("ing_id") int id){
		return is.getIngredient(id);
	}
	
	@GetMapping(value="/ingredient/search")
	public Ingredient findByName(String name) {
		return is.findByName(name);
	}
	
	@DeleteMapping(value ="/ingredient/{ing_id}")
	public boolean deleteIngredient(@PathVariable("ing_id") int id) {
		return is.deleteIngredient(is.getIngredient(id));
	}
	
	
	
	
	
}
