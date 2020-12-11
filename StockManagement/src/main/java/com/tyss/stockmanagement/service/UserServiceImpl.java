package com.tyss.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.stockmanagement.dao.InvestorDAO;
import com.tyss.stockmanagement.dao.UserDAO;
import com.tyss.stockmanagement.dto.UserDTO;
import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.exceptions.StockException;

@Service
public class UserServiceImpl  implements UserService{
	@Autowired
	private UserDAO dao;
	@Autowired
	private InvestorDAO investor;

	@Override
	public User addUser(User user) {
		User dto = dao.addUser(user);
		if((user.getRole()).equals("Investor")) {
		investor.addInvestor(user);
		}
	
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Unable to create user please try with some other name");
		}
	}

	@Override
	public User removeUser(int userID) {
		
		User dto=  dao.removeUser(userID);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("User not found");
		}
		 
	}

	@Override
	public User updateUser(User user) {

		User dto= dao.updateUser(user);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("User not found");
		}
	}

	@Override
	public List<User> getUser(String userName) {

		List<User> dto= dao.getUser(userName);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("User not found");
		}
	}

	@Override
	public User authenticateUser(UserDTO user) {
		
		User dto= dao.authenticateUser(user);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("User not found");
		}
	}

	@Override
	public List<User> getAllUsers() {
		List<User> dto= dao.getAllUsers();
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("user not found");
		}
	}

}
