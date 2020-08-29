package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer>{

	public Recipe findByTitle(String title);
	public List<Recipe> findByCuisine(String cuisine);
	public List<Recipe> findByTag1(String tag1);
	public List<Recipe> findByTag2(String tag2);
	public List<Recipe> findByTag1AndTag2(String tag1, String tag2);
	public List<Recipe> findByCuisineAndTag1(String cuisine, String tag1);
	public List<Recipe> findByCuisineAndTag2(String cuisine, String tag2);
	public List<Recipe> findByCuisineAndTag1AndTag2(String cuisine, String tag1, String tag2);
	
	
}
