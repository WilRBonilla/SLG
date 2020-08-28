package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Integer>{

}
