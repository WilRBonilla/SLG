package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Stock;

public interface StockRepository extends CrudRepository<Stock, Integer>{

}
