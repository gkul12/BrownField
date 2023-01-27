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

import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.repository.AirlineDao;

@SpringBootTest
class AirlineControllerTest {

	@Autowired
	 private AirlineDao aDao;
	 
	@Test
	void getAllController() throws URISyntaxException
	{		RestTemplate template=new RestTemplate(); 
			final String url="http://localhost:8080/getAllAirlines";
			URI uri=new URI(url);
			HttpHeaders headers = new HttpHeaders();
			HttpEntity<AirlineDetails> request = new HttpEntity<>(headers);
			ResponseEntity<String> res=template.exchange(uri, HttpMethod.GET, request, String.class);
			assertEquals(HttpStatus.OK,res.getStatusCode());
			
	}
	
	@Test
	void addAeroplaneDetailsController() throws URISyntaxException
	{
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/addAeroplaneDetails";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		AirlineDetails f=new AirlineDetails();
		f.setAeroplane_id("29");
		aDao.save(f);
		HttpEntity<AirlineDetails> request = new HttpEntity<>(f, headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
		
	}
	
//	@Test
//	void deleteAeroplaneController()throws URISyntaxException
//	{
//		AirlineDetails f=new AirlineDetails();
//		f.setAeroplane_id("25");
//		aDao.save(f);
//		String aid=f.getAeroplane_id();
//		RestTemplate template=new RestTemplate();
//		final String url="http://localhost:8080/deleteAeroplane/"+aid;
//		URI uri=new URI(url);
//		HttpEntity<AirlineDetails> request = new HttpEntity<>(f);
//		
//		ResponseEntity<String> res=template.exchange(uri, HttpMethod.DELETE, request, String.class);
//		assertEquals(HttpStatus.OK,res.getStatusCode());
//	
//	}

}
