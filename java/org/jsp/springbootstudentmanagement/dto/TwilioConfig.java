package org.jsp.springbootstudentmanagement.dto;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import lombok.Data;

@Configuration
@Component
@Data
@ConfigurationProperties(prefix = "twilio")
public class TwilioConfig {
	private String accountSid;
	private String authToken;
	private String phoneNumber;

}
