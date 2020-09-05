package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Shopper;
import com.revature.beans.ShoppingListEntry;
import com.revature.services.ShopperService;
import com.revature.services.ShoppingListService;

@RestController
public class ShoppingListEntryController {

	@Autowired
	ShoppingListService sle;
	@Autowired
	ShopperService ss;
	
	@PostMapping(value ="/addShoppingList", consumes ="application/json", produces ="application/json")
	public List<ShoppingListEntry> addShoppingList(@RequestBody List<ShoppingListEntry> sl){
		return sle.addShoppingList(sl);
		
	}
	@PostMapping(value ="/addShoppingList/{id}", consumes ="application/json", produces ="application/json")
	public ShoppingListEntry addToListbyU_id(@PathVariable("id") int id, @RequestBody ShoppingListEntry sl){
			sl.setUser(ss.getShopper(id));
		return sle.addListEntry(sl);
	}
	
	@GetMapping(value = "/getShoppingListEntry/{id}")
	public ShoppingListEntry getShoppingList(@PathVariable("id") int id){
		
		return sle.getShoppingList(id);
	}
	@GetMapping(value = "/shoppingList/{uid}", produces = "application/json")
	public List<ShoppingListEntry> findByUser(@PathVariable("uid") int uid){
		Shopper s = new Shopper();
		s.setU_id(uid);
		return sle.findByUser(s);
	}
	
	@PutMapping(value = "/shoppingList/{uid}", consumes = "application/json", produces = "application/json")
	public List<ShoppingListEntry> updateShoppingList(@PathVariable int uid, @RequestBody List<ShoppingListEntry> change){
		// This just ensures that uid is correct on each entry
		for(ShoppingListEntry s : change) {
			s.getUser().setU_id(uid);
		}
		return sle.updateShoppingList(change);
	}
	@PutMapping(value = "/updateList/{uid}", consumes = "application/json", produces = "application/json")
	public List<ShoppingListEntry> updateList(@PathVariable int uid, @RequestBody ShoppingListEntry change){
			ShoppingListEntry changeLE= sle.getShoppingList(change.getEntry_id());
			change.setUser(changeLE.getUser());
			List<ShoppingListEntry> upList= new ArrayList<ShoppingListEntry>();
			upList.add(change);
			return sle.updateShoppingList(upList);
	}
	
	@DeleteMapping(value = "/shoppingListEntry/{id}")
	public boolean deleteEntry(@PathVariable("id") int id) {
		return sle.deleteShoppingList(id);
	}
	
}
