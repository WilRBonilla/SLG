package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Ingredient;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Integer>{
	
	public Ingredient findByName(String Name);
}
