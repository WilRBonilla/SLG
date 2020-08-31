package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Ingredient {

	@Id
//	@SequenceGenerator(name="ing_seq", initialValue=50, allocationSize=200)
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ing_seq")
//	@GeneratedValue
	private int ing_id;
	private String name;
	private String units;
	
	public Ingredient() {
		super();
	}
	public Ingredient(String name, String units) {
		super();
		this.name = name;
		this.units = units;
	}
	public Ingredient(int ing_id, String name, String units) {
		super();
		this.ing_id = ing_id;
		this.name = name;
		this.units = units;
	}
	public int getIng_id() {
		return ing_id;
	}
	public void setIng_id(int ing_id) {
		this.ing_id = ing_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUnits() {
		return units;
	}
	public void setUnits(String units) {
		this.units = units;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ing_id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((units == null) ? 0 : units.hashCode());
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
		Ingredient other = (Ingredient) obj;
		if (ing_id != other.ing_id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (units == null) {
			if (other.units != null)
				return false;
		} else if (!units.equals(other.units))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Ingredient [ing_id=" + ing_id + ", name=" + name + ", units=" + units + "]";
	}
	
	
	
}
