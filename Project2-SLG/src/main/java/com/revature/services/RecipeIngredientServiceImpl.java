package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeIngredient;
import com.revature.repositories.RecipeIngredientRepository;

@Service
public class RecipeIngredientServiceImpl implements RecipeIngredientService {

	@Autowired
	RecipeIngredientRepository recipeIngredientRepository;
	
	@Override
	public RecipeIngredient addRecipeIngredient(RecipeIngredient recipeIngredient) {
		return recipeIngredientRepository.save(recipeIngredient);
	}

	@Override
	public RecipeIngredient updateRecipeIngredient(RecipeIngredient recipeIngredient) {
		return recipeIngredientRepository.save(recipeIngredient);
	}

	@Override
	public boolean deleteRecipeIngredient(RecipeIngredient recipeIngredient) {

		try {
			recipeIngredientRepository.delete(recipeIngredient);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public RecipeIngredient getRecipeIngredient(int ring_id) {
		return recipeIngredientRepository.findById(ring_id).get();
	}

	@Override
	public List<RecipeIngredient> findAllByRecipe(Recipe r) {
		return recipeIngredientRepository.findAllByRecipe(r);
	}

}
