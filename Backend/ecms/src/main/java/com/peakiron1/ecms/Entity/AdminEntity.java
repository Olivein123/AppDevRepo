package com.peakiron1.ecms.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="tbl_admin")
public class AdminEntity {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private int contactnumber;
	
	//MANY TO MANY MAPPING FROM ADMIN TO SITES -> RESULTS TO ADMIN HAVING MANY SITES
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	@JoinTable(name="admin_sites", 
				joinColumns = {
						@JoinColumn(name = "id")
				}, 
				inverseJoinColumns = {
						@JoinColumn(name = "siteid")
				})
	
	private Set<EmissionEntity> adminsites; 
	
	//used by emissionentity for the many to many relationship
	@ManyToMany(mappedBy = "adminlist", fetch = FetchType.LAZY)
	private Set<EmissionEntity> adminsitelist; 
	
	public AdminEntity(){}

	public AdminEntity(int id, String name, int contactnumber, Set<EmissionEntity> adminsites) {
		super();
		this.id = id;
		this.name = name;
		this.contactnumber = contactnumber;
		this.adminsites = adminsites; 
	}

	public Set<EmissionEntity> getAdminsites() {
		return adminsites;
	}

	public void setAdminsites(Set<EmissionEntity> adminsites) {
		this.adminsites = adminsites;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(int contactnumber) {
		this.contactnumber = contactnumber;
	}
	
	
}
