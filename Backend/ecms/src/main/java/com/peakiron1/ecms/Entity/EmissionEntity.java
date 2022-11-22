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
	private int siteid; 
	private String sitename; 
	private String siteaddress; 
	private int contactnumber;
	
	public EmissionEntity() {}

	public EmissionEntity(int siteid, String sitename, String siteaddress, int contactnumber) {
		super();
		this.siteid = siteid;
		this.sitename = sitename;
		this.siteaddress = siteaddress;
		this.contactnumber = contactnumber;
	}

	public int getSiteid() {
		return siteid;
	}

	public void setSiteid(int siteid) {
		this.siteid = siteid;
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
