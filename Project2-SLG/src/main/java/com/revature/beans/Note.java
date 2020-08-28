package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Note {

	@Id
	private int n_id;
	private String add_notes;
	public Note() {
		super();
	}
	public Note(String add_notes) {
		super();
		this.add_notes = add_notes;
	}
	public Note(int n_id, String add_notes) {
		super();
		this.n_id = n_id;
		this.add_notes = add_notes;
	}
	public int getN_id() {
		return n_id;
	}
	public void setN_id(int n_id) {
		this.n_id = n_id;
	}
	public String getAdd_notes() {
		return add_notes;
	}
	public void setAdd_notes(String add_notes) {
		this.add_notes = add_notes;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((add_notes == null) ? 0 : add_notes.hashCode());
		result = prime * result + n_id;
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
		Note other = (Note) obj;
		if (add_notes == null) {
			if (other.add_notes != null)
				return false;
		} else if (!add_notes.equals(other.add_notes))
			return false;
		if (n_id != other.n_id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Note [n_id=" + n_id + ", add_notes=" + add_notes + "]";
	}
	
	
}
