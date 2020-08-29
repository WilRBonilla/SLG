package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Shopper;
import com.revature.services.ShopperService;

@RestController
public class ShopperController {
	@Autowired
	ShopperService ss;
	
	@RequestMapping(value = "/shopper", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Shopper addShopper(@RequestBody Shopper s) {
		return ss.addShopper(s);
	}
	
	@GetMapping(value = "/login")
	public Shopper login(@RequestBody Shopper s) {
		Shopper user = ss.findByUsernameAndPassword(s.getUsername(), s.getPassword());
		if(user != null)
			return user;
		else
			return new Shopper();
	}
	
	

}
