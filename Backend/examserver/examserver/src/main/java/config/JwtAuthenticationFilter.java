package config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.exam.examserver.service.implementation.UserDetailsServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtils jwtUtils;
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
	     // Get authorization header and validate
        final String requestTokenHeader = request.getHeader("Authorization");
        
        System.out.println(requestTokenHeader);
        
        String username=null;
        
        String jwtToken=null;
        
        if (requestTokenHeader!=null &&  requestTokenHeader.startsWith("Bearer ")) {
           
            //yes
        	
        	jwtToken=requestTokenHeader.substring(7);
        	
        	try {
        	username=this.jwtUtils.extractUsername(jwtToken);
        	}
        	catch(ExpiredJwtException e){
        		e.printStackTrace();
        		 System.out.println("Jwt token has expired");
        		 
        		
        	}
        	catch(Exception e) {
        		e.printStackTrace();
       		 System.out.println("Error");
        	}
        }
        else {
        	
        	System.out.println("Invalid Token , not start with bearer");
        	
        }
        
        
        
        
        //validate token
        
        //possible error
        
        if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
        	final UserDetails userDetails=this.userDetailsService.loadUserByUsername(username);
        	
        	
        	if(this.jwtUtils.validateToken(jwtToken, userDetails)) {
        		//token is valid
        		
        		
        		UsernamePasswordAuthenticationToken  usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
        		usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        		SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        	}
        	
        }
        else {
    		System.out.println("Invalid Token");
    	}
        
        filterChain.doFilter(request, response);
		
	}

}
