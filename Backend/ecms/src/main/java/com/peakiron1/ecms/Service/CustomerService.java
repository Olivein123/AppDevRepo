package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.BookingEntity;
import com.peakiron1.ecms.Entity.CustomerEntity;
import com.peakiron1.ecms.Entity.EmissionEntity;
import com.peakiron1.ecms.Repository.BookingRepository;
import com.peakiron1.ecms.Repository.CustomerRepository;
import com.peakiron1.ecms.Repository.EmissionRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository crepo;
	
	@Autowired
	BookingRepository brepo;
	
	@Autowired
	EmissionRepository erepo;
	
	public CustomerEntity addCustomer(CustomerEntity customer) { return crepo.save(customer); }
	
	public List<CustomerEntity> getAllCustomers(){ return crepo.findAll(); }
	
	public CustomerEntity findById(int id) {
		if(crepo.findById(id) != null) {
			return crepo.findById(id).get();			
		}else {
			return null;
		}
	}
	
	public CustomerEntity updateCustomerDetails(int id, CustomerEntity newCustomer) throws Exception{
		CustomerEntity customer = new CustomerEntity();
		
		try {
			customer = crepo.findById(id).get();
			
			//update details
			customer.setFirstname(newCustomer.getFirstname());
			customer.setMiddlename(newCustomer.getMiddlename());
			customer.setLastname(newCustomer.getLastname());
			customer.setAddress(newCustomer.getAddress());			
			
			//save details
			return crepo.save(customer);
		}catch(NoSuchElementException nex) {
			throw new Exception("Customer with ID Number " + id + " does not exist!"); 
		}
	}
	
	public String deleteCustomer(int id) {
		String msg;
		if(crepo.findById(id)!=null) {
			crepo.deleteById(id);
			msg = "Customer with ID :" + id + " is successfully deleted";
		}
		else {
			msg = "Customer with ID :" + id + " is not found";
		}
		return msg;
	}
	public CustomerEntity addBookingsToSite(int customerId, int bookingId) {
		BookingEntity booking = new BookingEntity();
		CustomerEntity customer; 
		
		customer = crepo.findById(customerId).get();
		booking = brepo.findById(bookingId).get();

		customer.getBookings().add(booking);
		
		return crepo.save(customer);
	}
	
	public CustomerEntity addCustomersToSite(int customerId, int siteId) {
		EmissionEntity site = new EmissionEntity();
		CustomerEntity customer; 
		
		customer = crepo.findById(customerId).get();
		site = erepo.findById(siteId).get();

		customer.getSites().add(site);
		
		return crepo.save(customer);
	}
	
	public String cancelBookingsToSite(int customerId, int bookingId) {
		BookingEntity booking = new BookingEntity();
		CustomerEntity customer; 
		String msg; 
		
		customer = crepo.findById(customerId).get();
		booking = brepo.findById(bookingId).get();
		
		if(booking!=null) {
			brepo.deleteById(bookingId);
			
			msg = "Customer ID: " + customerId + "has cancelled Booking ID: " + bookingId;
		}else {
			msg = "Error";
		}
		
		return msg; 
	}
	

}
