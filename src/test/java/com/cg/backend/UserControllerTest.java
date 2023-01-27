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

import com.cg.backend.entity.LoginRequest;
import com.cg.backend.entity.User;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.UserService;

@SpringBootTest
class UserControllerTest {

	@Autowired
	private UserService userserv;
	@Autowired
	private UserDao udao;

	@Test
	void testGetAllUsersController() throws URISyntaxException
	{
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/getallusers";
		URI uri=new URI(url);
		//HttpHeaders headers = new HttpHeaders();
		//HttpEntity<Integer> request = new HttpEntity<>(f.getFlightNumber(), headers);

		ResponseEntity<String> res=template.getForEntity(uri,String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	
	@Test
	void testSignUpController() throws URISyntaxException {
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/signup";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		User user1 = new User();
		user1.setFirstName("Punam");
		user1.setEmail("c@gmail.com");
		user1.setPassword("c@123");
		user1.setGender("female");
		//udao.save(user1);
		HttpEntity<User> request = new HttpEntity<>(user1, headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
	@Test
	void testSignInController() throws URISyntaxException {
		RestTemplate template=new RestTemplate();
		final String url="http://localhost:8080/signin";
		URI uri=new URI(url);
		HttpHeaders headers = new HttpHeaders();
		User user1 = new User();
		user1.setFirstName("Punam");
		user1.setEmail("cheta@gmail.com");
		user1.setPassword("cheta@123");
		user1.setGender("female");
		udao.save(user1);
		LoginRequest lr = new LoginRequest("cheta@gmail.com","cheta@123",false);
		//udao.save(lr);
		HttpEntity<LoginRequest> request = new HttpEntity<>(lr, headers);
		ResponseEntity<String> res=template.exchange(uri, HttpMethod.POST, request, String.class);
		assertEquals(HttpStatus.OK,res.getStatusCode());
	}
}
