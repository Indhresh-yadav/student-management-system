package org.jsp.springbootstudentmanagement.exception;

public class InvalidId extends RuntimeException {
	
	String msg;

	public InvalidId(String msg) {
		super(msg);
	}
	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage();
	}
	

}
