package com.tyss.stockmanagement.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Entity
@Data
public class User { 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId;
	
	@Column(name="role")
	private String role;
	
	@Column(name="status")
	private String status;

//	@Pattern(regexp = "")
	@Column(name="email", unique = true)
	private String email;
	

//	@Pattern(regexp = "")
	@Column(name="user_name", unique = true)
	private String userName;
	
	
//	@Pattern(regexp = "")
	@Column(name="password")
	private String password;
	
	
//	@Pattern(regexp = "")
	@Column(name="phone", unique = true)
	private Long phone;
	
	@Column(name="address")
	private String address;
}
