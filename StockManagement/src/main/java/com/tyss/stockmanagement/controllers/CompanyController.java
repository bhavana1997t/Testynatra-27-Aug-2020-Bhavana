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
import com.tyss.stockmanagement.entites.Company;
import com.tyss.stockmanagement.entites.Stock;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.service.CompanyService;

@RestController
@RequestMapping("/company")
@CrossOrigin(origins = "*" )
public class CompanyController {
	@Autowired
	private CompanyService service;
	
	@PostMapping("/register")
	public ResponseDTO addCompany(@RequestBody Company company) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addCompany(company));
		return response;
	}
	
	@DeleteMapping("/{companyId}")
	public ResponseDTO removeCompany(@PathVariable int companyId) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.removeCompany(companyId));
			return response;
	}
	
	@PutMapping("/manage")
	public ResponseDTO updateCompany(@RequestBody Company company) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateCompany(company));
			return response;
	}
	
	@GetMapping("/data")
	public ResponseDTO getCompanyData(String CompanyName) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getCompanyData(CompanyName));
		return response;
	}
	
	@PostMapping
	public ResponseDTO getCompany(@RequestBody User user) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getCompany(user));
			return response;
	}
	
	@GetMapping("/companies")
	public ResponseDTO getAllCompanies() {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getAllCompany());
			return response;
	}
	
	@PostMapping("/stock")
	public ResponseDTO addStock(@RequestBody Stock stock) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.addStock(stock));
			return response;
	}
	
	@PutMapping("/stock/manage")
	public ResponseDTO updateStock(@RequestBody Stock stock) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateStock(stock));
			return response;
	}
	@PostMapping("/stocks")
	public ResponseDTO getStock(@RequestBody Company company) {
	ResponseDTO response = new ResponseDTO();
	response.setData(service.getStock(company));
		return response;
	}
}
