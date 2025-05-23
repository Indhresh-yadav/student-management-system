package org.jsp.springbootstudentmanagement.repository;

import org.jsp.springbootstudentmanagement.dto.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	Admin findByUsername(String username);

}
