package com.exam.examserver.service;

import java.util.Set;



import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;



public interface UserService {

	
	//creating user
	
	public User CreateUser (User user, Set<UserRole>userRoles) throws Exception;
	
	public User GetUserByUserName(String userName);
	
	public User UpdateUser (User user,Long id) throws Exception;
	
	public void DeleteUserById(Long id);
}
