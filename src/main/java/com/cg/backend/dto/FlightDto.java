package com.cg.backend.dto;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

@ExcludedFromGeneratedCodeCoverage
public class FlightDto {

	private int  flightNumber ;
	private String source ;
	private String destination ;
	private String departureTime ;
	private String arrivalTime ;
	private String arrivaleDate ;
	private String departureDate ;
	private int fareEconomy;
	private int fareBusiness;
	
	public FlightDto() {}


	public FlightDto(int flightNumber, String source, String destination, String departureTime, String arrivalTime,
			String arrivaleDate, String departureDate, int fareEconomy, int fareBusiness) {
		super();
		this.flightNumber = flightNumber;
		this.source = source;
		this.destination = destination;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.arrivaleDate = arrivaleDate;
		this.departureDate = departureDate;
		this.fareEconomy = fareEconomy;
		this.fareBusiness = fareBusiness;
	}

	public int getFareEconomy() {
		return fareEconomy;
	}


	public void setFareEconomy(int fareEconomy) {
		this.fareEconomy = fareEconomy;
	}


	public int getFareBusiness() {
		return fareBusiness;
	}


	public void setFareBusiness(int fareBusiness) {
		this.fareBusiness = fareBusiness;
	}


	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getArrivaleDate() {
		return arrivaleDate;
	}

	public void setArrivaleDate(String arrivaleDate) {
		this.arrivaleDate = arrivaleDate;
	}

	public String getDepartureDate() {
		return departureDate;
	}

	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	
	
}
