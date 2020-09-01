package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Recipe {
	
	@Id
	@GeneratedValue
	private int r_id;
	private String title;
	private String cuisine;
	private String tag1;
	private String tag2;
	public Recipe() {
		super();
	}
	public Recipe(String title, String cuisine, String tag1, String tag2) {
		super();
		this.title = title;
		this.cuisine = cuisine;
		this.tag1 = tag1;
		this.tag2 = tag2;
	}
	public Recipe(int r_id, String title, String cuisine, String tag1, String tag2) {
		super();
		this.r_id = r_id;
		this.title = title;
		this.cuisine = cuisine;
		this.tag1 = tag1;
		this.tag2 = tag2;
	}
	
	
	public Recipe(String cuisine, String tag1, String tag2) {
		super();
		this.cuisine = cuisine;
		this.tag1 = tag1;
		this.tag2 = tag2;
	}
	public int getR_id() {
		return r_id;
	}
	public void setR_id(int r_id) {
		this.r_id = r_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCuisine() {
		return cuisine;
	}
	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}
	public String getTag1() {
		return tag1;
	}
	public void setTag1(String tag1) {
		this.tag1 = tag1;
	}
	public String getTag2() {
		return tag2;
	}
	public void setTag2(String tag2) {
		this.tag2 = tag2;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cuisine == null) ? 0 : cuisine.hashCode());
		result = prime * result + r_id;
		result = prime * result + ((tag1 == null) ? 0 : tag1.hashCode());
		result = prime * result + ((tag2 == null) ? 0 : tag2.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
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
		Recipe other = (Recipe) obj;
		if (cuisine == null) {
			if (other.cuisine != null)
				return false;
		} else if (!cuisine.equals(other.cuisine))
			return false;
		if (r_id != other.r_id)
			return false;
		if (tag1 == null) {
			if (other.tag1 != null)
				return false;
		} else if (!tag1.equals(other.tag1))
			return false;
		if (tag2 == null) {
			if (other.tag2 != null)
				return false;
		} else if (!tag2.equals(other.tag2))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Recipe [r_id=" + r_id + ", title=" + title + ", cuisine=" + cuisine + ", tag1=" + tag1 + ", tag2="
				+ tag2 + "]";
	}
	
	
	
	
	
	

}
