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

import com.peakiron1.ecms.Entity.AdminEntity;
import com.peakiron1.ecms.Service.AdminService;
import com.peakiron1.ecms.Service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminService aserv;
	
	//Create/Insert Admin Record
	@PostMapping("/postAdmin")
	public AdminEntity insertAdmin(@RequestBody AdminEntity admin) {
		return aserv.insertAdmin(admin);
	}
	
	//Read All Admin Records
	@GetMapping("/getAllAdmin")
	public List<AdminEntity> getAllAdmin(){
		return aserv.getAllAdmin();
	}
	
	//Read Admin Records by Name
	@GetMapping("/getByName")
	public AdminEntity findByName(@RequestParam String name) {
		return aserv.findByName(name);
	}
	
	//Update a Admin Record
	@PutMapping("/putAdmin")
	public AdminEntity putAdmin(@RequestParam int id, @RequestBody AdminEntity newAdminDetails) throws Exception{
		return aserv.putAdmin(id, newAdminDetails);
	}
	
	//Delete Admin Record
	@DeleteMapping("/deleteAdmin/{id}")
	public String deleteAdmin(@PathVariable int id) {
		return aserv.deleteAdmin(id);
	}
	
}
