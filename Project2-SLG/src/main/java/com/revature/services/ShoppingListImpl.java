package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.ShoppingList;
import com.revature.repositories.ShoppingListRepository;

@Service
public class ShoppingListImpl implements ShoppingListService {
	@Autowired
	ShoppingListRepository slr;

	@Override
	public ShoppingList addShoppingList(ShoppingList sl) {
		return slr.save(sl);
	}

	// This method is a little weird conceptually. We'll have to return
	// An Arraylist of shopping list items, right?
	@Override
	public ShoppingList getShoppingList(int id) {
		return slr.findById(id).get();
	}

	@Override
	public ShoppingList findByUser(int uid) {
		return slr.findByUser(uid);
	}

	@Override
	public ShoppingList updateShoppingList(ShoppingList change) {
		return slr.save(change);
	}

	@Override
	public boolean deleteShoppingList(ShoppingList sl) {
		try {
			slr.delete(sl);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

}
