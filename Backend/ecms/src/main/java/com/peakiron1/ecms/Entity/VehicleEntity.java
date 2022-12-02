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
	private String plate_num;
	private int vehicle_type_id;
	 
	@ManyToOne
	@JoinColumn(name = "id")
	CustomerEntity customer;
	
	public VehicleEntity() {}
	
	
	public VehicleEntity(int vehicle_id, String model, String platenum, int vehicletypeid) {
		super();
		this.vehicle_id = vehicle_id;
		this.model = model;
		this.plate_num = platenum;
		this.vehicle_type_id = vehicletypeid;
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
		return plate_num;
	}
	public void setPlatenum(String platenum) {
		this.plate_num = platenum;
	}
	public int getVehicletypeid() {
		return vehicle_type_id;
	}
	public void setVehicletypeid(int vehicletypeid) {
		this.vehicle_type_id = vehicletypeid;
	}
	
	public CustomerEntity getCustomer() {
		return customer;
	}


	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}


	@Override
	public String toString() {
		return "VehicleEntity [id=" + vehicle_id + ", model=" + model + ", plate_num=" + plate_num + ", vehicle_type_id="
				+ vehicle_type_id + "]";
	}


	
	
	
}
