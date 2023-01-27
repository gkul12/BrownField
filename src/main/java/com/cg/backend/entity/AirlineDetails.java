package com.cg.backend.entity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@ExcludedFromGeneratedCodeCoverage
@Entity
@Table(name="Aeroplanes")
public class AirlineDetails {

	@Id
	@Column(name = "aeroplane_id")
	private String aeroplane_id;
	@Column(name = "no_of_business_class_seats")
	private String no_of_business_class_seats;
	@Column(name = "no_of_economy_class_seats")
	private String no_of_economy_class_seats;

	
	public AirlineDetails() {}


	public AirlineDetails(String aeroplane_id, String no_of_business_class_seats,
			String no_of_economy_class_seats) {
		super();
		this.aeroplane_id = aeroplane_id;
		this.no_of_business_class_seats = no_of_business_class_seats;
		this.no_of_economy_class_seats = no_of_economy_class_seats;
	}

	


	public String getAeroplane_id() {
		return aeroplane_id;
	}


	public void setAeroplane_id(String aeroplane_id) {
		this.aeroplane_id = aeroplane_id;
	}


	public String getNo_of_business_class_seats() {
		return no_of_business_class_seats;
	}


	public void setNo_of_business_class_seats(String no_of_business_class_seats) {
		this.no_of_business_class_seats = no_of_business_class_seats;
	}


	public String getNo_of_economy_class_seats() {
		return no_of_economy_class_seats;
	}


	public void setNo_of_economy_class_seats(String no_of_economy_class_seats) {
		this.no_of_economy_class_seats = no_of_economy_class_seats;
	}


	@Override
	public String toString() {
		return "AirlineDetails [ aircarftIdentifier=" + aeroplane_id
				+ ", no_of_business_class_seats=" + no_of_business_class_seats + ", no_of_economy_class_seats="
				+ no_of_economy_class_seats + "]";
	}

	
	
	
	
}
