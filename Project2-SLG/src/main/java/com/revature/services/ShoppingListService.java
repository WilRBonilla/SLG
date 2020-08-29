package com.revature.services;

import java.util.List;

import com.revature.beans.Shopper;
import com.revature.beans.ShoppingListEntry;

/*
 * Business logic here will probably need to revisited
 */
public interface ShoppingListService {
	
	public List<ShoppingListEntry> addShoppingList(List<ShoppingListEntry> sl);
	// Thoughts: we don't need to get shopping list by its own id, but do need it for user's id.
	public ShoppingListEntry getShoppingList(int id);
	public List<ShoppingListEntry> findByUser(Shopper u);
	public boolean updateShoppingList(List<ShoppingListEntry> change);
	public boolean deleteShoppingList(ShoppingListEntry sl);

}