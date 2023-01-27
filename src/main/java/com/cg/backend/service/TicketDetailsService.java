package com.cg.backend.service;

import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.backend.entity.TicketDetails;
import com.cg.backend.entity.User;
import com.cg.backend.repository.FlightDao;
import com.cg.backend.repository.TicketDetailsRepository;
import com.cg.backend.repository.UserDao;

@Service
public class TicketDetailsService {
	
	@Autowired
	TicketDetailsRepository trepo;
	@Autowired
	UserDao udao;
	@Autowired
	FlightDao frepo;
	
	public List<TicketDetails> getAllTickets(String emailId,int flightNumber)
	{
//		Optional<User> u=udao.findById(uid);
		List<TicketDetails> tList= udao.findByEmail(emailId).get().getTicketList();
		System.out.println(tList);
		List<TicketDetails> ticketList=new ArrayList<>();
		for(TicketDetails t:tList)
		{
			if(t.getFlight().getFlightNumber()==flightNumber)
			{
				//System.out.println
				ticketList.add(t);
			}
		}
		System.out.println(ticketList);
		return ticketList;
		//return trepo.findByUserId(uid);
	}
	
	public ResponseEntity<String> addTicket(TicketDetails ticket,String emailId)
	{
		User user=udao.findByEmail(emailId).get();
		List<TicketDetails> tList=user.getTicketList();
		ticket.setFlight(frepo.findByFlightNumber(ticket.getFlightNumber()));
		tList.add(ticket);
		user.setTicketList(tList);
		udao.save(user);
//		trepo.save(ticket);
		return ResponseEntity.ok("Ticket Added");
	}
	
	public ResponseEntity<String> deleteTicket(int ticketId,String emailId) 
	{
		User user=udao.findByEmail(emailId).get();
		List<TicketDetails> tList=user.getTicketList();

		for(TicketDetails t:tList)
		{
			if(t.getId()==ticketId)
			{
				tList.remove(t);
				break;
			}
		}
		
		user.setTicketList(tList);
		udao.save(user);
		return ResponseEntity.ok("Ticket deleted..");
	}
	
}
