package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Ingredient;
import com.revature.beans.Stock;
import com.revature.controllers.IngredientController;
import com.revature.controllers.StockController;

@SpringBootTest
class StockControllerTests {
	
	@Autowired
	StockController sc;
	
	@Autowired
	IngredientController ic;
	

	@Test
	public void addStock() {
		Ingredient ingredient = ic.getIngredient(1);
		
		Stock stock = sc.addStock(new Stock(0, ingredient, 0, 0));
		
		assertEquals(0, stock.getAmount());
		
		sc.removeStock(stock.getS_id());
	}
	
	@Test
	public void getStock() {
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Stock stock = sc.addStock(new Stock(0, ingredient, 0, 0));
		
		assertEquals(stock.getS_id(), sc.getStock(stock.getS_id()).getS_id());
		
		sc.removeStock(stock.getS_id());
		
	}
	
	@Test
	public void updateStock() {
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Stock stock = sc.addStock(new Stock(0, ingredient, 0, 0));
		
		stock.setAmount(1);
		
		assertEquals(stock.getAmount(), sc.updateStock(stock.getS_id(), stock).getAmount());
		
	}
	
	@Test
	public void removeStock() {
		
		Ingredient ingredient = ic.getIngredient(1);
		
		Stock stock = sc.addStock(new Stock(0, ingredient, 0, 0));
		
		
		assertTrue(sc.removeStock(stock.getS_id()));
	}

}
