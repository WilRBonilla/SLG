package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PostMapping(value = "/login")
	public Shopper login(@RequestBody Shopper s) {
		Shopper user = ss.findByUsernameAndPassword(s.getUsername(), s.getPassword());
		if(user != null)
			return user;
		else
			return new Shopper();
	}
	@GetMapping(value="/shopper/{id}")
	public Shopper getShopper(@PathVariable("id") int id) {
		
		return ss.getShopper(id);
	}
	
	@PutMapping(value = "/shopper/{id}", consumes = "application/json")
	public Shopper updateShopper(@PathVariable("id") int id, @RequestBody Shopper change) {
		return ss.updateShopper(change);
	}
	
	@DeleteMapping(value = "/shopper/{id}")
	public boolean deleteShopper(@PathVariable("id") int id){
		Shopper s = this.getShopper(id);
		return ss.deleteShopper(s);
	}
	

}
