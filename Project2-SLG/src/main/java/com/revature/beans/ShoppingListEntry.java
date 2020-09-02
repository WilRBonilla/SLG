package com.revature.beans;


import java.util.List;

/*
 * I think this table/object is very confusing.
 */
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Shopping_List")
public class ShoppingListEntry {
	@Id
	@GeneratedValue
	private int entry_id;
	
	@OneToOne
	@JoinColumn(name = "ing_id")
	private Ingredient ingredient;
	@OneToOne
	@JoinColumn(name = "u_id")
	private Shopper user;
	private int amount;

	
	
	public ShoppingListEntry() {
		super();
	}
	
	public ShoppingListEntry(Ingredient ingredient, Shopper user, int amount) {
		super();
		this.ingredient = ingredient;
		this.user = user;
		this.amount = amount;
		
	}

	public ShoppingListEntry(int entry_id, Ingredient ingredient, Shopper user, int amount) {
		super();
		this.entry_id = entry_id;
		this.ingredient = ingredient;
		this.user = user;
		this.amount = amount;
	}

	public int getEntry_id() {
		return entry_id;
	}

	public void setEntry_id(int entry_id) {
		this.entry_id = entry_id;
	}

	public Ingredient getIngredient() {
		return ingredient;
	}

	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}

	public Shopper getUser() {
		return user;
	}

	public void setUser(Shopper user) {
		this.user = user;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + entry_id;
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ShoppingListEntry other = (ShoppingListEntry) obj;
		if (amount != other.amount)
			return false;
		if (entry_id != other.entry_id)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ShoppingListEntry [entry_id=" + entry_id + ", ingredient=" + ingredient + ", user=" + user + ", amount="
				+ amount + "]";
	}

	
	
	
	
}
