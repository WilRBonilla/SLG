package com.revature.services;

import com.revature.beans.Stock;

public interface StockService {
	
	public Stock addStock(Stock s);
	public Stock getStock(int id);
	public Stock updateStock(Stock change);
	public boolean deleteStock(Stock s);

}
