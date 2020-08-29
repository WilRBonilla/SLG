package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Stock;
import com.revature.repositories.StockRepository;

@Service
public class StockServiceImpl implements StockService{
	
	@Autowired
	StockRepository sr;

	@Override
	public Stock addStock(Stock s) {
		return sr.save(s);
	}

	@Override
	public Stock getStock(int id) {
		return sr.findById(id).get();
	}

	@Override
	public Stock updateStock(Stock change) {
		return sr.save(change);
	}

}
