package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.beans.Pantry;

@Repository
public interface PantryRepository extends CrudRepository<Pantry, Integer>{

	public List<Pantry> findAllByShopper(int shopper);
}
