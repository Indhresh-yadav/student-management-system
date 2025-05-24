package org.jsp.springbootstudentmanagement.dto;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;


@Data
@Entity
public class Student {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String email;
	private String password;
	private long mobile;
	private String gender;
	private int age;
	@Lob//to consider as large object
	@Column(columnDefinition = "longblob",length = 999999999)//size
	private byte img[];
	
	

}
