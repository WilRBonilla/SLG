package com.revature.services;

import java.util.List;


import com.revature.beans.Shopper;


public interface ShopperService {
	
	public Shopper addShopper(Shopper s);
	public List<Shopper> getAllShoppers();
	public Shopper getShopper(int id);
	public Shopper findByUsernameAndPassword(String username, String password);
	public Shopper updateShopper(Shopper change);
	public boolean deleteShopper(Shopper s);
	
	
	
	

}
