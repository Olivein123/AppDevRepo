package com.peakiron1.ecms.Entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_bookings")
public class BookingEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingid; 
	private LocalDateTime dateAndTime; 
	
	
	//THERE CAN BE MANY BOOKINGS MADE BY A CUSTOMER
	@ManyToOne
	@JoinColumn(name="id")
	CustomerEntity customer;
	
	//THERE CAN BE MANY BOOKINGS IN A SITE
	@ManyToOne
	@JoinColumn(name="siteid")
	EmissionEntity sites;
	
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
