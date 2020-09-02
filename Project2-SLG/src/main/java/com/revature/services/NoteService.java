package com.revature.services;

import com.revature.beans.Note;
import com.revature.beans.Shopper;

public interface NoteService {
	
	public Note addNote(Note note);
	public boolean deleteNote(Note note);
	public Note getNote(int n_id);
	public Note findByShopper(int u_id);

}
