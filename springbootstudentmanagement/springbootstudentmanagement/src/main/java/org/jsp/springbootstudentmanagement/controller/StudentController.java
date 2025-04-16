package org.jsp.springbootstudentmanagement.controller;

import java.io.IOException;
import java.util.List;

import org.jsp.springbootstudentmanagement.dto.Student;
import org.jsp.springbootstudentmanagement.service.StudentService;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class StudentController {
	@Autowired
	private StudentService studentService;
	@PostMapping("/savestudent")
	public ResponseEntity<ResponseStructure<Student>> saveStudent(@RequestBody Student student){
		return studentService.saveStudent(student);
		
	}
	@GetMapping("/findstudentid/{id}")
	public ResponseEntity<ResponseStructure<Student>> findById(@PathVariable Integer id){
		return studentService.findById(id);
	
		
	}
	@PostMapping("/studentlogin")
	public ResponseEntity<ResponseStructure<Student>> studentLogin(@RequestBody Student student){
		return studentService.studentLogin(student);
	}
	@DeleteMapping("/deletebyid/{id}")
	public ResponseEntity<ResponseStructure<Student>> deleteById(@PathVariable Integer id){
		return studentService.deleteById(id);
		
	}
	
	 
    @PutMapping("/updatestudent")
    public ResponseEntity<ResponseStructure<Student>> updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }
    
    
    @GetMapping("/findallstudents")
    public ResponseEntity<ResponseStructure<List<Student>>> findAllStudents() {
        return studentService.findAllStudents();
    }
    @PutMapping("/uploadimage/{id}")
    public ResponseEntity<ResponseStructure<Student>> uploadImage(@PathVariable int id,@RequestBody MultipartFile multipartFile) throws IOException{
		return studentService.uploadImage(id, multipartFile);
    	
    }
    @GetMapping("/fetchimage/{id}")
    public ResponseEntity<byte[]> fetchimage(@PathVariable int id){
    	return studentService.fetchImage(id);
    }
    
//    @PutMapping("/student/{sid}/course/{cid}")
//    public ResponseEntity<ResponseStructure<Student>> addCourseToStudent(@PathVariable int sid ,@PathVariable int cid){
//    	return studentService.addCourseToStudent(sid, cid);
//    }
	

}
