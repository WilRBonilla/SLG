package com.revature.demo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.revature.beans.Shopper;
import com.revature.controllers.ShopperController;

@SpringBootTest
class ShopperControllerTests {
	
	@Autowired
	ShopperController sc;
	

	@Test
	public void addShopper() {
		
		Shopper shopper = new Shopper("test", "test", "test", "test");
		
		Shopper addedShopper = sc.addShopper(shopper);
		
		assertEquals("test", addedShopper.getF_name());

		sc.deleteShopper(addedShopper.getU_id());
	}
	
	@Test
	public void login() {
		
		Shopper shopper = new Shopper("test1", "test1", "test1", "test1");
		
		Shopper addedShopper = sc.addShopper(shopper);
		
		assertEquals("test1", sc.login(addedShopper).getF_name());
		
		sc.deleteShopper(addedShopper.getU_id());
	}
	
	@Test
	public void updateShopper() {
		Shopper shopper = new Shopper("test", "test", "test", "test");
		
		Shopper addedShopper = sc.addShopper(shopper);
		
		shopper.setF_name("test1");
		
		assertEquals("test1", sc.updateShopper(addedShopper.getU_id(), shopper).getF_name());
		
		sc.deleteShopper(addedShopper.getU_id());
	}	
	@Test
	public void deleteShopper() {
		
		Shopper shopper = new Shopper("test", "test", "test", "test");
		
		Shopper addedShopper = sc.addShopper(shopper);
		
		assertTrue(sc.deleteShopper(addedShopper.getU_id()));
		
	}

}
