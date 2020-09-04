package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Shopper;
import com.revature.repositories.ShopperRepository;

@Service
public class ShopperServiceImpl implements ShopperService{

	@Autowired
	ShopperRepository sr;
	
	@Override
	public Shopper addShopper(Shopper s) {
		
		return sr.save(s);
	}

	@Override
	public List<Shopper> getAllShoppers() {
		return (List<Shopper>) sr.findAll();
	}

	@Override
	public Shopper getShopper(int id) {
		
		return sr.findById(id).get();
	}

	//Login method
	@Override
	public Shopper findByUsernameAndPassword(String username, String password) {
		Shopper s= sr.findByUsernameAndPassword(username, password);
		if (s != null) {
			return s;
		}
		return null;
	}

	@Override
	public Shopper updateShopper(Shopper change) {
		return sr.save(change);
	}

	@Override
	public boolean deleteShopper(Shopper s) {
		try {
			sr.delete(s);
			return true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}

}
