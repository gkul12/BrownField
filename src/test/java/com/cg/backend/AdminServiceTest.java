package com.cg.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.backend.entity.Admin;
import com.cg.backend.repository.AdminDao;

@SpringBootTest
class AdminServiceTest 
{

	@Autowired
	private AdminDao aDao;
	
		@Test
		public void getAdmins() {
		Admin admin1 = new Admin();
		admin1.setName("Punam");
		admin1.setEmail("punam@gmail.com");
		admin1.setPassword("Punam@123");
		admin1.setGender("female");
	
		Admin admin2 = new Admin();
		admin2.setName("Tushar");
		admin2.setEmail("tushar@gmail.com");
		admin2.setPassword("Tushar@123");
		admin2.setGender("male");

		aDao.save(admin1);
		aDao.save(admin2);
	
		int actual=2;
	
		assertEquals(aDao.count(),actual);
	
		}

}
