package org.jsp.springbootstudentmanagement.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;


@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;
    private String filename;
    private String filetype;
    private String courseName;
    private String authorName;
    @Lob
    @Column(length = 999999999)
    @JsonIgnore
    private byte[]data;
    
    
    
    
}

