package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Ingredient;

public interface IngredientRepository extends CrudRepository<Ingredient, Integer>{

}
