package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Note;
import com.revature.services.NoteService;

@RestController
public class NoteController {
	
	@Autowired
	NoteService noteService;
	
	@RequestMapping(value = "/note", method = RequestMethod.POST, consumes = "application/json", produces = "application/json" )
	public Note addNote(@RequestBody Note note) {
		return noteService.addNote(note);
	}
	
	@DeleteMapping(value = "/note/{n_id}")
	public boolean deleteNote(@PathVariable("n_id") int n_id) {
		return noteService.deleteNote(noteService.getNote(n_id));
	}
	
	@GetMapping(value = "/note/{n_id}")
	public Note getNote(@PathVariable("n_id") int n_id) {
		return noteService.getNote(n_id);
	}
	@GetMapping(value = "/note/{u_id}")
	public Note getUserNote(@PathVariable("u_id") int u_id) {
		return noteService.findByShopper(u_id);
	}

}
