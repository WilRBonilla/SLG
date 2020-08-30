package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Shopper;
import com.revature.beans.ShoppingListEntry;
import com.revature.repositories.ShoppingListRepository;

@Service
public class ShoppingListServiceImpl implements ShoppingListService {
	@Autowired
	ShoppingListRepository slr;

	
	@Override
	public List<ShoppingListEntry> addShoppingList(List<ShoppingListEntry> sl) {
		return (List<ShoppingListEntry>) slr.saveAll(sl);
	}

	// This method is a little weird conceptually. We'll have to return
	// An Arraylist of shopping list items, right?
	@Override
	public ShoppingListEntry getShoppingList(int id) {
		return slr.findById(id).get();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ShoppingListEntry> findByUser(Shopper u) {
		return (List<ShoppingListEntry>) slr.findByUser(u.getU_id());
	}

	// This method doesn't really do anything.
	@Override
	public List<ShoppingListEntry> updateShoppingList(List<ShoppingListEntry> change) {		
		return (List<ShoppingListEntry>) slr.saveAll(change);
	}

	@Override
	public boolean deleteShoppingList(ShoppingListEntry sl) {
		try {
			slr.delete(sl);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

}
