package org.jsp.springbootstudentmanagement.controller;

import java.io.IOException;
import java.util.List;

import org.jsp.springbootstudentmanagement.dto.Course;
import org.jsp.springbootstudentmanagement.service.CourseService;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/indhreshyadav")

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class CourseController {
	@Autowired
	private CourseService courseService;
	@PostMapping("/savecourse")
	public ResponseEntity<ResponseStructure<Course>> saveCourse(@RequestParam String courseName,@RequestParam MultipartFile  file,@RequestParam String authorName) throws IOException{
		return courseService.saveCourse(courseName, authorName,file);
	}
	@GetMapping("/fetchallcourse")
	public ResponseEntity<ResponseStructure<List<Course>>> fetchallcourse(){
		return courseService.fetchAllCourse();
	}
	@GetMapping("/fetchpdf/{id}")
	public ResponseEntity<byte[]> fetchpdf(@PathVariable Integer id){
		return courseService.findCourse(id);
	}

}
