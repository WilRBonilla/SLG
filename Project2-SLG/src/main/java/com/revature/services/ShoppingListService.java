package com.revature.services;

import com.revature.beans.ShoppingList;

/*
 * Business logic here will probably need to revisited
 */
public interface ShoppingListService {
	
	public ShoppingList addShoppingList(ShoppingList sl);
	// Thoughts: we don't need to get shopping list by its own id, but do need it for user's id.
	public ShoppingList getShoppingList(int id);
	public ShoppingList findByUser(int uid);
	public ShoppingList updateShoppingList(ShoppingList change);
	public boolean deleteShoppingList(ShoppingList sl);

}
