package com.revature.services;

import java.util.List;

import com.revature.beans.Pantry;

public interface PantryService {
	
	public List<Pantry> addPantry(List<Pantry> p);
	public Pantry findByP_id(int p_id);
	public List<Pantry> findAllByShopper(int u_id);
	public Pantry updatePantry(Pantry p);
	public boolean deletePantry(Pantry p);
	public Pantry addPantry(Pantry p);

}
