package com.peakiron1.ecms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.peakiron1.ecms.Entity.BookingEntity;
import com.peakiron1.ecms.Service.BookingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	BookingService bookServ; 
	
	
	//CREATE
	@CrossOrigin
	@PostMapping("/addBooking")
	public BookingEntity addBooking(@RequestBody BookingEntity booked) {
		return bookServ.addBooking(booked); 
	}
	
	
	//READ
	@CrossOrigin
	@GetMapping("/getAllBooking")
	public List<BookingEntity> getAllBooking(){return bookServ.getAllBooking();}
	
	
	//UPDATE
	@CrossOrigin
	@PutMapping("/updateBooking")
	public BookingEntity updateBooking(@RequestParam int bookingid, @RequestBody BookingEntity updateBooking) throws Exception{
		return bookServ.updateBookingSchedule(bookingid, updateBooking); 
	}
	
	//DELETE
	
	@CrossOrigin
	@DeleteMapping("/cancelBooking/{bookingid}")
	public String cancelBooking(@PathVariable int bookingid) {
		return bookServ.cancelBooking(bookingid);
	}
	
}
