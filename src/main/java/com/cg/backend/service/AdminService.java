package com.cg.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.backend.entity.Admin;
import com.cg.backend.repository.AdminDao;



@Service
public class AdminService 
{

	@Autowired
	AdminDao admindao;
	
	public List<Admin> getAdmins()
	{
		return admindao.findAll();
	}
	
}
