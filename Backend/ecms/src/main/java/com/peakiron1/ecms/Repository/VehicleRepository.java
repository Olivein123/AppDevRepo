package com.peakiron1.ecms.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.peakiron1.ecms.Entity.VehicleEntity;

@Repository
public interface VehicleRepository extends JpaRepository<VehicleEntity, Integer>{

	List<VehicleEntity> findByModel(String model);
	List<VehicleEntity> findByType(String typeid);
	VehicleEntity findByPlatenum(String platenum);
}
