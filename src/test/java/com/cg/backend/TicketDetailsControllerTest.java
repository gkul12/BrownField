package com.cg.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.net.URI;
import java.net.URISyntaxException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.cg.backend.entity.TicketDetails;
import com.cg.backend.entity.User;
import com.cg.backend.repository.TicketDetailsRepository;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.TicketDetailsService;

@SpringBootTest
class TicketDetailsControllerTest 
{
	@Autowired
	private TicketDetailsRepository ticketdao;
	@Autowired
	private UserDao udao;
	@Autowired
	TicketDetailsService tserv; 
	
//	@Test
//	void addTicketDetailsController() throws URISyntaxException
//	{
//		
//		User user1 = new User();
//		user1.setFirstName("Punam");
//		user1.setEmail("punam1@gmail.com");
//		user1.setPassword("Punam@123");
//		user1.setGender("female");
//		
//		User u=udao.save(user1);
//		
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8080/addTickets/"+u.getEmail();
//		URI uri=new URI(url);
//		HttpHeaders headers = new HttpHeaders();
//		TicketDetails t=new TicketDetails("shree","saha","male"); 
//		//f.setticketId(2);
//		//ticketdao.save(f);
//		HttpEntity<TicketDetails> request = new HttpEntity<>(t, headers);
//		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
//		assertEquals(HttpStatus.OK,res.getStatusCode());
//	} 
	
//	@Test
//	void testGetAllTicketsController() throws URISyntaxException
//	{
//		User user1 = new User();
//		user1.setFirstName("Punam");
//		user1.setEmail("pum1@gmail.com");
//		user1.setPassword("Punam@123");
//		user1.setGender("female");
//		
//		User u=udao.save(user1);
//		
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8080/getAllTickets"+u.getEmail()+"/"+;
//		URI uri=new URI(url);
//		//HttpHeaders headers = new HttpHeaders();
//		//HttpEntity<Integer> request = new HttpEntity<>(f.getFlightNumber(), headers);
//
//		ResponseEntity<String> res=template.getForEntity(uri,String.class);
//		assertEquals(HttpStatus.OK,res.getStatusCode());
//	}
//	@Test
//	void testGetAllTicketController() throws URISyntaxException
//	{
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8081/getAllTickets/"+"emailId";
//		URI uri=new URI(url);
//		ResponseEntity<String> res=template.getForEntity(uri,String.class);
//		assertEquals(HttpStatus.OK,res.getStatusCode());
//	}
//	
//	
//	@Test
//	void testDeleteTicketController() throws URISyntaxException{
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8081/deleteTicket/"+"emailId";
//		URI uri=new URI(url);
//		HttpHeaders headers = new HttpHeaders();
//		TicketDetails f=new TicketDetails(); 
//		f.setticketId(2);
//		ticketdao.save(f);
//		//HttpEntity<String> request = new HttpEntity<>(f.getticketId() , headers);
//		//ResponseEntity<String> res=template.exchange(uri, HttpMethod.DELETE, request, String.class);
//		//assertEquals(HttpStatus.OK,res.getStatusCode());
//	}

}
