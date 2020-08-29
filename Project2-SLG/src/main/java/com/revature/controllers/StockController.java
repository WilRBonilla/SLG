package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Stock;
import com.revature.services.StockService;

@RestController
public class StockController {
	
	@Autowired
	StockService ss;
	
	@RequestMapping(value ="/stock", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Stock addStock(@RequestBody Stock s) {
		return ss.addStock(s);
	}
	
	@GetMapping(value = "/stock/{id}")
	public Stock getStock(@PathVariable("id") int id) {
		return ss.getStock(id);
	}
	
	@PutMapping(value = "/stock/{id}", consumes = "application/json")
	public Stock updateStock(@PathVariable("id") int id, @RequestBody Stock change) {
		change.setS_id(id);
		return ss.updateStock(change);
	}

}
