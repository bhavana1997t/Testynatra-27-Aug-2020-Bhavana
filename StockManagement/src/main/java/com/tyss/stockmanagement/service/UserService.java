package com.tyss.stockmanagement.service;


import java.util.List;

import com.tyss.stockmanagement.dto.UserDTO;
import com.tyss.stockmanagement.entites.User;

public interface UserService{
	public User addUser(User user);
	public User removeUser(int userID);
	public User updateUser(User user);
	public List<User> getUser(String userName);
	public User authenticateUser(UserDTO user);
	public List<User> getAllUsers();
	
}
