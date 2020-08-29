package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.revature.services.PantryService;

@RestController
public class PantryController {

	@Autowired
	PantryService ps;
}
