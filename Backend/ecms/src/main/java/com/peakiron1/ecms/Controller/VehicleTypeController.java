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

import com.peakiron1.ecms.Entity.VehicleTypeEntity;
import com.peakiron1.ecms.Service.VehicleTypeService;

@RestController
@RequestMapping("/type")
public class VehicleTypeController {

	@Autowired
	VehicleTypeService vtserv;
	
	//CREATE
	@PostMapping("/postVehicleType")
	public VehicleTypeEntity insertVehicleType(@RequestBody VehicleTypeEntity vtype) {
		return vtserv.insertVehicleType(vtype);
	}
	//READ
	@GetMapping("/getAllVehicleTypes")
	public List<VehicleTypeEntity> getAllVehicleTypes(){
		return vtserv.getAllVehicleTypes();
	}
	//UPDATE
	@PutMapping("/putVehicleType")
	public VehicleTypeEntity putVehicleType(@RequestParam int vTypeId, @RequestBody VehicleTypeEntity newType) throws Exception{
		return vtserv.putType(vTypeId, newType);
	}
	//DELETE
	@DeleteMapping("/deleteVehicleType/{id}")
	public String deleteVehicleType(@PathVariable int id) {
		return vtserv.deleteVehicleType(id);
	}
}
