package com.cg.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.AirlineDetails;
import com.cg.backend.repository.AirlineDao;

@ExcludedFromGeneratedCodeCoverage
@Service
public class AirlineService {
	
	@Autowired
	AirlineDao adao;

	public List<AirlineDetails> getAll()
	{
		return adao.findAll();
	}
	
	public ResponseEntity<String> addAeroplaneDetails(AirlineDetails aeroplane)
	{
		aeroplane.setAeroplane_id(aeroplane.getAeroplane_id());
		adao.save(aeroplane);
		return ResponseEntity.ok("Aeroplane details added successfully!!");

	}

	public ResponseEntity<String> deleteAeroplane(String aeroplane_id) {
		if(!adao.existsById(aeroplane_id))
			return ResponseEntity
					.badRequest()
					.body("Error: Airplane does not exists");

		adao.deleteById(aeroplane_id);
		return ResponseEntity.ok("Aeroplane deleted successfully!!");
	}

}
