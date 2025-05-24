package org.jsp.springbootstudentmanagement.dao;

import org.jsp.springbootstudentmanagement.dto.Admin;
import org.jsp.springbootstudentmanagement.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDao {
	@Autowired
	 private AdminRepository adminRepository;
	// to save the admin details
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	public Admin adminLogin(String username) {
		return adminRepository.findByUsername(username);
	}

}
