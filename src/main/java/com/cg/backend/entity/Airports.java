package com.cg.backend.entity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@ExcludedFromGeneratedCodeCoverage
@Entity
public class Airports {
	
	@Id
	private String code;
	private String airport;
	private String city;
	private String state;
	
	
	public Airports() {
		super();
	}
	public Airports(String code, String airport, String city, String state) {
		super();
		this.code = code;
		this.airport = airport;
		this.city = city;
		this.state = state;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getAirport() {
		return airport;
	}
	public void setAirport(String airport) {
		this.airport = airport;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	
	

}
