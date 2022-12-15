package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.BookingEntity;
import com.peakiron1.ecms.Repository.BookingRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository brepo; 
	
	//GET
	public List<BookingEntity> getAllBooking(){return brepo.findAll();}
	
	//POST
	public BookingEntity addBooking(BookingEntity book) {
		return brepo.save(book); 
	}
	
	//UPDATE
	
	public BookingEntity updateBookingSchedule(int bookingid, BookingEntity updateBooking) throws Exception{
		BookingEntity booking = new BookingEntity(); 
		
		try {
			booking = brepo.findById(bookingid).get(); 
			
			
			//update details
			
			booking.setDateAndTime(updateBooking.getDateAndTime());
			
			//save details
			return brepo.save(booking);
		}catch(NoSuchElementException nex) {
			throw new Exception("Booking with ID Number" + bookingid + "does not exist!"); 
		}
	}
	
	//DELETE
	public String cancelBooking(int bookingid) {
		String msg; 
		
		if(brepo.findById(bookingid)!=null) {
			brepo.deleteById(bookingid); 
			msg = "Booking with ID " + bookingid + " is successfully deleted"; 
		}else {
			msg = "Booking with ID " + bookingid + " is not found";
		}
		
		return msg; 
	}
	
}
