package com.peakiron1.ecms.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_vehicle")
public class VehicleEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String model;
	private String plate_num;
	private int vehicle_type_id;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", referencedColumnName = "id",nullable = false)
	CustomerEntity customer;
	
	public VehicleEntity() {}
	
	
	public VehicleEntity(int id, String model, String platenum, int vehicletypeid, CustomerEntity customer) {
		super();
		this.id = id;
		this.model = model;
		this.plate_num = platenum;
		this.vehicle_type_id = vehicletypeid;
		this.customer = customer;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
		return "VehicleEntity [id=" + id + ", model=" + model + ", plate_num=" + plate_num + ", vehicle_type_id="
				+ vehicle_type_id + ", customer=" + customer + "]";
	}


	
	
	
}
