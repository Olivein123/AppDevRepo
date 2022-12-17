package com.peakiron1.ecms.Entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_vehicle")
public class VehicleEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicle_id;
	
	private String model;
	private String platenum;
	private String type;
	 
	@ManyToOne
	@JoinColumn(name = "id")
	CustomerEntity customer;
	
	public VehicleEntity() {}
	
	
	public VehicleEntity(int vehicle_id, String model, String platenum, String type) {
		super();
		this.vehicle_id = vehicle_id;
		this.model = model;
		this.platenum = platenum;
		this.type = type;
	}


	public int getId() {
		return vehicle_id;
	}
	public void setId(int id) {
		this.vehicle_id = id;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getPlatenum() {
		return platenum;
	}
	public void setPlatenum(String platenum) {
		this.platenum = platenum;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

}