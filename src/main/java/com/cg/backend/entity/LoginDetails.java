package com.cg.backend.entity;

import java.util.Date;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@ExcludedFromGeneratedCodeCoverage
@Entity
@Table(	name = "login_table")
public class LoginDetails {
	
		
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private boolean isAdmin;
	public LoginDetails() {
		
	}
	public LoginDetails( String name, String email, Boolean isAdmin,Date logIndateTime) {
		super();
		
		this.name = name;
		this.email = email;
		//this.password = password;
		this.logIndateTime = logIndateTime;
		this.isAdmin=isAdmin;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public Date getLogIndateTime() {
		return logIndateTime;
	}
	public void setLogIndateTime(Date logIndateTime) {
		this.logIndateTime = logIndateTime;
	}
	
	//private String password;
    private Date logIndateTime;
    
}
