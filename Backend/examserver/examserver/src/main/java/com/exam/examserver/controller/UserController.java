package com.exam.examserver.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public User CreateUser(@RequestBody User user) throws Exception {
		
		Role role1=new Role();
		
		role1.setRoleName("NORMAL");
		role1.setRoleId(45L);
		Set<UserRole>userRoleSet=new HashSet();
		UserRole userRole=new UserRole();
		
		userRole.setRole(role1);
		userRole.setUser(user);
		userRoleSet.add(userRole);
		
		User newUser=this.userService.CreateUser(user, userRoleSet);
		return user;
	}
	
	@GetMapping("/{username}")
	public User GetUser(@PathVariable ("username") String userName) {
		
		User newUser=this.userService.GetUserByUserName(userName);
		return newUser;
	}
	
	@PutMapping("/{Id}")
	public User UpdateUser(@PathVariable ("Id")Long id,  @RequestBody User user) throws Exception {
				
		User newUser=this.userService.UpdateUser(user,id);
		return user;
	}
	
	
	@DeleteMapping("/{Id}")
	public String DeleteUser(@PathVariable ("Id") Long id) {
		
		this.userService.DeleteUserById(id);
		return "User is Successfully Deleted";
	}
	
	
	
}
