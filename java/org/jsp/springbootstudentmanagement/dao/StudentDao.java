package org.jsp.springbootstudentmanagement.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.springbootstudentmanagement.dto.Student;
import org.jsp.springbootstudentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDao {
	@Autowired
	private StudentRepository studentRepository;
	//to save student
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	// to find student by id
	public Student findById(Integer id) {
		Optional<Student> studentdb=studentRepository.findById(id);
		if(studentdb.isPresent()) {
			return studentdb.get();
		}else{
			return null;
		}
	}
	// student login
	public Student studentLogin(String email) {
		return studentRepository.findByEmail(email);
	}
	// delete student by id
	public void deleteById(Integer id) {
		studentRepository.deleteById(id);
	}
	// update student
	
	public Student updateStudent(Student student) {
       Optional<Student> Studentdb=studentRepository.findById(student.getSid());
       if(Studentdb.isPresent()) {
    	   return studentRepository.save(student);
       }else {
    	   return null;
       }
       
       // `save` works for both insert and update 
    }
	//find all student
	 public List<Student> findAllStudents() {
	        return studentRepository.findAll();  // Returns a list of all students
	  }
	

}
