package com.peakiron1.ecms.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
	
	
	//This one is used by CustomerEntity as a child pang mapping. 
	@ManyToMany(mappedBy = "sites", fetch = FetchType.LAZY) //mapped by indicates the entityy owner of the relationship, which is the customer entity
	private Set<CustomerEntity> customers; 
	//This one is used by AdminEntity as a child pang mapping.
	@ManyToMany(mappedBy = "adminsites", fetch = FetchType.LAZY)
	private Set<AdminEntity> admins;
	
	
	
	//MANY TO MANY MAPPING FROM TEST CENTER TO CUSTOMER
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name="sites_customer_list", 
				joinColumns = {
						@JoinColumn(name = "siteid")
				}, 
				inverseJoinColumns = {
						@JoinColumn(name = "Id")
				})
	private Set<CustomerEntity> customerlist; 
	
	//MANY TO MANY MAPPING FROM TEST CENTER TO ADMIN
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name="sites_admin_list", 
				joinColumns = {
						@JoinColumn(name = "siteid")
				}, 
				inverseJoinColumns = {
						@JoinColumn(name = "id")
				})
	private Set<AdminEntity> adminlist; 
	
	public EmissionEntity() {}

	public EmissionEntity(int siteid, String sitename, String siteaddress, int contactnumber, Set<CustomerEntity> customerlist, Set<AdminEntity> adminlist) {
		super();
		this.siteid = siteid;
		this.sitename = sitename;
		this.siteaddress = siteaddress;
		this.contactnumber = contactnumber;
		this.customerlist = customerlist; 
		this.adminlist = adminlist; 
	}

	public Set<AdminEntity> getAdminlist() {
		return adminlist;
	}

	public void setAdminlist(Set<AdminEntity> adminlist) {
		this.adminlist = adminlist;
	}

	public Set<CustomerEntity> getCustomerlist() {
		return customerlist;
	}

	public void setCustomerlist(Set<CustomerEntity> customerlist) {
		this.customerlist = customerlist;
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
