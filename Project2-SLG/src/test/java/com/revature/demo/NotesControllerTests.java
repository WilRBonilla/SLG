package com.revature.demo;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.hamcrest.Matcher;
import org.hibernate.dialect.Cache71Dialect;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.revature.beans.Note;
import com.revature.beans.Shopper;
import com.revature.controllers.NoteController;
import com.revature.controllers.ShopperController;
import com.revature.repositories.NoteRepository;
import com.revature.services.NoteService;

@SpringBootTest
public class NotesControllerTests {
	
	
	@Autowired
	NoteController nc;

	@Autowired
	ShopperController sc;
	

	@Test
	public void addNote() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Note note = new Note(0, "test", shopper);
		
		Note addNote = nc.addNote(note);
		
		assertEquals("test", addNote.getAdd_notes());
		
		nc.deleteNote(addNote.getN_id());
		
	}
	
	@Test
	public void deleteNote() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Note note = new Note(0, "test", shopper);
		
		Note addNote = nc.addNote(note);
		
		assertTrue(nc.deleteNote(addNote.getN_id()));
		
		
	}
	
	@Test
	public void getNote() throws Exception {
		
		Shopper shopper = sc.getShopper(916);
		
		Note note = new Note(0, "test", shopper);
		
		Note addNote = nc.addNote(note);
		
		assertEquals(addNote.getN_id(), nc.getNote(addNote.getN_id()).getN_id());
		
		nc.deleteNote(addNote.getN_id());
	}
	
//	@Test
//	public void getUserNote() throws Exception {
//		
//		Shopper shopper = sc.getShopper(916);
//		
//		Note note = new Note(0, "test", shopper);
//		
//		Note addNote = nc.addNote(note);
//		
//		assertEquals(shopper.getU_id(),nc.getUserNote(shopper.getU_id()).getShopper().getU_id());
//		
//		nc.deleteNote(addNote.getN_id());
//		
//	}
}