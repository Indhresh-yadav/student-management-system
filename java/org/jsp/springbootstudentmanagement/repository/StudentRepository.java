package org.jsp.springbootstudentmanagement.repository;

import org.jsp.springbootstudentmanagement.dto.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	
	 Student findByEmail(String email);
	
	

}
