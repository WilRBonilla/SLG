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
	
	public Recipe getRecipe(int id) {
		return rr.findById(id).get();
	}

	@Override
	public Recipe findByTitle(String title) {
		return rr.findByTitle(title);
	}

	@Override
	public List<Recipe> findByCuisine(String cuisine) {
		List<Recipe> lr1 =rr.findAllByTag1(cuisine);
		List<Recipe> lr2 =rr.findAllByTag2(cuisine);
		List<Recipe> lr3 =rr.findAllByCuisine(cuisine);
		lr1.addAll(lr2);
		lr1.addAll(lr3);
		return lr1;
	}


	@Override
	public List<Recipe> findByCuisineAndTag1(String cuisine, String tag1) {
		List<Recipe> lr1 =rr.findAllByCuisineAndTag1(cuisine, tag1);
		List<Recipe> lr2 =rr.findAllByCuisineAndTag1(tag1, cuisine);
		List<Recipe> lr3 =rr.findAllByCuisineAndTag2(cuisine, tag1);
		List<Recipe> lr4 =rr.findAllByCuisineAndTag2(tag1,cuisine);
		List<Recipe> lr5 =rr.findAllByTag1AndTag2(cuisine, tag1);
		List<Recipe> lr6 =rr.findAllByTag1AndTag2(tag1,cuisine);
		lr1.addAll(lr2);
		lr1.addAll(lr3);
		lr1.addAll(lr4);
		lr1.addAll(lr5);
		lr1.addAll(lr6);
		return lr1;
	}


	@Override
	public List<Recipe> findByCuisineAndTag1AndTag2(String cuisine, String tag1, String tag2) {
		List<Recipe> lr1 =rr.findAllByCuisineAndTag1AndTag2(cuisine,tag1, tag2);
		List<Recipe> lr2 =rr.findAllByCuisineAndTag1AndTag2(cuisine,tag2, tag1);
		List<Recipe> lr3 =rr.findAllByCuisineAndTag1AndTag2(tag2, tag1,cuisine);
		List<Recipe> lr4 =rr.findAllByCuisineAndTag1AndTag2(tag2,cuisine, tag1);
		List<Recipe> lr5 =rr.findAllByCuisineAndTag1AndTag2(tag1,cuisine,tag2);
		List<Recipe> lr6 =rr.findAllByCuisineAndTag1AndTag2(tag1,tag2, cuisine);
		lr1.addAll(lr2);
		lr1.addAll(lr3);
		lr1.addAll(lr4);
		lr1.addAll(lr5);
		lr1.addAll(lr6);
		return lr1;
	}
}


//	Pretty sure these are not needed anymore but leaving them for now just in case
//		Maybe we'll end up needing some of it for Admin functionality


//@Override
//public List<Recipe> findByTag1(String tag1) {
//	List<Recipe> lr1 =rr.findAllByTag1(tag1);
//	List<Recipe> lr2 =rr.findAllByTag2(tag1);
//	List<Recipe> lr3 =rr.findAllByCuisine(tag1);
//	lr1.addAll(lr2);
//	lr1.addAll(lr3);
//	return lr1;
//}
//
//@Override
//public List<Recipe> findByTag2(String tag2) {
//	List<Recipe> lr1 =rr.findAllByTag1(tag2);
//	List<Recipe> lr2 =rr.findAllByTag2(tag2);
//	List<Recipe> lr3 =rr.findAllByCuisine(tag2);
//	lr1.addAll(lr2);
//	lr1.addAll(lr3);
//	return lr1;
//}
//
//
//@Override
//public List<Recipe> findByTag1AndTag2(String tag1, String tag2) {
//	List<Recipe> lr1 =rr.findAllByTag1AndTag2(tag1, tag2);
//	List<Recipe> lr2 =rr.findAllByTag1AndTag2(tag2, tag1);
//	List<Recipe> lr3 =rr.findAllByCuisineAndTag1(tag2, tag1);
//	List<Recipe> lr4 =rr.findAllByCuisineAndTag2(tag1, tag2);
//	lr1.addAll(lr2);
//	lr1.addAll(lr3);
//	lr1.addAll(lr4);
//	return lr1;
//}
//@Override
//public List<Recipe> findByCuisineAndTag2(String cuisine, String tag2) {
//	List<Recipe> lr1 =rr.findAllByCuisineAndTag1(cuisine, tag2);
//	List<Recipe> lr2 =rr.findAllByCuisineAndTag2(cuisine, tag2);
//	lr1.addAll(lr2);
//	return lr1;
//} 