package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.EmissionEntity;
import com.peakiron1.ecms.Repository.EmissionRepository;




@Service
public class EmissionService {

	@Autowired
	EmissionRepository emrep; 
	
	public EmissionEntity insertEmissionSite(EmissionEntity site) {
		return emrep.save(site); 
	}
	
	
	public List<EmissionEntity> getAllSites(){
		return emrep.findAll(); 
	}
	
	public EmissionEntity findByAddress(String siteaddress) {
		if(emrep.findBySiteaddress(siteaddress)!=null) {
			return emrep.findBySiteaddress(siteaddress); 
		}else {
			return null; 
		}
	}
	
	
	public EmissionEntity putEmissionSite(int id, EmissionEntity newEmissionDetails) throws Exception{
		
		EmissionEntity emsite = new EmissionEntity(); 
		
		try {
			emsite = emrep.findById(id).get();
			
			emsite.setSitename(newEmissionDetails.getSitename());
			emsite.setSiteaddress(newEmissionDetails.getSiteaddress());
			emsite.setContactnumber(newEmissionDetails.getContactnumber());
			
			return emrep.save(emsite); 
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + " does not exist!"); 
		}
	}
	
	public String deleteEmissionSite(int id) {
		String msg; 
		
		if(emrep.findById(id)!=null) {
			emrep.deleteById(id);
			msg = "Site ID Number " + id + " is successfully deleted!";
		}else {
			msg = "Site ID Number " + id + " is not found!";
		}
		
		return msg; 
	}
}
