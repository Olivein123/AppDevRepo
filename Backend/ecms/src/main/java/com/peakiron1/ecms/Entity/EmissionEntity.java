package com.peakiron1.ecms.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_testing_center")
public class EmissionEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	private String sitename; 
	private String siteaddress; 
	private int contactnumber;
	
	public EmissionEntity() {}

	public EmissionEntity(int id, String sitename, String siteaddress, int contactnumber) {
		super();
		this.id = id;
		this.sitename = sitename;
		this.siteaddress = siteaddress;
		this.contactnumber = contactnumber;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSitename() {
		return sitename;
	}

	public void setSitename(String sitename) {
		this.sitename = sitename;
	}

	public String getSiteaddress() {
		return siteaddress;
	}

	public void setSiteaddress(String siteaddress) {
		this.siteaddress = siteaddress;
	}

	public int getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(int contactnumber) {
		this.contactnumber = contactnumber;
	}


	
	
	

}
