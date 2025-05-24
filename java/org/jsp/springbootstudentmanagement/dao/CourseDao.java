package org.jsp.springbootstudentmanagement.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.springbootstudentmanagement.dto.Course;
import org.jsp.springbootstudentmanagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CourseDao {
	@Autowired
	private CourseRepository courseRepository;
	
	public Course saveCourse(Course course) {
		return courseRepository.save(course);
	}
	public List<Course> fetchAllCourse(){
		return courseRepository.findAll();
		
	}
	public Course findCourse(Integer id) {
	Optional<Course> coursedb= courseRepository.findById(id);
	if(coursedb!=null) {
		return coursedb.get();
	}else {
		return null;
	}
	}

}
