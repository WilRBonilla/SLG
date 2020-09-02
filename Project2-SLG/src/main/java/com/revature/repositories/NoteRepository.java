package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Note;
import com.revature.beans.Shopper;

public interface NoteRepository extends CrudRepository<Note, Integer>{
	
	public Note findByShopper(int u_id);

}
