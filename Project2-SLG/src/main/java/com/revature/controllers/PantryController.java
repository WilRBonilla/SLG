package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Pantry;
import com.revature.services.PantryService;

@RestController
public class PantryController {

	@Autowired
	PantryService ps;
	
	@RequestMapping(value = "/pantry", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public List<Pantry> addPantry(@RequestBody List<Pantry> pantries) {
		return ps.addPantry(pantries);
	}
	
	@PostMapping(value = "/singlepantry", consumes = "application/json")
	public Pantry addSingleItem(@RequestBody Pantry p) {
		return ps.addPantry(p);
	}
	
	@GetMapping(value = "/pantry/{id}", produces = "application/json")
	public Pantry findByP_id(@PathVariable("id") int p_id) {
		return ps.findByP_id(p_id);
	}
	
	@PutMapping(value = "/pantry/{id}", consumes = "application/json")
	public Pantry updatePantry(@PathVariable("id") int id, @RequestBody Pantry p) {
		p.setP_id(id);
		System.out.println(p);
		return ps.updatePantry(p);
	}
	
	@DeleteMapping(value = "/pantry/{id}")
	public boolean deletePantry(@PathVariable("id") int id) {
		return ps.deletePantry(ps.findByP_id(id));
	}
	
	@GetMapping(value = "/pantry/user/{id}", produces = "application/json")
	public List<Pantry> findAllByShopper(@PathVariable("id") int u_id) {
		return ps.findAllByShopper(u_id);
	}
}
