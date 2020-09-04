package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.beans.Shopper;
import com.revature.beans.ShoppingListEntry;
import com.revature.controllers.IngredientController;
import com.revature.controllers.ShopperController;
import com.revature.controllers.ShoppingListEntryController;

import antlr.collections.List;

@SpringBootTest
class ShoppingListEntryControllerTests {

	@Autowired
	ShoppingListEntryController slec;
	
	@Autowired
	IngredientController ic;
	
	@Autowired
	ShopperController sc;
	
	@Test
	public void addShoppingList() {
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = new ShoppingListEntry(0, ingredient, shopper, 0);
		
		 ArrayList<ShoppingListEntry> entriesList = new ArrayList<ShoppingListEntry>();
		 
		 entriesList.add(entry);
		 
		 ArrayList<ShoppingListEntry> list = (ArrayList<ShoppingListEntry>) slec.addShoppingList(entriesList);
	
		 assertFalse(list.isEmpty());
		 
		slec.deleteEntry(list.get(0).getEntry_id());
	}
	
	@Test
	public void addToListByU_id() {
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = slec.addToListbyU_id(916, new ShoppingListEntry(0, ingredient, shopper, 0));
		
		assertEquals(916, entry.getUser().getU_id());
		
		slec.deleteEntry(entry.getEntry_id());
		
	}
	
	@Test
	public void getShoppingList() {
		
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = slec.addToListbyU_id(916, new ShoppingListEntry(0, ingredient, shopper, 0));
		
		assertEquals(entry.getEntry_id(), slec.getShoppingList(entry.getEntry_id()).getEntry_id());
		
		slec.deleteEntry(entry.getEntry_id());
		
	}
	
	@Test
	public void findByUser () {
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = new ShoppingListEntry(0, ingredient, shopper, 0);
		
		ArrayList<ShoppingListEntry> entriesList = new ArrayList<ShoppingListEntry>();
		 
		entriesList.add(entry);
		 
		ArrayList<ShoppingListEntry> list = (ArrayList<ShoppingListEntry>) slec.addShoppingList(entriesList);
	
		assertEquals(list.get(0).getUser().getU_id(), slec.findByUser(shopper.getU_id()).get(0).getUser().getU_id()); 
	
		slec.deleteEntry(entry.getEntry_id());
	}
	
	@Test
	public void updateShoppingList() {
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = new ShoppingListEntry(0, ingredient, shopper, 0);
		
		ArrayList<ShoppingListEntry> entriesList = new ArrayList<ShoppingListEntry>();
		 
		entriesList.add(entry);
		
		ArrayList<ShoppingListEntry> list = (ArrayList<ShoppingListEntry>) slec.addShoppingList(entriesList);
		
		entriesList.get(0).setAmount(10);
		
		assertEquals(entriesList.get(0).getAmount(), slec.updateShoppingList(list.get(0).getUser().getU_id(), entriesList).get(0).getAmount());
		
		slec.deleteEntry(entry.getEntry_id());
	}
	
	@Test
	public void deleteEntry() {
		Shopper shopper = sc.getShopper(916);
		
		Ingredient ingredient = ic.getIngredient(1);
		
		ShoppingListEntry entry = slec.addToListbyU_id(916, new ShoppingListEntry(0, ingredient, shopper, 0));
		
		assertTrue(slec.deleteEntry(entry.getEntry_id()));
	}
		 


}
