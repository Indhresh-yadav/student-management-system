package org.jsp.springbootstudentmanagement.service;

import org.jsp.springbootstudentmanagement.dao.AdminDao;
import org.jsp.springbootstudentmanagement.dto.Admin;
import org.jsp.springbootstudentmanagement.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;
	
	ResponseStructure<Admin> structure= new ResponseStructure<Admin>();
	
	public ResponseEntity<ResponseStructure<Admin>> saveAdmin(Admin admin){
		structure.setData(adminDao.saveAdmin(admin));
		structure.setMsg("admin data insereted sucessfully");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<Admin>> adminLogin(String username, String password){
		Admin admindb=adminDao.adminLogin(username);
		if(admindb.getPassword().equals(password)) {
			structure.setData(admindb);
			structure.setMsg("login sucessfully complted successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
			
		}else {
			return null;
		}
	}

}
