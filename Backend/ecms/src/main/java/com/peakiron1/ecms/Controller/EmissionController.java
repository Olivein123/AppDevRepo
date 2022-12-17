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

import com.peakiron1.ecms.Entity.EmissionEntity;
import com.peakiron1.ecms.Service.EmissionService;



@RestController
@RequestMapping("/site")


public class EmissionController {
	
	@Autowired
	EmissionService emserv;  
	
	//C
	@CrossOrigin
	@PostMapping("/postEmissionSite")
	public EmissionEntity insertEmissionSite(@RequestBody EmissionEntity site) {
		return emserv.insertEmissionSite(site); 
	}
	
	
	
	//R
	@GetMapping("/getAllSites")
	public List<EmissionEntity> getAllSites(){
		return emserv.getAllSites(); 
	}
	
	@GetMapping("/getByAddress")
	public EmissionEntity findBySiteaddress(@RequestParam String siteaddress) {
		return emserv.findByAddress(siteaddress); 
	}
	
	
	//U
	
	@PutMapping("/putEmissionSite")
	public EmissionEntity putEmissionSite(@RequestParam int siteid, @RequestBody EmissionEntity newEmissionDetails) throws Exception{
		return emserv.putEmissionSite(siteid, newEmissionDetails); 
	}
	
	
	//D
	
	@DeleteMapping("/deleteEmissionSite/{id}")
	public String deleteEmissionSite(@PathVariable int siteid) {
		return emserv.deleteEmissionSite(siteid);
	}
	
	
}
