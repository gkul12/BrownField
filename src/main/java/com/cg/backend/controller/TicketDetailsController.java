package com.cg.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.backend.entity.TicketDetails;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.TicketDetailsService;

@RestController
public class TicketDetailsController 
{
	@Autowired
	TicketDetailsService tservice;
	@Autowired
	UserDao udao;
	
	@PostMapping("/getAllTickets/{emailId}/{flightNumber}")
	public List<TicketDetails> getAllTickets(@PathVariable String emailId,@PathVariable int flightNumber)
	{
		return tservice.getAllTickets(emailId,flightNumber);
	}
	
	@PostMapping("/addTickets/{emailId}")
	public ResponseEntity<String> AddTicket(@RequestBody TicketDetails ticket,@PathVariable String emailId)
	{
		return tservice.addTicket(ticket,emailId);
	}

	@PostMapping("/deleteTicket/{ticketId}/{emailId}")
	public ResponseEntity<String> deleteById(@PathVariable int ticketId,@PathVariable String emailId) 
	{
		return tservice.deleteTicket(ticketId, emailId);
	
	}
}
