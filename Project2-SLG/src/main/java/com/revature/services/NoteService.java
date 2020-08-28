package com.revature.services;

import com.revature.beans.Note;

public interface NoteService {
	
	public Note addNote(Note note);
	public boolean deleteNote(Note note);
	public Note getNote(int n_id);

}
