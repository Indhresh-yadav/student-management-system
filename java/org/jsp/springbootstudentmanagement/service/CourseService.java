package org.jsp.springbootstudentmanagement.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.jsp.springbootstudentmanagement.dao.CourseDao;
import org.jsp.springbootstudentmanagement.dto.Course;
import org.jsp.springbootstudentmanagement.exception.InvalidId;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class CourseService {
	@Autowired
	private CourseDao courseDao;
	
	ResponseStructure<Course> structure=new ResponseStructure<Course>();
	public ResponseEntity<ResponseStructure<Course>> saveCourse(String courseName,String authorName,MultipartFile file) throws IOException{
		Course course=new Course();
		course.setCourseName(courseName);
		course.setAuthorName(authorName);
		course.setFilename(file.getOriginalFilename());
		course.setFiletype(file.getContentType());
		course.setData(file.getBytes());
		Course savedCourse=courseDao.saveCourse(course);
		structure.setData(savedCourse);
		structure.setMsg("pdf stored sucessfully");
		structure.setData(savedCourse);
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Course>>(structure,HttpStatus.OK);
	}
	
	ResponseStructure<List<Course>> liResponseStructure=new ResponseStructure<List<Course>>();
	public ResponseEntity<ResponseStructure<List<Course>>> fetchAllCourse(){
		liResponseStructure.setData(courseDao.fetchAllCourse());
		liResponseStructure.setMsg("fetched sucessfully");
		liResponseStructure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Course>>>(liResponseStructure,HttpStatus.OK);
	}
	
	public ResponseEntity<byte[]> findCourse(Integer id){
		Course coursedb=courseDao.findCourse(id);
		if(coursedb!=null) {
			byte[] course=coursedb.getData();
			HttpHeaders headers=new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_PDF);
			return new ResponseEntity<byte[]>(course,headers,HttpStatus.OK);
			
		}else {
			 throw new InvalidId(" id not found");
		}
		
	}

}
