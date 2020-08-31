package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.ShoppingListEntry;

@Repository
public interface ShoppingListRepository extends CrudRepository<ShoppingListEntry, Integer> {

	public ShoppingListEntry findByUser(int u_id);
}
