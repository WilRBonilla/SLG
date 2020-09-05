package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Ingredient;
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


	@Override
	public ShoppingListEntry getShoppingList(int id) {
		return slr.findById(id).get();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ShoppingListEntry> findByUser(Shopper shopper) {
		return (List<ShoppingListEntry>) slr.findByUser(shopper);

	}

	@Override
	public List<ShoppingListEntry> updateShoppingList(List<ShoppingListEntry> change) {		
		return (List<ShoppingListEntry>) slr.saveAll(change);
	}
	@Override
	public ShoppingListEntry updateListEntry(ShoppingListEntry change) {		
		return (ShoppingListEntry) slr.save(change);
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
	

	@Override
	public ShoppingListEntry addListEntry(ShoppingListEntry sl) {
		
		System.out.println(sl);
		ShoppingListEntry exists= new ShoppingListEntry();
		try {
		exists=slr.findByUserAndIngredient(sl.getUser(), sl.getIngredient());
			System.out.println("update entry");
			sl.setEntry_id(exists.getEntry_id());
			sl.setAmount(exists.getAmount()+sl.getAmount());
			return updateListEntry(sl);
		}catch(Exception e) {
			
			System.out.println("new entry");
			System.out.println(sl);
			return slr.save(sl);
		}
	}

	@Override
	public ShoppingListEntry findByUserAndIngredient(Shopper s, Ingredient i) {
		return slr.findByUserAndIngredient(s, i);
	}




}
