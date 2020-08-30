package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer>{

	public Recipe findByTitle(String title);
	public List<Recipe> findAllByCuisine(String cuisine);
	public List<Recipe> findAllByTag1(String tag1);
	public List<Recipe> findAllByTag2(String tag2);
	public List<Recipe> findAllByTag1AndTag2(String tag1, String tag2);
	public List<Recipe> findAllByCuisineAndTag1(String cuisine, String tag1);
	public List<Recipe> findAllByCuisineAndTag2(String cuisine, String tag2);
	public List<Recipe> findAllByCuisineAndTag1AndTag2(String cuisine, String tag1, String tag2);
	
	
}
