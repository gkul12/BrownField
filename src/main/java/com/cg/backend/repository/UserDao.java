package com.cg.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;
import com.cg.backend.entity.User;

@ExcludedFromGeneratedCodeCoverage
@Repository
public interface UserDao extends JpaRepository<User,Integer>
{
	 Optional<User> findByEmail(String email);
	 Boolean existsByEmail(String email);
}