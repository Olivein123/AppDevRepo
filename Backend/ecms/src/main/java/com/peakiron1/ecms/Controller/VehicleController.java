package com.peakiron1.ecms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.peakiron1.ecms.Entity.VehicleEntity;
import com.peakiron1.ecms.Service.VehicleService;

@Controller
@RequestMapping("/vehicle")
public class VehicleController {

	@Autowired
	VehicleService vServ;
	
	//CREATE
	@PostMapping("/postVehicle")
	public VehicleEntity insertVehicleType(@RequestBody VehicleEntity vehicle) {
		return vServ.insertVehicle(vehicle);
	}
	//READ
	@GetMapping("/getAllVehicles")
	public List<VehicleEntity> getAllVehicles(){
		return vServ.getAllVehicles();
	}
	//UPDATE
	@PutMapping("/putVehicle")
	public VehicleEntity putVehicleType(@RequestParam int vehicleId, @RequestBody VehicleEntity newVehicle) throws Exception{
		return vServ.putVehicle(vehicleId, newVehicle);
	}
	//DELETE
	public String deleteVehicleType(@PathVariable int id) {
		return vServ.deleteVehicle(id);
	}
}
