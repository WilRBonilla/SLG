package com.revature.beans;


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
	public ShoppingList() {
		super();
	}
	
	public ShoppingList(Ingredient ingredient, Shopper user, int amount, Note note) {
		super();
		this.ingredient = ingredient;
		this.user = user;
		this.amount = amount;
		this.note = note;
	}

	public ShoppingList(int entry_id, Ingredient ingredient, Shopper user, int amount, Note note) {
		super();
		this.entry_id = entry_id;
		this.ingredient = ingredient;
		this.user = user;
		this.amount = amount;
		this.note = note;
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

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + entry_id;
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
		result = prime * result + ((note == null) ? 0 : note.hashCode());
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
		ShoppingList other = (ShoppingList) obj;
		if (amount != other.amount)
			return false;
		if (entry_id != other.entry_id)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		if (note == null) {
			if (other.note != null)
				return false;
		} else if (!note.equals(other.note))
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
		return "ShoppingList [entry_id=" + entry_id + ", ingredient=" + ingredient + ", user=" + user + ", amount="
				+ amount + ", note=" + note + "]";
	}
	
	
	
	
}
