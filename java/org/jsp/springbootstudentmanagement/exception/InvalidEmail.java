package org.jsp.springbootstudentmanagement.exception;

public class InvalidEmail extends RuntimeException {
	
	String msg;

	public InvalidEmail(String msg) {
		super(msg);
		
	}
	
	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage();
	}
	

}
