package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.beans.Pantry;
import com.revature.beans.Shopper;
import com.revature.controllers.IngredientController;
import com.revature.controllers.PantryController;
import com.revature.controllers.ShopperController;

import antlr.collections.List;

@SpringBootTest
class PantryControllerTests {
	
	@Autowired
	PantryController pc;
	
	@Autowired
	ShopperController sc;
	
	@Autowired
	IngredientController ic;
	
	@Test
	public void addPantry() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Pantry pantry = new Pantry(0, shopper, ingredient, 0);
		
		ArrayList<Pantry> pList = new ArrayList<Pantry>();
		
		pList.add(pantry);
		
		ArrayList<Pantry> returnedList = (ArrayList<Pantry>) pc.addPantry(pList);
		
		assertEquals(pList.get(0).getAmount(), returnedList.get(0).getAmount());
		
		pc.deletePantry(returnedList.get(0).getP_id());
	}
	
	@Test
	public void addSingleItem() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Pantry pantry = new Pantry(0, shopper, ingredient, 0);
		
		Pantry addPantry = pc.addSingleItem(pantry);
		
		assertEquals(pantry.getAmount(), addPantry.getAmount());
		
		pc.deletePantry(addPantry.getP_id());
	}
	
	@Test
	public void findByP_id() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Pantry pantry = new Pantry(0, shopper, ingredient, 0);
		
		Pantry addPantry = pc.addSingleItem(pantry);
		
		assertEquals(addPantry.getP_id(), pc.findByP_id(addPantry.getP_id()).getP_id());
		
		pc.deletePantry(addPantry.getP_id());
		
	}
	
	@Test
	public void updatePantry() {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Pantry pantry = new Pantry(0, shopper, ingredient, 0);
		
		Pantry addPantry = pc.addSingleItem(pantry);
		
		pantry.setAmount(1);
		
		assertEquals(1, pc.updatePantry(addPantry.getP_id(), pantry).getAmount());
		
		pc.deletePantry(addPantry.getP_id());

	}
	
	@Test
	public void deletePantry() {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Pantry pantry = new Pantry(0, shopper, ingredient, 0);
		
		Pantry addPantry = pc.addSingleItem(pantry);
		
		assertTrue(pc.deletePantry(addPantry.getP_id()));
		
	}
	
	

	

}
