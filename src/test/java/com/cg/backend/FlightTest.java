package com.cg.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.entity.Flight;
import com.cg.backend.repository.AirlineDao;
import com.cg.backend.repository.FlightDao;
import com.cg.backend.service.FlightService;

@SpringBootTest
@ExcludedFromGeneratedCodeCoverage
class FlightTest {

	@Autowired
	FlightDao fdao;
	@Autowired
	FlightService fserv;
	@Autowired
	AirlineDao adao;
	

	@Test
	void testDelayFlightController() throws URISyntaxException
	{
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/delayFlight";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		AirlineDetails a=new AirlineDetails("2","20","160");
		Flight f=new Flight();
		f.setAiroplane(a); 
		f.setaId("2");
		fdao.save(f);
		HttpEntity<Integer> request = new HttpEntity<>(f.getFlightNumber(), headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	
	@Test
	void testCancleFlightController() throws URISyntaxException
	{
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/cancleFlight";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		AirlineDetails a=new AirlineDetails("21","20","160");
		Flight f=new Flight();
		f.setAiroplane(a); 
		f.setaId("21");
		fdao.save(f);
		HttpEntity<Integer> request = new HttpEntity<>(f.getFlightNumber(), headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	
	@Autowired
	private FlightDao flightRepo;
	
	@Autowired
	private FlightService fs;
//	@Test
//	
//	void testAddFlightController() throws URISyntaxException
//	{
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8080/addFlight";
//		URI uri=new URI(url);
//		HttpHeaders headers = new HttpHeaders();
//		AirlineDetails a=new AirlineDetails("12","20","160");
//		Flight f=new Flight();
//		f.setAiroplane(a);
//		f.setaId("12");
//		flightRepo.save(f);
//		HttpEntity<Flight> request = new HttpEntity<>(f, headers);
//		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
//		assertEquals(HttpStatus.OK,res.getStatusCode());
//	}
	
	@Test
	void testGetAllFlightController() throws URISyntaxException
	{
	
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/getAllFlights";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		Flight f=new Flight();
		f.setaId("22");
		flightRepo.save(f);
		HttpEntity<Flight> request = new HttpEntity<>(f, headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.GET, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	
	@Test
	void cancleFlightService() 
	{
		AirlineDetails a=new AirlineDetails("57","20","160");
		Flight f=new Flight(26,"Mumbai","Nagpur","02:30","04:00","10-02-2023","10-02-2023",2000,45000,a,20,160,"On time");
		Flight f1=flightRepo.save(f);
		fs.cancleFlight(f1.getFlightNumber());
		String actual="Cancelled";
		Optional<Flight> flight=flightRepo.findById(f1.getFlightNumber());
		assertEquals(actual,flight.get().getStatus());
	}
	
	@Test
	void addFlightService() throws ParseException 
	{
		AirlineDetails a=new AirlineDetails("39","20","160");
		adao.save(a);
		Flight f=new Flight(236,"39","Pune","Nagpur","02:30","04:00","10-02-2023","10-02-2023",2000,45000,a,20,160,"On time");
		//f.setaId("39");
		ResponseEntity<String> s=fs.addFlight(f);
		
		assertEquals(s.getBody(),"Flight added");
	}
	
	@Test
	void delayFlightService() 
	{
		AirlineDetails a=new AirlineDetails("5","20","160");
		Flight f=new Flight(26,"Mumbai","Nagpur","02:30","04:00","10-02-2023","10-02-2023",2000,45000,a,20,160,"On time");
		Flight f1=flightRepo.save(f);
		fs.delayFlight(f1.getFlightNumber());
		String actual="Delayed";
		Optional<Flight> flight=flightRepo.findById(f1.getFlightNumber());
		assertEquals(actual,flight.get().getStatus());
	
	}
	
	@Test
	void addFlightServiceFail1() throws ParseException 
	{
		AirlineDetails a=new AirlineDetails("1","20","160");
		Flight f=new Flight(236,"Nagpur","Nagpur","02:30","04:00","10-02-2023","10-02-2023",2000,45000,a,20,160,"On time");
		ResponseEntity<String> s=fs.addFlight(f);
		
		assertEquals(s.getBody(),"Error: Source and Destination must be different");
	}
	
	@Test
	void addFlightServiceFail2() throws ParseException 
	{
		AirlineDetails a=new AirlineDetails("3","20","160");
		Flight f=new Flight(236,"Pune","Nagpur","02:30","04:00","10-01-2023","10-02-2023",2000,45000,a,210,160,"On time");
		ResponseEntity<String> s=fs.addFlight(f);
		
		assertEquals(s.getBody(),"Error: Total seats cannot be more than flight capacity");
	}
	
	@Test
	void addFlightServiceFail3() throws ParseException 
	{
		AirlineDetails a=new AirlineDetails("12","20","160");
		Flight f=new Flight(236,"Pune","Nagpur","02:30","04:00","10-02-2023","10-01-2023",2000,45000,a,20,160,"On time");
		ResponseEntity<String> s=fs.addFlight(f);
		
		assertEquals(s.getBody(),"Error: Select appropriate arrival date");
	}
	
	@Test
	void addFlightServiceFail4() throws ParseException 
	{
		AirlineDetails a=new AirlineDetails("122","20","160");
		Flight f=new Flight(236,"Pune","Nagpur","02:30","04:00","10-01-2023","10-02-2023",2000,45000,a,20,160,"On time");
		ResponseEntity<String> s=fs.addFlight(f);
		
		assertEquals(s.getBody(),"Error: Select appropriate departure date");
	}
	

}
