package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.ShoppingList;

@Repository
public interface ShoppingListRepository extends CrudRepository<ShoppingList, Integer> {

	public ShoppingList findByUser(int uid);
}
