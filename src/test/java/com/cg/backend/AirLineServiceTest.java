package com.cg.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.repository.AirlineDao;
import com.cg.backend.service.AirlineService;

@SpringBootTest
@ExcludedFromGeneratedCodeCoverage
class AirLineServiceTest 
{
	@Autowired
	private AirlineDao aDao;
	@Autowired
	private AirlineService aserv;
	
	@Test
	void addAeroplaneService()
	{
		AirlineDetails a1=new AirlineDetails("128","20","160");

		AirlineDetails actual =aDao.save(a1); 

		assertEquals(actual.toString(),a1.toString());
	}
	
//	@Test
//	void deleteAeroplaneService() 
//	{
//		AirlineDetails a1=new AirlineDetails("12","21","132");
//		aDao.save(a1);
//		aDao.delete(a1);
//		adao.f
//		int actual=aDao.countByAeroplaneId(a1.getAeroplane_id());
//		assertEquals(actual,0);
//	}
	
	@Test
	void deleteAeroplaneFailTest()
	{
		ResponseEntity<String> s=aserv.deleteAeroplane("abc");
		
		assertEquals("Error: Airplane does not exists",s.getBody());
	}
	
	@Test
	void getAllService() 
	{
		AirlineDetails a1=new AirlineDetails("12","21","132");
		AirlineDetails a2=new AirlineDetails("11","21","132");
		List<AirlineDetails> list=new ArrayList<>();
		list.add(a2);
		list.add(a1);
		
		aDao.save(a1);
		aDao.save(a2);
		List<AirlineDetails> list1=aserv.getAll();
	
		assertEquals(list.size(),list1.size());
		
	}
}
	
	 

