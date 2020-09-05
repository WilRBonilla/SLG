package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Ingredient;
import com.revature.beans.Shopper;
import com.revature.beans.ShoppingListEntry;

@Repository
public interface ShoppingListRepository extends CrudRepository<ShoppingListEntry, Integer> {

	public List<ShoppingListEntry> findByUser(Shopper shopper);
	public ShoppingListEntry findByUserAndIngredient(Shopper s, Ingredient i);
}
