package org.jsp.springbootstudentmanagement.controller;

import java.io.IOException;
import java.util.List;

import org.jsp.springbootstudentmanagement.dto.Student;
import org.jsp.springbootstudentmanagement.service.StudentService;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/indhreshyadav")

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/savestudent")
	//, @RequestPart MultipartFile multipartFile
	public ResponseEntity<ResponseStructure<Student>> saveStudent(@RequestBody Student student){
		return studentService.saveStudent(student);
		
	}
	
//	@PostMapping("/savestudent")
//	public ResponseEntity<ResponseStructure<Student>> saveStudent(
//	    @RequestBody Student student,
//	    @RequestParam String phoneNumber,
//	    @RequestParam String otp) {
//	    return studentService.saveStudent(student, phoneNumber, otp);
//	}
	@GetMapping("/findstudentid/{id}")
	public ResponseEntity<ResponseStructure<Student>> findById(@PathVariable Integer id){
		return studentService.findById(id);
	}
	@GetMapping("/studentlogin")
	public ResponseEntity<ResponseStructure<Student>> studentLogin(@RequestParam String email ,@RequestParam String password){
		return studentService.studentLogin(email, password);
	}
	@DeleteMapping("/deletestudent/{id}")
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
    @PutMapping("/uploadimage/{sid}")
    public ResponseEntity<ResponseStructure<Student>> uploadImage(@PathVariable int sid,@RequestParam MultipartFile file) throws IOException{
		return studentService.uploadImage(sid, file);
    	
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
