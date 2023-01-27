package com.cg.backend.service;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.entity.Flight;
import com.cg.backend.repository.AirlineDao;
import com.cg.backend.repository.FlightDao;
//import com.cg.backend.repository.FlightRepository;

@Service
public class FlightService {

	@Autowired
	FlightDao airplaneRepo;
	
	@Autowired
	AirlineDao aDao;
	
	@ExcludedFromGeneratedCodeCoverage
	public long getArrivalDateDifference(Flight f) throws ParseException
	{
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		 
		Date today = new Date();
	    Date arrivalDate = formatter.parse(f.getArrivalDate());
	    long time_difference1 = arrivalDate.getTime() - today.getTime();   
	     
	    
	    long days_difference1 = (time_difference1 / (1000*60*60*24)) % 365;
	    return days_difference1;
	}
	
	@ExcludedFromGeneratedCodeCoverage
	public long getDepartureDateDifference(Flight f) throws ParseException
	{
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
		 
		Date today = new Date();
	    Date arrivalDate = formatter.parse(f.getDepartureDate());
	    long time_difference1 = arrivalDate.getTime() - today.getTime();   
	     
	    
	    long days_difference1 = (time_difference1 / (1000*60*60*24)) % 365;
	    return days_difference1;
	}
	
	public ResponseEntity<String> addFlight(Flight airplane) throws ParseException {
		 
	    long days_difference1 = getArrivalDateDifference(airplane);   
	    long days_difference2 = getDepartureDateDifference(airplane);          
	            
		if(airplane.getDestination().equals(airplane.getSource()))
		{
			return ResponseEntity
					.badRequest()
					.body("Error: Source and Destination must be different");
		}
		if(airplane.getEconomySeats()+airplane.getBusinessSeats()>180)
		{
			return ResponseEntity
					.badRequest()
					.body("Error: Total seats cannot be more than flight capacity");
		}
		if(days_difference1<0)
		{
			return ResponseEntity
					.badRequest()
					.body("Error: Select appropriate arrival date");
		}
		if(days_difference2<0)
		{
			return ResponseEntity
					.badRequest()
					.body("Error: Select appropriate departure date");
		}
		airplane.setAiroplane(aDao.findById(airplane.getaId()).get());
		//System.out.println(airplane.getAiroplane());
		airplaneRepo.save(airplane);
		return new ResponseEntity<String>("Flight added", HttpStatus.OK);
	}

	public List<Flight> findAll() {
		List<Flight> flights=airplaneRepo.findAll();
		// TODO Auto-generated method stub
		return flights;
	}
	
	public ResponseEntity<String> delayFlight(int flightId)
	{
		Optional<Flight> flight = airplaneRepo.findById(flightId);
		Flight flightdata = flight.get();
		flightdata.setStatus("Delayed");
		airplaneRepo.save(flightdata);
		return ResponseEntity.ok("Flight Delayed");
	}
	
	public ResponseEntity<String> cancleFlight(int flightId)
	{
		Optional<Flight> flight = airplaneRepo.findById(flightId);
		Flight flightdata = flight.get();
		flightdata.setStatus("Cancelled");
		airplaneRepo.save(flightdata);
		return ResponseEntity.ok("Flight cancelled");

	}
	
}
