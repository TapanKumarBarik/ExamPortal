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



	@Override
	public User GetUserByUserName(String userName) {
		
		User localUser=this.userRepository.findByUserName(userName);
		return localUser;
	}


	@Override
	public User UpdateUser(User user,Long id) throws Exception {
		// TODO Auto-generated method stub
		
		//User localUser=this.userRepository.findByUserName(user.getUserName());
		User localUser=this.userRepository.getById(id);
		
		if(localUser==null) {
			System.out.println("USER IS NOT PRESENT !!");
			throw new Exception("USER IS NOT PRESENT !!");
		}
		
		else {
			

		   if(user.getAbout()!=null) {
			   localUser.setAbout(user.getAbout());
		   }
		   if(user.getEmail()!=null) {
			   localUser.setEmail(user.getEmail());
		   }
		   if(user.getFirstName()!=null) {
			   localUser.setFirstName(user.getFirstName());
		   }
		   if(user.getLastName()!=null) {
			   localUser.setLastName(user.getLastName());
		   }
		   
		   if(user.getPhoneNo()!=null) {
			   localUser.setPhoneNo(user.getPhoneNo());
		   }
		
			
			localUser=this.userRepository.save(localUser);
			
			
		}
		return localUser;
	}

	
	
	@Override
	public void DeleteUserById(Long id) {
		
		this.userRepository.deleteById(id);
		// TODO Auto-generated method stub
		
	}




}
