package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


// CHECK OBJECT DEPENDENCIES w/ SPRING
@Entity
public class Pantry {
	
	@Id
	@GeneratedValue
	private int p_id;
	@OneToOne
	@JoinColumn(name = "u_id")
	private Shopper shopper;
	@OneToMany
	@JoinColumn(name = "ing_id")
	private Ingredient ingredient;
	private int amount;
	public Pantry() {
		super();
	}
	public Pantry(Shopper shopper, Ingredient ingredient, int amount) {
		super();
		this.shopper = shopper;
		this.ingredient = ingredient;
		this.amount = amount;
	}
	public Pantry(int p_id, Shopper shopper, Ingredient ingredient, int amount) {
		super();
		this.p_id = p_id;
		this.shopper = shopper;
		this.ingredient = ingredient;
		this.amount = amount;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
		result = prime * result + p_id;
		result = prime * result + ((shopper == null) ? 0 : shopper.hashCode());
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
		Pantry other = (Pantry) obj;
		if (amount != other.amount)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		if (p_id != other.p_id)
			return false;
		if (shopper == null) {
			if (other.shopper != null)
				return false;
		} else if (!shopper.equals(other.shopper))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Pantry [p_id=" + p_id + ", shopper=" + shopper + ", ingredient=" + ingredient + ", amount=" + amount
				+ "]";
	}
	
	
	
	

}
