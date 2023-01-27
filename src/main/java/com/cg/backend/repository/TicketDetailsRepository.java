package com.cg.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.TicketDetails;

@ExcludedFromGeneratedCodeCoverage
@Repository
public interface TicketDetailsRepository extends JpaRepository<TicketDetails,Integer>
{
	@Query(value="select * from ticket_details where user_id=?1",nativeQuery=true)
	public List<TicketDetails> findByUserId(int uid);
}
