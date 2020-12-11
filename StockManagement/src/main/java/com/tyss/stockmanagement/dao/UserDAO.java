package com.tyss.stockmanagement.dao;


import java.util.List;

import com.tyss.stockmanagement.dto.UserDTO;
import com.tyss.stockmanagement.entites.User;

public interface UserDAO{
	public User addUser(User user);
	public User removeUser(int userID);
	public User updateUser(User user);
	public List<User> getUser(String email);
	public User authenticateUser(UserDTO user);
	public List<User> getAllUsers();
}
