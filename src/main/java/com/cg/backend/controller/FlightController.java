package com.cg.backend.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.entity.Flight;
import com.cg.backend.service.FlightService;

@RestController
@CrossOrigin(origins =  "*")
public class FlightController {

	@Autowired
	FlightService airplaneService;
	
	@PostMapping("/addFlight")
	ResponseEntity<String> addFlight(@RequestBody Flight airplane) throws ParseException {
		return airplaneService.addFlight(airplane);
	}
	
	@GetMapping("/getAllFlights")
	public List<Flight> getAll()
	{
		return airplaneService.findAll();
	}
	
	@PostMapping("/delayFlight")
	public ResponseEntity<String> delayFlight(@RequestBody int flightId)
	{
	return airplaneService.delayFlight(flightId);
	}
		
	@PostMapping("/cancleFlight")
	public ResponseEntity<String> cancleFlight(@RequestBody int flightId)
	{
	return airplaneService.cancleFlight(flightId);
	}
		
}
