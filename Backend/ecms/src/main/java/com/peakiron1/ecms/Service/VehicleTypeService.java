package com.peakiron1.ecms.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.peakiron1.ecms.Entity.VehicleTypeEntity;
import com.peakiron1.ecms.Repository.VehicleTypeRepository;

@Service
public class VehicleTypeService {

	@Autowired
	VehicleTypeRepository vRepo;
	
	//CREATE
	public VehicleTypeEntity insertVehicleType(VehicleTypeEntity vtype) {
		return vRepo.save(vtype);
	}
	
	//READ All
	public List<VehicleTypeEntity> getAllVehicleTypes(){
		return vRepo.findAll();
	}
	
	//UPDATE
	public VehicleTypeEntity putType(int vehicleTypeId, VehicleTypeEntity newType)throws Exception{
		VehicleTypeEntity vType = new VehicleTypeEntity();
		try {
			vType = vRepo.findById(vehicleTypeId).get();
			vType.setName(newType.getName());
			return vRepo.save(vType);
		}catch(NoSuchElementException nsee) {
			throw new Exception("Vehicle Type of Id = " + vehicleTypeId + " does not exist!");
		}
	}
	
	//DELETE
	public String deleteVehicleType(int id) {
		String msg;
		if(vRepo.findById(id)!=null) {
			vRepo.deleteById(id);
			msg = "Vehicle Type of Id = " + id + " is successfully deleted!";
		}else {
			msg = "Vehicle Type of Id = " + id + " is NOT found!";
		}
		return msg;
	}
}
