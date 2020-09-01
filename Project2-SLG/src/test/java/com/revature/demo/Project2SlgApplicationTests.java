package com.revature.demo;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.controllers.IngredientController;
import com.revature.repositories.IngredientRepository;
import com.revature.services.IngredientService;

@SpringBootTest
class Project2SlgApplicationTests {
	@Autowired 
	IngredientService is;

	@Autowired 
	IngredientRepository irp;
	
	@Autowired
	IngredientController ic;
	
	@Test
	void contextLoads() {
	}
	
	@Test
	void addIngredient() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.save(i)).thenReturn(i);
		Ingredient t = is.addIngredient(i);
		System.out.println(t);
		t.setIng_id(500);
		Assertions.assertEquals(i, t);
	}
	
	@Test
	void addIngredientController() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.save(i)).thenReturn(i);
		Ingredient t = ic.addIngredient(i);
		t.setIng_id(500);
		Assertions.assertEquals(i, t);
	}
	@Test
	void getIngredient() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.findByName(i.getName())).thenReturn(i);
		Ingredient t = is.findByName(i.getName());
		i.setIng_id(t.getIng_id());
		Assertions.assertEquals(i, t);
	}
	@Test
	void getIngredientController() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.findByName(i.getName())).thenReturn(i);
		Ingredient t = ic.findByName(i.getName());
		i.setIng_id(t.getIng_id());
		Assertions.assertEquals(i, t);
	}
	@Test
	void FindIngredientByID() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.findById(i.getIng_id())).thenReturn(Optional.of(i));
		Ingredient t = is.getIngredient(i.getIng_id());
		Assertions.assertEquals(i, t);
	}
	@Test
	void FindIngredientByIDController() {
		Ingredient i = new Ingredient(500,"test","test");
		IngredientRepository ir = Mockito.mock(IngredientRepository.class);
		Mockito.when(ir.findById(i.getIng_id())).thenReturn(Optional.of(i));
		Ingredient t = ic.getIngredient(i.getIng_id());
		Assertions.assertEquals(i, t);
	}
	@Test
	void GetAllIngredients() {
		Assertions.assertEquals(irp.findAll(), is.getAllIngredients());		
	}
	@Test
	void GetAllIngredientsController() {
		Assertions.assertEquals(irp.findAll(), ic.allIngredients());
	}
	@Test
	void DeleteIngredient() {
		Ingredient i = new Ingredient(500,"test","test");
		assertTrue(ic.deleteIngredient(500));
	}
	@Test
	void DeleteIngredientFalse() {
		Ingredient i = new Ingredient(500,"test","test");
		assertFalse(ic.deleteIngredient(800));
	}
	

}
