package com.exam.examserver.controller;

import com.exam.examserver.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.exam.examserver.model.JwtRequest;
import com.exam.examserver.model.JwtResponse;
import com.exam.examserver.service.implementation.UserDetailsServiceImpl;

import com.exam.examserver.config.JwtUtils;

import java.security.Principal;

@RestController
@CrossOrigin(origins="*")
public class AuthenticateController {

	 @Autowired
	    private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	
	@Autowired
	private JwtUtils jwtUtils;
	//generate token
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest)throws Exception{
		
		
		try {
			authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());
		}
		catch(UsernameNotFoundException e) {
			
			e.printStackTrace();
			throw new Exception("User not found");
			
		}
		
		//
		//authenticate
		
		UserDetails userDetails=this.userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
		
		String token=this.jwtUtils.generateToken(userDetails);
		
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	
	
	private void authenticate (String username, String password) throws Exception{

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		}
		catch(DisabledException e) {
			
			throw new Exception("User Disabled "+e.getMessage());
		}
		
		catch(BadCredentialsException e) {
		
			throw new Exception("Invalid Crentials "+e.getMessage());
		}
		
	}
	@GetMapping ("/current-user")
	public User getCurrentUserDetails(Principal principal){
		return ((User)this.userDetailsServiceImpl.loadUserByUsername(principal.getName()));
	}
}
