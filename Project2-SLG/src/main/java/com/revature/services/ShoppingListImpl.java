package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.ShoppingListEntry;
import com.revature.repositories.ShoppingListRepository;

@Service
public class ShoppingListImpl implements ShoppingListService {
	@Autowired
	ShoppingListRepository slr;

	@Override
	public ShoppingListEntry addShoppingList(ShoppingListEntry sl) {
		return slr.save(sl);
	}

	// This method is a little weird conceptually. We'll have to return
	// An Arraylist of shopping list items, right?
	@Override
	public ShoppingListEntry getShoppingList(int id) {
		return slr.findById(id).get();
	}

	@Override
	public ShoppingListEntry findByUser(int uid) {
		return slr.findByUser(uid);
	}

	@Override
	public ShoppingListEntry updateShoppingList(ShoppingListEntry change) {
		return slr.save(change);
	}

	@Override
	public boolean deleteShoppingList(ShoppingListEntry sl) {
		try {
			slr.delete(sl);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

}
