package com.peakiron1.ecms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_vehicle")
public class VehicleEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String model;
	private String platenum;
	private int vehicletypeid;
	public VehicleEntity() {}
	public VehicleEntity(int id, String model, String platenum, int vehicletypeid) {
		super();
		this.id = id;
		this.model = model;
		this.platenum = platenum;
		this.vehicletypeid = vehicletypeid;
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
		return platenum;
	}
	public void setPlatenum(String platenum) {
		this.platenum = platenum;
	}
	public int getVehicletypeid() {
		return vehicletypeid;
	}
	public void setVehicletypeid(int vehicletypeid) {
		this.vehicletypeid = vehicletypeid;
	}
	@Override
	public String toString() {
		return "VehicleEntity [id=" + id + ", model=" + model + ", platenum=" + platenum + ", vehicletypeid="
				+ vehicletypeid + "]";
	}
	
	
}
