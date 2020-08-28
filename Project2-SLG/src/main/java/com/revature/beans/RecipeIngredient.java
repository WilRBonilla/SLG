package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Recipe_Ingredient")
public class RecipeIngredient {

	@Id
	@GeneratedValue
	private int ring_id;
	@OneToOne
	@JoinColumn(name = "ring_id")
	private Ingredient ingredient;
	@ManyToOne
	@JoinColumn(name = "r_id")
	private Recipe recipe;
	private int amount;
	
	public RecipeIngredient() {
		super();
	}
	public RecipeIngredient(Ingredient ingredient, Recipe recipe, int amount) {
		super();
		this.ingredient = ingredient;
		this.recipe = recipe;
		this.amount = amount;
	}
	public RecipeIngredient(int ring_id, Ingredient ingredient, Recipe recipe, int amount) {
		super();
		this.ring_id = ring_id;
		this.ingredient = ingredient;
		this.recipe = recipe;
		this.amount = amount;
	}
	public int getRing_id() {
		return ring_id;
	}
	public void setRing_id(int ring_id) {
		this.ring_id = ring_id;
	}
	public Ingredient getIngredient() {
		return ingredient;
	}
	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}
	public Recipe getRecipe() {
		return recipe;
	}
	public void setRecipe(Recipe recipe) {
		this.recipe = recipe;
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
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
		result = prime * result + ((recipe == null) ? 0 : recipe.hashCode());
		result = prime * result + ring_id;
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
		RecipeIngredient other = (RecipeIngredient) obj;
		if (amount != other.amount)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		if (recipe == null) {
			if (other.recipe != null)
				return false;
		} else if (!recipe.equals(other.recipe))
			return false;
		if (ring_id != other.ring_id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "RecipeIngredient [ring_id=" + ring_id + ", ingredient=" + ingredient + ", recipe=" + recipe
				+ ", amount=" + amount + "]";
	}
	
	
	
}
