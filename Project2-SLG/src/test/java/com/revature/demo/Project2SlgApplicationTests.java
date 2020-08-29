package com.revature.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.revature.beans.Ingredient;
import com.revature.beans.Stock;
import com.revature.services.IngredientService;
import com.revature.services.IngredientServiceImpl;
import com.revature.services.StockService;
import com.revature.services.StockServiceImpl;

@SpringBootTest
@DataJpaTest
class Project2SlgApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	void testAddStock() {
		StockService ss = new StockServiceImpl();
		IngredientService is = new IngredientServiceImpl();
		Ingredient i = is.getIngredient(1);
		
		Stock s = new Stock();
		s.setS_id(1);
		s.setPrice(5);
		s.setAmount(20);
		s.setIngredient(i);
		assertEquals(s.toString(), ss.addStock(s).toString());
	}

}
