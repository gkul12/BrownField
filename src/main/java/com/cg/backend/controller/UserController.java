package com.cg.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.backend.entity.LoginDetails;
import com.cg.backend.entity.LoginRequest;
import com.cg.backend.entity.User;
import com.cg.backend.repository.AdminDao;
import com.cg.backend.repository.LoginDetailsDao;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.UserService;




@RestController
public class UserController 
{
	@Autowired
	UserDao userdao;
	@Autowired
	AdminDao admindao;
	@Autowired
	UserService userservice;
	@Autowired
	LoginDetailsDao loginRepo;
	
	@GetMapping("/getallusers")
	public List<User> getUsers()
	{
		return userservice.getUsers();
	}
	
	@PostMapping("/signup")
	public ResponseEntity<String> registerUser(@RequestBody User user) 
	{

		return userservice.registerUser(user);
		
	}
	
	@PostMapping("/signin")
	public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) 
	{
		return userservice.loginUser(loginRequest);
	}
	
//	@GetMapping("/getAllLogs")
//	public List<LoginDetails> getLogDetails()
//	{
//		return loginRepo.findAll();
//	}
}
