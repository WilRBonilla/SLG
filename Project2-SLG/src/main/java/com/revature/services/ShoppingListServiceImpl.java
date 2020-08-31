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
	public List<ShoppingListEntry> findByUser(int uid) {
		return (List<ShoppingListEntry>) slr.findByUser(uid);
	}

	@Override
	public List<ShoppingListEntry> updateShoppingList(List<ShoppingListEntry> change) {		
		return (List<ShoppingListEntry>) slr.saveAll(change);
	}

	@Override
	public boolean deleteShoppingList(int id) {
		try {
			slr.deleteById(id);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

}
