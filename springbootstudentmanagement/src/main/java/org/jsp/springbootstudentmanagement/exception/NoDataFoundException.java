package org.jsp.springbootstudentmanagement.exception;

public class NoDataFoundException  extends RuntimeException{
	
	String msg;

	public NoDataFoundException(String msg) {
		super(msg);
		
	}
	@Override
	public String getMessage() {
		// TODO Auto-generated method stub
		return super.getMessage();
	}
	

}
