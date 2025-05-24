package org.jsp.springbootstudentmanagement.service;

import org.jsp.springbootstudentmanagement.dto.TwilioConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

@Service
public class OtpService {
	   @Autowired
	    private TwilioConfig twilioConfig;

	    public String sendOTP(String toPhoneNumber, String otp) {
	        Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());

	        Message message = Message.creator(
	                new com.twilio.type.PhoneNumber(toPhoneNumber),
	                new com.twilio.type.PhoneNumber(twilioConfig.getPhoneNumber()),
	                "Your OTP is: " + otp
	        ).create();

	        return message.getSid();
	    }
	
}




