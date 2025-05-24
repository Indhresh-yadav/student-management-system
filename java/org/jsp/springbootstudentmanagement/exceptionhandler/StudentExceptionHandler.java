package org.jsp.springbootstudentmanagement.exceptionhandler;

import org.jsp.springbootstudentmanagement.exception.InvalidEmail;
import org.jsp.springbootstudentmanagement.exception.InvalidId;
import org.jsp.springbootstudentmanagement.exception.InvalidPassword;
import org.jsp.springbootstudentmanagement.exception.NoDataFoundException;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class StudentExceptionHandler {
	
	ResponseStructure<String> structure=new ResponseStructure<String>();
	@ExceptionHandler(InvalidId.class)
	public ResponseEntity<ResponseStructure<String>> invalidId(InvalidId invalidId){
		structure.setData(invalidId.getMessage());
		structure.setMsg("fecthing failed");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(InvalidEmail.class)
	public ResponseEntity<ResponseStructure<String>> invalidId(InvalidEmail invalidEmail){
		structure.setData(invalidEmail.getMessage());
		structure.setMsg("fecthing failed");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
		
	}
	@ExceptionHandler(InvalidPassword .class)
	public ResponseEntity<ResponseStructure<String>> invalidId(InvalidPassword invalidPassword){
		structure.setData(invalidPassword.getMessage());
		structure.setMsg("fecthing failed");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(NoDataFoundException .class)
	public ResponseEntity<ResponseStructure<String>> noFDataFound(NoDataFoundException noDataFoundException){
		structure.setData(noDataFoundException.getMessage());
		structure.setMsg("fecthing failed");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
	}

}
