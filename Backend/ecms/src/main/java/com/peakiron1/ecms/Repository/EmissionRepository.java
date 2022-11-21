package com.peakiron1.ecms.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.peakiron1.ecms.Entity.EmissionEntity;




@Repository
public interface EmissionRepository extends JpaRepository<EmissionEntity, Integer>{
	EmissionEntity findBySiteaddress(String siteaddress); 
}
