package com.exam.examserver;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.exam.examserver.model.Role;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.service.UserService;

@SpringBootApplication
public class ExamserverApplication  implements CommandLineRunner{

	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("IT IS WORKING");
		
		User user=new User();
		
		user.setFirstName("Tapan");
		user.setLastName("Barik");
		user.setUserName("tapanbarik9937");
		user.setPassword("");
		user.setEmail("tapankumarbarik7@gmail.com");
		user.setAbout("I am Tapan kumar Barik");
		user.setEnabled(true);
		user.setPhoneNo("9090075205");
		user.setProfile("Tapan.png");
		
		
		Role role1=new Role();
		
		role1.setRoleName("ADMIN");
		role1.setRoleId(44L);
		
		Set<UserRole>userRoleSet=new HashSet();
		
		UserRole userRole=new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		userRoleSet.add(userRole);
		
		User newUser=this.userService.CreateUser(user, userRoleSet);
		
		System.out.println(newUser.getEmail());
		
		
	}

}
