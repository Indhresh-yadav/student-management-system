package org.jsp.springbootstudentmanagement.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int aid;
	 private String name;
	 private Long mobile;
	 @Column(unique = true)
	 private String email;
	 @Column(unique = true)
	 private String username;
	 private String password;

	 
	 

}
