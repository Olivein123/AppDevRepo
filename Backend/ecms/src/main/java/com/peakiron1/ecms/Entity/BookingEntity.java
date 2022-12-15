package com.peakiron1.ecms.Entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_bookings")
public class BookingEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingid; 
	private LocalDateTime dateAndTime; 
	
	public BookingEntity() {}

	public BookingEntity(int bookingid, LocalDateTime dateAndTime) {
		super();
		this.dateAndTime = dateAndTime;
		this.bookingid = bookingid; 
	}

	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public LocalDateTime getDateAndTime() {
		return dateAndTime;
	}

	public void setDateAndTime(LocalDateTime dateAndTime) {
		this.dateAndTime = dateAndTime;
	};
	
	
}
