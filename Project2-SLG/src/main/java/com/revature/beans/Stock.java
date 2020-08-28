package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Stock {

	private int s_id;
	@OneToOne
	@JoinColumn(name = "ing_id")
	private Ingredient ingredient;
	private int amount;
	private int price;
	public Stock() {
		super();
	}
	public Stock(Ingredient ingredient, int amount, int price) {
		super();
		this.ingredient = ingredient;
		this.amount = amount;
		this.price = price;
	}
	public Stock(int s_id, Ingredient ingredient, int amount, int price) {
		super();
		this.s_id = s_id;
		this.ingredient = ingredient;
		this.amount = amount;
		this.price = price;
	}
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public Ingredient getIngredient() {
		return ingredient;
	}
	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
		result = prime * result + price;
		result = prime * result + s_id;
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
		Stock other = (Stock) obj;
		if (amount != other.amount)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		if (price != other.price)
			return false;
		if (s_id != other.s_id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Stock [s_id=" + s_id + ", ingredient=" + ingredient + ", amount=" + amount + ", price=" + price + "]";
	}
	
	
	
	
}
