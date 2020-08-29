package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Pantry;

public interface PantryRepository extends CrudRepository<Pantry, Integer>{

	public Pantry findByP_id(int p_id);
	public Pantry findByU_id(int u_id);
}
