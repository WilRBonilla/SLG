package com.revature.services;

import java.util.List;

import com.revature.beans.Pantry;

public interface PantryService {
	
	public Pantry addPantry(Pantry p);
	public Pantry findByP_id(int p_id);
	public Pantry findByU_id(int u_id);
	public Pantry updatePantry(Pantry p);
	public boolean deletePantry(Pantry p);

}
