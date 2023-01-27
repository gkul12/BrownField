package com.cg.backend;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.Admin;
import com.cg.backend.entity.LoginRequest;
import com.cg.backend.entity.User;
import com.cg.backend.repository.AdminDao;
import com.cg.backend.repository.UserDao;
import com.cg.backend.service.AdminService;
import com.cg.backend.service.UserService;

@ExcludedFromGeneratedCodeCoverage
@SpringBootTest
class UserServiceTest {

//	@Test
//	void test() {
//		fail("Not yet implemented");
//	}

	@Autowired
	private UserDao uDao;
	@Autowired
	UserService userv;
	
	@Autowired
	AdminDao adao;
	@Autowired
	AdminService aserv;
//		@Test
//		public void getUsers() {
//		User user1 = new User();
//		user1.setFirstName("Punam");
//		user1.setEmail("punam13@gmail.com");
//		user1.setPassword("Punam@123");
//		user1.setGender("female");
//	
//		User user2 = new User();
//		user2.setFirstName("Tushar");
//		user2.setEmail("tushar1@gmail.com");
//		user2.setPassword("Tushar@123");
//		user2.setGender("male");
//
//		uDao.save(user1);
//		uDao.save(user2);
//	
//		int actual=2;
//	
//		assertEquals(uDao.count(),actual);
//		}
		@Test
		public void saveUser() {
			User user1 = new User();
			user1.setFirstName("Punam");
			user1.setEmail("unam1@gmail.com");
			user1.setPassword("Punam@123");
			user1.setGender("female");
		
			User user=uDao.save(user1);
			 
			 assertEquals(user1,user);
		}
		
		@Test
		public void saveUserService() {
			User user1 = new User();
			user1.setFirstName("Punam");
			user1.setEmail("am1@gmail.com");
			user1.setPassword("Punam@123");
			user1.setGender("female");
		
			ResponseEntity<String> s=userv.registerUser(user1);
			 
			 assertEquals("User registered successfully!",s.getBody());
		}
		
		@Test
		public void registerUserFail1()
		{
			User user1 = new User();
			user1.setFirstName("Punam");
			user1.setEmail("punam1@gmail.com");
			user1.setPassword("Punam@123");
			user1.setGender("female");
			
			ResponseEntity<String> str=userv.registerUser(user1);
			
			String expected="Error: Email is already in use!";
			assertEquals(expected,str.getBody());
			
		}
		
		@Test
		public void existByEmail() {
			User user1 = new User();
			user1.setFirstName("Punam");
			user1.setEmail("un1@gmail.com");
			user1.setPassword("Punam@123");
			user1.setGender("female");
		
		    uDao.save(user1);
			 Boolean b = uDao.existsByEmail("pun1@gmail.com");
			    assertThat(b.booleanValue()).isEqualTo(true);
		}
		
		@Test
		public void loginUser() {
			
			User user1 = new User();
			user1.setFirstName("Gau");
			user1.setEmail("gau@gmail.com");
			user1.setPassword("gau123");
			user1.setGender("female");
			uDao.save(user1);
			
			LoginRequest lr = new LoginRequest();
			lr.setEmail("gau@gmail.com");
			lr.setPassword("gau123");
			lr.setIsAdmin(false);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Login Successful!",login.getBody());
		}
		
		@Test
		public void loginAdmin() {
			
			Admin user1 = new Admin();
			user1.setName("Suha");
			user1.setEmail("suha@gmail.com");
			user1.setPassword("gau123");
			user1.setGender("female");
			adao.save(user1);
			
			LoginRequest lr = new LoginRequest();
			lr.setEmail("suha@gmail.com");
			lr.setPassword("gau123");
			lr.setIsAdmin(true);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Login Successful!",login.getBody());
		}
		
		@Test
		public void EmailDoesNotExistsUser()
		{
			LoginRequest lr = new LoginRequest();
			lr.setEmail("s@gmail.com");
			lr.setPassword("gau123");
			lr.setIsAdmin(false);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Error: Email does not exists",login.getBody());
		}
		
		@Test
		public void EmailDoesNotExistsAdmin()
		{
			LoginRequest lr = new LoginRequest();
			lr.setEmail("sw@gmail.com");
			lr.setPassword("gau123");
			lr.setIsAdmin(true);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Error: Email does not exists",login.getBody());
		}
		
		@Test void wrongCredentialsUser()
		{
			User user1 = new User();
			user1.setFirstName("Gau");
			user1.setEmail("g@gmail.com");
			user1.setPassword("g123");
			user1.setGender("female");
			uDao.save(user1);
			
			LoginRequest lr = new LoginRequest();
			lr.setEmail("g@gmail.com");
			lr.setPassword("gau123");
			lr.setIsAdmin(false);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Error: Wrong Credentials",login.getBody());
		}
		
		@Test void wrongCredentialsAdmin()
		{
			Admin user1 = new Admin();
			user1.setName("Suha");
			user1.setEmail("sua@gmail.com");
			user1.setPassword("gau123");
			user1.setGender("female");
			adao.save(user1);
			
			LoginRequest lr = new LoginRequest();
			lr.setEmail("sua@gmail.com");
			lr.setPassword("ga23");
			lr.setIsAdmin(true);
			ResponseEntity<String> login = userv.loginUser(lr);
			assertEquals("Error: Wrong Credentials",login.getBody());
		}
}
