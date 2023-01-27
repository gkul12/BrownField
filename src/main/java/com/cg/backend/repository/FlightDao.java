package com.cg.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.dto.FlightDto;
import com.cg.backend.entity.Flight;


@ExcludedFromGeneratedCodeCoverage
@Repository
public interface FlightDao extends JpaRepository<Flight,Integer>
{
	public Flight findByFlightNumber(int id);
	@Query("SELECT new com.cg.backend.dto.FlightDto(flightNumber,source,destination,departureTime,arrivalTime,arrivalDate,departureDate,economyFare,businessFare) from Flight f")
	public List<FlightDto> findBySourceAndDestinationvAndDepartureDate(String source,String destination,String departureDate);

	
	//public List<Flight> findBySourceAndDestinationAndDepartureDate(String source,String destination,String departureDate);
}
