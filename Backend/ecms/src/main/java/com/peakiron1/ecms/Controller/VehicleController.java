package com.peakiron1.ecms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.peakiron1.ecms.Entity.VehicleEntity;
import com.peakiron1.ecms.Service.VehicleService;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

	@Autowired
	VehicleService vServ;
	
	//CREATE
	@PostMapping("/postVehicle")
	public VehicleEntity insertVehicle(@RequestBody VehicleEntity vehicle) {
		return vServ.insertVehicle(vehicle);
	}
	//READ
	@GetMapping("/getAllVehicles")
	public List<VehicleEntity> getAllVehicles(){
		return vServ.getAllVehicles();
	}
	
	//READBYID
	@GetMapping("/getById")
	public VehicleEntity getVehicleById(@RequestParam int id) {
		return vServ.getVehicleById(id);
	}
		
	//READ BY MODEL
	public List<VehicleEntity> findByModel(@RequestParam String model){
		return vServ.findByModel(model);
	}
		
	//READ BY PLATENUMBER
	public VehicleEntity findByPlatenum(@RequestParam String platenum) {
		return vServ.findByPlatenum(platenum);
	}
	
	@GetMapping("/type")
	//READ BY VEHICLE TYPE
	public List<VehicleEntity> findByType(@RequestParam String type){
		return vServ.findByType(type);
	}
	
	//UPDATE
	@PutMapping("/putVehicle")
	public VehicleEntity putVehicle(@RequestParam int vehicleId, @RequestBody VehicleEntity newVehicle) throws Exception{
		return vServ.putVehicle(vehicleId, newVehicle);
	}
	//DELETE
	@DeleteMapping("/deleteVehicle/{id}")
	public String deleteVehicle(@PathVariable int id) {
		return vServ.deleteVehicle(id);
	}
}
