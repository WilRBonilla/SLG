package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.revature.services.ShoppingListService;

@RestController
public class ShoppingListController {
	
	@Autowired
	ShoppingListService shoppingListService;
	
	

}
