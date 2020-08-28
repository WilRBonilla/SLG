package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Shopping_List")
public class ShoppingList {
	@Id
	@GeneratedValue
	private int entry_id;
	@OneToMany
	@JoinColumn(name = "ing_id")
	private Ingredient ingredient;
	@OneToOne
	@JoinColumn(name = "u_id")
	private Shopper user;
	private int amount;
	@OneToOne
	@JoinColumn(name = "n_id")
	private Note note;
	
}
