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

import com.peakiron1.ecms.Entity.CustomerEntity;
import com.peakiron1.ecms.Service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	CustomerService custServ;
	
	@CrossOrigin
	@PostMapping("/postCustomer")
	public CustomerEntity insertCustomer(@RequestBody CustomerEntity customer) { return custServ.addCustomer(customer); } 
	
	@GetMapping("/getAll")
	public List<CustomerEntity> getAllCustomers(){ return custServ.getAllCustomers(); }
	
	@GetMapping("/getByFirstName")
	public CustomerEntity findById(@RequestParam int id) {return custServ.findById(id); }
	
	@PutMapping("/update")
	public CustomerEntity updateCustomer(@RequestParam int id, @RequestBody CustomerEntity newCustomerDetails) throws Exception{ return custServ.updateCustomerDetails(id, newCustomerDetails); }
	
	@DeleteMapping("/deleteCustomer/{id}")
	public String deleteCustomer(@PathVariable int id) {
		return custServ.deleteCustomer(id);
	}
	
	@PutMapping("/updateBooking")
	public CustomerEntity addBookingsToSite(@RequestParam int customerId, @RequestParam int bookingId) {
		return custServ.addBookingsToSite(customerId, bookingId);
	}
	
	@PutMapping("/updateSites")
	public CustomerEntity addCustomersToSite(@RequestParam int customerId, @RequestParam int siteId) {
		return custServ.addCustomersToSite(customerId, siteId);
	}
}

