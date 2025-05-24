package org.jsp.springbootstudentmanagement.service;



import java.io.IOException;
import java.util.List;

import org.jsp.springbootstudentmanagement.dao.StudentDao;

import org.jsp.springbootstudentmanagement.dto.Student;
import org.jsp.springbootstudentmanagement.exception.InvalidEmail;
import org.jsp.springbootstudentmanagement.exception.InvalidId;
import org.jsp.springbootstudentmanagement.exception.InvalidPassword;
import org.jsp.springbootstudentmanagement.exception.NoDataFoundException;
import org.jsp.springbootstudentmanagement.util.EmailService;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StudentService {
	@Autowired
	private StudentDao studentDao;
	@Autowired
	private EmailService emailService;
	

	  
	
	
//	@Autowired
//	private OtpService otpService;
	ResponseStructure<Student> structure=new ResponseStructure<Student>();

//	public ResponseEntity<ResponseStructure<Student>> saveStudent(Student student, String phoneNumber, String otp) {
//	    if (!otpService.verifyOtp(phoneNumber, otp)) {
//	        ResponseStructure<Student> structure = new ResponseStructure<>();
//	        structure.setMsg("Invalid OTP");
//	        structure.setStatusCode(HttpStatus.BAD_REQUEST.value());
//	        structure.setData(null);
//	        return new ResponseEntity<>(structure, HttpStatus.BAD_REQUEST);
//	    }
//
//	    // OTP is valid, save student
//	    ResponseStructure<Student> structure = new ResponseStructure<>();
//	    structure.setData(studentDao.saveStudent(student));
//	    structure.setMsg("Student saved successfully");
//	    structure.setStatusCode(HttpStatus.CREATED.value());
//	    return new ResponseEntity<>(structure, HttpStatus.CREATED);
//	}

//	 
	// to save the student details ,MultipartFile multipartFile
	public ResponseEntity<ResponseStructure<Student>> saveStudent(Student student ){
		//student.setImg(multipartFile.getBytes());
	
			structure.setData(studentDao.saveStudent(student));
			structure.setMsg("Data insereted sucessfully");
			structure.setStatusCode(HttpStatus.CREATED.value());
			//emailService.sendAccountconfirmationMail(student.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.CREATED);
		
	}
	
	// to find the student details
	public ResponseEntity<ResponseStructure<Student>> findById(Integer id){
		 Student studentop=studentDao.findById(id);
		if(studentop!=null) {
			 // Student student=studentop.get();
			structure.setData(studentop);
			structure.setMsg("find by id is fetched sucessfully");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			//emailService.sendEmailAccountConfirmation(student.getEmail());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new InvalidId("student id not found");
		}
	}
	// to login the student 
	public ResponseEntity<ResponseStructure<Student>> studentLogin(String email ,String password){
		Student studentdb=studentDao.studentLogin(email);
		if(studentdb!=null) {
			if(studentdb.getPassword().equals(password) ){
				structure.setData(studentdb);
				structure.setMsg("login sucessfully");
				structure.setStatusCode(HttpStatus.OK.value());
				//emailService.sendAccountconfirmationMail(student.getEmail());
				return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.OK);
			}else {
				throw new InvalidPassword("password is in correct");
			}
		}else {
			throw new InvalidEmail("email is invalid");
		}
	}
	// to delete the student details by id
	public ResponseEntity<ResponseStructure<Student>> deleteById(Integer id){
		Student deleteStudent=studentDao.findById(id);
	if(deleteStudent!=null) {
		studentDao.deleteById(id);
		structure.setData(deleteStudent);
		structure.setMsg("deleted sucessfully");
		structure.setStatusCode(HttpStatus.OK.value());
		//emailService.sendAccountconfirmationMail(student.getEmail());
		return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.OK);
		}else {
		throw new InvalidId(" id not found");
		}
	}
	// Update student details
    public ResponseEntity<ResponseStructure<Student>> updateStudent(Student student) {
        Student updatedStudent = studentDao.updateStudent(student);
        structure.setData(updatedStudent);
        structure.setMsg("Student updated successfully");
        structure.setStatusCode(HttpStatus.OK.value());
        //emailService.sendUpdateDetailsMail(student.getEmail());
        return new ResponseEntity<ResponseStructure<Student>>(structure, HttpStatus.OK);
    }
    // Fetch all students
    public ResponseEntity<ResponseStructure<List<Student>>> findAllStudents() {
        List<Student> students = studentDao.findAllStudents();
        if (!students.isEmpty()) {
            ResponseStructure<List<Student>> listStructure = new ResponseStructure<>();
            listStructure.setData(students);
            listStructure.setMsg("All students fetched successfully");
            listStructure.setStatusCode(HttpStatus.OK.value());
            return new ResponseEntity<>(listStructure, HttpStatus.OK);
        } else {
            throw new NoDataFoundException("No students found");
        }
    }
    
    public ResponseEntity<ResponseStructure<Student>> uploadImage(int id,MultipartFile multipartFile) throws IOException{
		Student studentu=studentDao.findById(id);
		if(studentu!=null) {
			studentu.setSid(id);;
			studentu.setImg(multipartFile.getBytes());
			structure.setData(studentDao.updateStudent(studentu));
			structure.setMsg(" image upload");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Student>>(structure,HttpStatus.ACCEPTED);
		}else {
			throw new InvalidId("id not found");
		}
    	
    }
    public ResponseEntity<byte[]> fetchImage(int id){
    	Student studentdb=studentDao.findById(id);
    	if(studentdb!=null) {
    		byte[] img=studentdb.getImg();
    		HttpHeaders headers=new HttpHeaders();
    		headers.setContentType(MediaType.IMAGE_PNG);
    		return new ResponseEntity<byte[]>(img,headers,HttpStatus.FOUND);
    	}else {
    		throw new InvalidId("id not found");
    	}
    	
    }


}
