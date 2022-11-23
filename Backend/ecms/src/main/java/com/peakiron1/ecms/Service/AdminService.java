package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.AdminEntity;
import com.peakiron1.ecms.Repository.AdminRepository;

@Service
public class AdminService {
	@Autowired 
	AdminRepository arepo;
	
	//insert Admin Records
	public AdminEntity insertAdmin(AdminEntity admin) {
		return arepo.save(admin);
	}
	
	//Read All Admin Records
	public List<AdminEntity> getAllAdmin(){
		return arepo.findAll();
	}
	
	//Read Admin Record by Name
	public AdminEntity findByName(String name) {
		if (arepo.findByName(name)!=null) {
			return arepo.findByName(name);
		}
		else {
			return null;
		}
	}
	
	//Update a Admin Record
	public AdminEntity putAdmin(int id, AdminEntity newAdminDetails) throws Exception{
		AdminEntity admin = new AdminEntity();
			
		try {
			admin = arepo.findById(id).get();
				
			admin.setName(newAdminDetails.getName());
			admin.setContactnumber(newAdminDetails.getContactnumber());
				
			return arepo.save(admin);
		}catch(NoSuchElementException nex) {
			throw new Exception("Admin ID "+id+" does not exist!");
		}
	}
	
	//Delete Admin Record
	public String deleteAdmin(int id) {
		String msg;
		if(arepo.findById(id)!=null) {
			arepo.deleteById(id);
			msg = "Admin ID " + id + " is successfully deleted";
		}
		else {
			msg = "Admin ID " + id + " is not found";
		}
		return msg;
	}
}
