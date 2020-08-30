package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeIngredient;

@Repository
public interface RecipeIngredientRepository extends CrudRepository<RecipeIngredient, Integer>{
	
	public List<RecipeIngredient> findAllByRecipe(int r_id);

}
