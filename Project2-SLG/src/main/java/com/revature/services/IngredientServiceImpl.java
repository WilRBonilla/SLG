package com.revature.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Ingredient;
import com.revature.repositories.IngredientRepository;

@Service
public class IngredientServiceImpl implements IngredientService {

	@Autowired
	IngredientRepository ir;
	
	public Ingredient addIngredient(Ingredient i) {
		return ir.save(i);
	}
	
	@Override
	public List<Ingredient> getAllIngredients() {
		return (List<Ingredient>) ir.findAll();
	}

	public Ingredient getIngredient(int ing_id) {
		return ir.findById(ing_id).get();
	}

	public Ingredient findByName(String name) {
		return ir.findByName(name);
	}
	
	public boolean deleteIngredient(Ingredient i) {
		try {
			ir.delete(i);
			return true;
		}catch(Exception e) {
			return false;
		}
	}

	

}
