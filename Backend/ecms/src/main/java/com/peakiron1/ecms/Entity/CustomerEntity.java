package com.peakiron1.ecms.Entity;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;


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

	//ONE TO MANY MAPPING, A CUSTOMER CAN HAVE MULTIPLE VEHICLES
	@OneToMany(targetEntity = VehicleEntity.class,cascade=CascadeType.MERGE, fetch = FetchType.LAZY)
	@JoinTable(name="customer_vehicles", 
	joinColumns = {
			@JoinColumn(name = "customer_entity_id")
	}, 
	inverseJoinColumns = {
			@JoinColumn(name = "vehicles_id")
	})
	private Set<VehicleEntity> vehicles;
	//@ManyToMany(mappedBy = "customer", fetch = FetchType.LAZY)
	//Set<EmissionEntity> center; 

	//MANY TO MANY MAPPING FROM CUSTOMER TO SITES -> RESULTS TO CUSTOMER HAVING MANY SITES
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@JoinTable(name="customer_sites", 
				joinColumns = {
						@JoinColumn(name = "Id")
				}, 
				inverseJoinColumns = {
						@JoinColumn(name = "siteid")
				})
	
	private Set<EmissionEntity> sites; 
	
	//used by emissionentity for the many to many relationship
	@ManyToMany(mappedBy = "customerlist", fetch = FetchType.LAZY)
	private Set<EmissionEntity> customersitelist; 

	public CustomerEntity() {}

	public CustomerEntity(int id, String firstname, String middlename, String lastname, String address,
			String contact_num, String license_num, Set<VehicleEntity> vehicles,
			Set<EmissionEntity> sites, Set<EmissionEntity> customersitelist) {
		super();
		Id = id;
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
		this.address = address;
		this.contact_num = contact_num;
		this.license_num = license_num;
		this.vehicles = vehicles;
		this.sites = sites;
		this.customersitelist = customersitelist;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact_num() {
		return contact_num;
	}

	public void setContact_num(String contact_num) {
		this.contact_num = contact_num;
	}

	public String getLicense_num() {
		return license_num;
	}

	public void setLicense_num(String license_num) {
		this.license_num = license_num;
	}

	public Set<EmissionEntity> getSites() {
		return sites;
	}

	public void setSites(Set<EmissionEntity> sites) {
		this.sites = sites;
	}
	
	

	public Set<VehicleEntity> getVehicles() {
		return vehicles;
	}
	
	public void setVehicles(Set<VehicleEntity> vehicles) {
		this.vehicles = vehicles;
	}

	@Override
	public String toString() {
		return "CustomerEntity [Id=" + Id + ", firstname=" + firstname + ", middlename=" + middlename + ", lastname="
				+ lastname + ", address=" + address + ", contact_num=" + contact_num + ", license_num=" + license_num
				+ ", vehicles=" + vehicles + ", sites=" + sites + ", customersitelist=" + customersitelist + "]";
	}



	
	
}
