package com.revature.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Project2SlgApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	void testing() {
		int a = 5;
		int b = 5;
		Assertions.assertEquals(a, b);
	}

}
