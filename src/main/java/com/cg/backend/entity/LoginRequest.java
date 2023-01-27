package com.cg.backend.entity;

import com.cg.backend.annotations.ExcludedFromGeneratedCodeCoverage;

@ExcludedFromGeneratedCodeCoverage
public class LoginRequest 
{
	private String email;
	private String password;
	private boolean isAdmin;
	
	public LoginRequest() {}

	public LoginRequest(String email, String password, boolean isAdmin) {
		super();
		this.email = email;
		this.password = password;
		this.isAdmin = isAdmin;
		System.out.println(this.toString());
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	@Override
	public String toString() {
		return "LoginRequest [email=" + email + ", password=" + password + ", isAdmin=" + isAdmin + "]";
	}

}

