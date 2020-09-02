package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Note;
import com.revature.beans.Shopper;
import com.revature.repositories.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService{
	
	@Autowired
	NoteRepository noteRepository;
	
	@Override
	public Note addNote(Note note) {
		return noteRepository.save(note);
	}

	@Override
	public boolean deleteNote(Note note) {
		try {
			noteRepository.delete(note);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public Note getNote(int n_id) {
		return noteRepository.findById(n_id).get();
	}

	@Override
	public Note findByShopper(int u_id) {
		return noteRepository.findByShopper(u_id);
	}

	
	
	
	

}
