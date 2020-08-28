package com.revature.repositories;

import org.springframework.data.repository.CrudRepository;

import com.revature.beans.Note;

public interface NoteRepository extends CrudRepository<Note, Integer>{
	
	

}
