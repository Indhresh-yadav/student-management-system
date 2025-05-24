package org.jsp.springbootstudentmanagement.repository;

import org.jsp.springbootstudentmanagement.dto.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository  extends JpaRepository<Course, Integer>{

}
