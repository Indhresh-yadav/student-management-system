package org.jsp.springbootstudentmanagement.exception;

public class InvalidPassword extends RuntimeException {
	
	String msg;

	public InvalidPassword(String msg) {
		super(msg);
		
	}
	
	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage();
	}
	
	

}
