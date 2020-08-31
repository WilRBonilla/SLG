package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Pantry;
import com.revature.repositories.PantryRepository;

@Service
public class PantryServiceImpl implements PantryService{

	@Autowired
	PantryRepository pr;
	
	public List<Pantry> addPantry(List<Pantry> pantries) {
		return (List<Pantry>) pr.saveAll(pantries);
	}
	public Pantry findByP_id(int p_id) {
		return pr.findById(p_id).get();
	}
	public Pantry updatePantry(Pantry p) {
		return pr.save(p);
	}
	public boolean deletePantry(Pantry p) {
		try {
			
			pr.delete(p);
			return true;
		}catch(Exception e) {
			return false;
		}

	}
	@Override
	public List<Pantry> findAllByShopper(int u_id) {
		// TODO Auto-generated method stub
		return (List<Pantry>) pr.findAllByShopper(u_id);
	}
}
