package org.jsp.springbootstudentmanagement.util;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class Otputil {
	  public String generateOtp() {
	        return String.valueOf(100000 + new Random().nextInt(900000));
	    }

}
