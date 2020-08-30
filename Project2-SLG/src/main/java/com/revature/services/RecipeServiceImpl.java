package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.repositories.RecipeRepository;

@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	RecipeRepository rr;

	public Recipe addRecipe(Recipe r) {
		return rr.save(r);
	}

	public List<Recipe> allRecipes() {
		return (List<Recipe>) rr.findAll();
	}

	public Recipe updateRecipe(Recipe r) {
		return rr.save(r);
	}

	public boolean deleteRecipe(Recipe r) {
		try {
			rr.delete(r);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Recipe findByTitle(String title) {
		return rr.findByTitle(title);
	}

	@Override
	public List<Recipe> findByCuisine(String cuisine) {
		return rr.findAllByCuisine(cuisine);
	}

	@Override
	public List<Recipe> findByTag1(String tag1) {
		return rr.findAllByTag1(tag1);
	}

	@Override
	public List<Recipe> findByTag2(String tag2) {
		return rr.findAllByTag2(tag2);
	}

	@Override
	public List<Recipe> findByTag1AndTag2(String tag1, String tag2) {
		return rr.findAllByTag1AndTag2(tag1, tag2);
	}

	@Override
	public List<Recipe> findByCuisineAndTag1(String cuisine, String tag1) {
		return rr.findAllByCuisineAndTag1(cuisine, tag1);
	}

	@Override
	public List<Recipe> findByCuisineAndTag2(String cuisine, String tag2) {
		return rr.findAllByCuisineAndTag2(cuisine, tag2);
	}

	@Override
	public List<Recipe> findByCuisineAndTag1AndTag2(String cuisine, String tag1, String tag2) {
		return rr.findAllByCuisineAndTag1AndTag2(cuisine,tag1, tag2);
	}
}
