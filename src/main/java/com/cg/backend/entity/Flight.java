package com.cg.backend.entity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;

@ExcludedFromGeneratedCodeCoverage
@Entity
public class Flight {

		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int flightNumber;
		@OneToOne(cascade = CascadeType.ALL)
		private AirlineDetails airoplane;
		@Transient
		private String aId;
		private String source;
		private String destination;
		private String departureDate;
		private String departureTime;
		private String type;
		private String arrivalDate;
		private String arrivalTime;
		private int economyFare;
		private int businessFare;
		private int businessSeats;
		private int economySeats;
		private String status;
		
		public Flight() {
			super();
		}

		public Flight(AirlineDetails airoplane, int flightNumber, String source, String destination,
				String departureDate, String departureTime, String type, String arrivalDate, String arrivalTime,
				int economyFare, int businessFare, int businessSeats, int economySeats, String status) {
			super();
			this.airoplane = airoplane;
			this.flightNumber = flightNumber;
			this.source = source;
			this.destination = destination;
			this.departureDate = departureDate;
			this.departureTime = departureTime;
			this.type = type;
			this.arrivalDate = arrivalDate;
			this.arrivalTime = arrivalTime;
			this.economyFare = economyFare;
			this.businessFare = businessFare;
			this.businessSeats = businessSeats;
			this.economySeats = economySeats;
			this.status = status;
		}

		public Flight(int id, String source, String destination, String deptTime, String arrTime, String deptDate,
				String arrDate, int eco, int bus, AirlineDetails a, int es, int bs, String status) 
		{
			// TODO Auto-generated constructor stub
			this.airoplane = a;
			this.flightNumber = id;
			this.source = source;
			this.destination = destination;
			this.departureDate = deptDate;
			this.departureTime = deptTime;
			//this.type = type;
			this.arrivalDate = arrDate;
			this.arrivalTime = arrTime;
			this.economyFare = eco;
			this.businessFare = bus;
			this.businessSeats = bs;
			this.economySeats = es;
			this.status = status;
			
		}

		public Flight(int id, String aid,String source, String destination, String deptTime, String arrTime, String deptDate,
				String arrDate, int eco, int bus, AirlineDetails a, int es, int bs, String status) 
		{
			// TODO Auto-generated constructor stub
			this.airoplane = a;
			this.flightNumber = id;
			this.aId=aid;
			this.source = source;
			this.destination = destination;
			this.departureDate = deptDate;
			this.departureTime = deptTime;
			//this.type = type;
			this.arrivalDate = arrDate;
			this.arrivalTime = arrTime;
			this.economyFare = eco;
			this.businessFare = bus;
			this.businessSeats = bs;
			this.economySeats = es;
			this.status = status;
			
		}
		
		public AirlineDetails getAiroplane() {
			return airoplane;
		}

		public void setAiroplane(AirlineDetails airoplane) {
			this.airoplane = airoplane;
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

		public String getDepartureDate() {
			return departureDate;
		}

		public void setDepartureDate(String departureDate) {
			this.departureDate = departureDate;
		}

		public String getDepartureTime() {
			return departureTime;
		}

		public void setDepartureTime(String departureTime) {
			this.departureTime = departureTime;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getArrivalDate() {
			return arrivalDate;
		}

		public void setArrivalDate(String arrivalDate) {
			this.arrivalDate = arrivalDate;
		}

		public String getArrivalTime() {
			return arrivalTime;
		}

		public void setArrivalTime(String arrivalTime) {
			this.arrivalTime = arrivalTime;
		}

		public int getEconomyFare() {
			return economyFare;
		}

		public void setEconomyFare(int economyFare) {
			this.economyFare = economyFare;
		}

		public int getBusinessFare() {
			return businessFare;
		}

		public void setBusinessFare(int businessFare) {
			this.businessFare = businessFare;
		}

		public int getBusinessSeats() {
			return businessSeats;
		}

		public void setBusinessSeats(int businessSeats) {
			this.businessSeats = businessSeats;
		}

		public int getEconomySeats() {
			return economySeats;
		}

		public void setEconomySeats(int economySeats) {
			this.economySeats = economySeats;
		}

		public String getaId() {
			return aId;
		}

		public void setaId(String aId) {
			this.aId = aId;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}
		
		

		
		
	}



