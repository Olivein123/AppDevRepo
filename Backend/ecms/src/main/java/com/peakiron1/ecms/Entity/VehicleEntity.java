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
	
	private String vehicleModel;
	private String plateNum;
	private int vehicleTypeId;
	public VehicleEntity() {}
	public VehicleEntity(int id, String vehicleModel, String plateNum, int vehicleTypeId) {
		super();
		this.id = id;
		this.vehicleModel = vehicleModel;
		this.plateNum = plateNum;
		this.vehicleTypeId = vehicleTypeId;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getVehicleModel() {
		return vehicleModel;
	}
	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}
	public String getPlateNum() {
		return plateNum;
	}
	public void setPlateNum(String plateNum) {
		this.plateNum = plateNum;
	}
	public int getVehicleTypeId() {
		return vehicleTypeId;
	}
	public void setVehicleTypeId(int vehicleTypeId) {
		this.vehicleTypeId = vehicleTypeId;
	}
	@Override
	public String toString() {
		return "VehicleEnitity [id=" + id + ", vehicleModel=" + vehicleModel + ", plateNum=" + plateNum
				+ ", vehicleTypeId=" + vehicleTypeId + "]";
	}
}
