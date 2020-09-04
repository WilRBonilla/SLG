package com.revature.demo;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.controllers.IngredientController;
import com.revature.repositories.IngredientRepository;
import com.revature.services.IngredientService;
import com.revature.services.IngredientServiceImpl;

@SpringBootTest
class Project2SlgApplicationTests {
	@Mock
	IngredientRepository ir;
	@InjectMocks
	IngredientServiceImpl is;

	Ingredient i = new Ingredient(500,"test","test");
	@Autowired 
	IngredientRepository irp;
	@Autowired
	IngredientController ic;
	@Autowired
	IngredientService isa;
	
	
	@Test
	void contextLoads() {
	}
	
	@Test
	void addIngredient() {
		Mockito.when(ir.save(i)).thenReturn(i);
		Ingredient t = is.addIngredient(i);
		Assertions.assertEquals(i, t);
	}
	
	@Test
	void addIngredientController() {
		Mockito.when(ir.save(i)).thenReturn(i);
		Ingredient t = ic.addIngredient(i);
		Assertions.assertEquals(i, t);
	}

	@Test
	void getIngredientByName() {
		Mockito.when(ir.findByName(i.getName())).thenReturn(i);
		Ingredient t = is.findByName(i.getName());
		Assertions.assertEquals(i, t);
	}
	
// 	@Test
// 	void getIngredientNameController() {
// 		Mockito.when(ir.findByName(i.getName())).thenReturn(i);
// 		Ingredient t = ic.findByName(i.getName());
// 		Assertions.assertEquals(i, t);
// 	}

	@Test
	void FindIngredientByIDController() {
		Mockito.when(ir.findById(i.getIng_id())).thenReturn(Optional.of(i));
		Ingredient t = ic.getIngredient(i.getIng_id());
		Assertions.assertEquals(i, t);
	}
	@Test
	void GetAllIngredients() {
		Assertions.assertEquals(irp.findAll(), isa.getAllIngredients());		
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

}
