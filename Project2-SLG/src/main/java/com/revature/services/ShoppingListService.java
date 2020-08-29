package com.revature.services;

import java.util.List;

import com.revature.beans.ShoppingListEntry;

/*
 * Business logic here will probably need to revisited
 */
public interface ShoppingListService {
	
	public ShoppingListEntry addShoppingList(ShoppingListEntry sl);
	// Thoughts: we don't need to get shopping list by its own id, but do need it for user's id.
	public ShoppingListEntry getShoppingList(int id);
	public List<ShoppingListEntry> findByUser(int uid);
	public boolean updateShoppingList(ShoppingListEntry change);
	public boolean deleteShoppingList(ShoppingListEntry sl);

}
