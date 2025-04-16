package org.jsp.springbootstudentmanagement.util;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;
@Data
public class ListResponseStructure <T> {
	private String msg;
	private int statusCode;
	private List<T> data;
	private LocalDateTime dateTime=LocalDateTime.now();
}
