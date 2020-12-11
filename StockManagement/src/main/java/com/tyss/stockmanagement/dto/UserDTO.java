package com.tyss.stockmanagement.dto;

import java.io.Serializable;


import lombok.Data;
@Data

public class UserDTO implements Serializable {
	private int userId;
	private String role;
	private  String email;
	private String username;
	private String password;
	private String address;
	private int phone;
	private String status;
}
