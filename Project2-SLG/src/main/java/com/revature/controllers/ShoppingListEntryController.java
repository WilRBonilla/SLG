package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.ShoppingListEntry;
import com.revature.services.ShoppingListService;

@RestController
public class ShoppingListEntryController {

	@Autowired
	ShoppingListService sle;
	
	@PostMapping(value ="/addShoppingList", consumes ="application/json", produces ="application/json")
	public List<ShoppingListEntry> addShoppingList(List<ShoppingListEntry> sl){
		return sle.addShoppingList(sl);
	}
	
	@GetMapping(value = "/getShoppingListEntry/{id}")
	public ShoppingListEntry getShoppingList(@PathVariable("id") int id){
		
		return sle.getShoppingList(id);
	}
	@GetMapping(value = "/shoppingList/{uid}", produces = "application/json")
	public List<ShoppingListEntry> findByUser(@PathVariable("uid") int uid){
		return sle.findByUser(uid);
	}
	
	@PutMapping(value = "/shoppingList/{uid}", consumes = "application/json", produces = "application/json")
	public List<ShoppingListEntry> updateShoppingList(@PathVariable int uid, @RequestBody List<ShoppingListEntry> change){
		// This just ensures that uid is correct on each entry
		for(ShoppingListEntry s : change) {
			s.getUser().setU_id(uid);
		}
		return sle.updateShoppingList(change);
	}
	@DeleteMapping(value = "/shoppingListEntry/{id}")
	public boolean deleteEntry(@PathVariable("id") int id) {
		return sle.deleteShoppingList(id);
	}
	
}
