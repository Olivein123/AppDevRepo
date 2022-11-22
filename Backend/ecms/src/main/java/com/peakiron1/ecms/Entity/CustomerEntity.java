package com.peakiron1.ecms.Entity;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
@Table(name = "tbl_customer")
public class CustomerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String firstname;
	private String middlename;
	private String lastname;
	private String address;
	private String contact_num;
	private String license_num;
	private String vehicle_id;
	
	//@ManyToMany(mappedBy = "customer", fetch = FetchType.LAZY)
	//Set<EmissionEntity> center; 
	
	public CustomerEntity() {}
	
	public CustomerEntity(int id, String firstname, String middlename, String lastname, String address,
			String contact_num, String license_num, String vehicle_id) {
		super();
		Id = id;
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
		this.address = address;
		this.contact_num = contact_num;
		this.license_num = license_num;
		this.vehicle_id = vehicle_id;
	}
	
	public int getId() {return Id;}
	
	public String getFirstname() {return firstname;}
	
	public void setFirstname(String firstname) {this.firstname = firstname;}
	
	public String getMiddlename() {return middlename;}
	
	public void setMiddlename(String middlename) {this.middlename = middlename;}
	
	public String getLastname() {return lastname;}
	
	public void setLastname(String lastname) {this.lastname = lastname;}
	
	public String getAddress() {return address;}
	
	public void setAddress(String address) {this.address = address;}
	
	public String getContact_num() {return contact_num;}
	
	public String getLicense_num() {return license_num;}
	
	public String getVehicle_id() {return vehicle_id;}
	
	public void setVehicle_id(String vehicle_id) {this.vehicle_id = vehicle_id;}

	@Override
	public String toString() {
		return "CustomerEntity [Id=" + Id + ", firstname=" + firstname + ", middlename=" + middlename + ", lastname="
				+ lastname + ", address=" + address + ", contact_num=" + contact_num + ", license_num=" + license_num
				+ ", vehicle_id=" + vehicle_id + "]";
	}
	
}
