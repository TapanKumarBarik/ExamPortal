package com.exam.examserver.service.implementation;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examserver.Repo.RoleRepository;
import com.exam.examserver.Repo.UserRepository;
import com.exam.examserver.model.User;
import com.exam.examserver.model.UserRole;
import com.exam.examserver.service.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Autowired
	private RoleRepository roleRepository;

	
	
	//creating user
	@Override
	public User CreateUser(User user, Set<UserRole> userRoles) throws Exception  {
		// TODO Auto-generated method stub
		//throws Exception
		
		User localUser=this.userRepository.findByUserName(user.getUserName());
		
		if(localUser!=null) {
			System.out.println("USER IS ALREADY PRESENT !!");
			throw new Exception("USER IS ALREADY PRESENT !!");
		}
		
		else {
			
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			
			localUser=this.userRepository.save(user);
			
			
		}
		return localUser;
	}

}
