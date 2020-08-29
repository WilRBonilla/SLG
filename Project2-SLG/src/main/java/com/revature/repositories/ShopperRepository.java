package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Shopper;

@Repository
public interface ShopperRepository extends CrudRepository<Shopper, Integer>{
	public Shopper findByUsernameAndPassword(String Username, String password); //IDK If Spring Data can autowire this.
}
