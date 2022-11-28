package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.VehicleEntity;
import com.peakiron1.ecms.Repository.VehicleRepository;

@Service
public class VehicleService {

	@Autowired
	VehicleRepository vRepo;
	
	//CREATE
	public VehicleEntity insertVehicle(VehicleEntity vehicle) {
		return vRepo.save(vehicle);
	}
	
	//READ
	public List<VehicleEntity> getAllVehicles(){
		return vRepo.findAll();
	}
	
	//UPDATE
	public VehicleEntity putVehicle(int vehicleId, VehicleEntity newVehicleDetails) throws Exception{
		VehicleEntity vehicle = new VehicleEntity();
		try {
			vehicle = vRepo.findById(vehicleId).get();
			vehicle.setModel(newVehicleDetails.getModel());
			vehicle.setPlatenum(newVehicleDetails.getPlatenum());
			vehicle.setVehicletypeid(newVehicleDetails.getVehicletypeid());
			return vRepo.save(vehicle);
		}catch(NoSuchElementException nsee) {
			throw new Exception("Vehicle of Id = " + vehicleId + " does not exist!");
		}
	}
	
	//DELETE
	public String deleteVehicle(int id) {
		String msg;
		if(vRepo.findById(id)!=null) {
			vRepo.deleteById(id);
			msg = "Vehicle of Id = " + id + " is successfully deleted!";
		}else {
			msg = "Vehicle of Id = " + id + " is NOT found!";
		}
		return msg;
	}
}
