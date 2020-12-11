package com.tyss.stockmanagement.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.stockmanagement.dto.ResponseDTO;
import com.tyss.stockmanagement.dto.UserDTO;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*" ) 
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping("/register")
	public ResponseDTO register(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addUser(user));
		return response;

	}

	@PostMapping("/auth")
	public ResponseDTO login(@RequestBody UserDTO user) {
		System.out.println(user);
		ResponseDTO response = new ResponseDTO();
		response.setData(service.authenticateUser(user));
		return response;
	}

	@DeleteMapping("/{userID}")
	public ResponseDTO removeUser(@PathVariable int userID) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.removeUser(userID));
		return response;
	}

	@PutMapping("/manage")
	public ResponseDTO updateUser(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateUser(user));
		return response;
	}

	@GetMapping
	public ResponseDTO getUser(String userName) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getUser(userName));
		return response;
	}
	@GetMapping("/user")
	public ResponseDTO getAllUsers() {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getAllUsers());
		return response;
	}
}
