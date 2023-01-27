package com.cg.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import com.cg.backend.entity.TicketDetails;
import com.cg.backend.entity.User;
import com.cg.backend.repository.TicketDetailsRepository;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.TicketDetailsService;

@SpringBootTest
class TicketDetailsServiceTest 
{

	@Autowired
	private TicketDetailsRepository ticketdao;
	@Autowired
	private UserDao udao;
	@Autowired
	TicketDetailsService tserv; 
	
	@Test
	public void addTicketsTest() 
	{
		User user = new User();
		user.setFirstName("Punam");
		user.setEmail("punam1@gmail.com");
		user.setPassword("Punam@123");
		user.setGender("female");
		
		udao.save(user);
		
		TicketDetails t=new TicketDetails("shree","saha","male");
		
		ResponseEntity<String> s=tserv.addTicket(t, user.getEmail());
		assertEquals(s.getBody(),"Ticket Added");
		
	}
	
	@Test
	public void getAllTicketsTest() 
	{
		User user = new User();
		user.setFirstName("Punam");
		user.setEmail("pam1@gmail.com");
		user.setPassword("Punam@123");
		user.setGender("female");
		
		udao.save(user);
		
		TicketDetails t1=new TicketDetails("shree","saha","male");
		TicketDetails t2=new TicketDetails("kama","saha","female");
		tserv.addTicket(t1, user.getEmail());
		tserv.addTicket(t2, user.getEmail());
		
		User u=udao.findByEmail(user.getEmail()).get();
		
		List<TicketDetails> list=new ArrayList<>();
		list.add(t2);list.add(t1);
		
		assertEquals(list.size(),u.getTicketList().size());
	}

	@Test
	public void deleteTicketsTest() 
	{
		User user = new User();
		user.setFirstName("Punam");
		user.setEmail("pun1@gmail.com");
		user.setPassword("Punam@123");
		user.setGender("female");
		
		udao.save(user);
		
		TicketDetails t=new TicketDetails("shree","saha","male");
		
	    tserv.addTicket(t, user.getEmail());
		ResponseEntity<String> s1=tserv.deleteTicket(t.getId(), user.getEmail());
		
		assertEquals(s1.getBody(),"Ticket deleted..");
		
	}

}
