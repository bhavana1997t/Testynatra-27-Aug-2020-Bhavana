package com.tyss.stockmanagement.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tyss.stockmanagement.dto.ResponseDTO;
import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.StockMovement;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.service.InvestorService;

@RestController
@RequestMapping("/investor")
@CrossOrigin(origins = "*" )
public class InvestorController {

	@Autowired
	private InvestorService service;

	@PutMapping("/update")
	public ResponseDTO updateInvestor(@RequestBody Investor investor) {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.updateInvestor(investor));
		return response;
	}
	@PostMapping("/invest")
	public ResponseDTO getInvestor(@RequestBody User user) {
		ResponseDTO response=new ResponseDTO();
		response.setData(service.getInvestor(user));
		return response;
	}

	@GetMapping("/investors")
	public ResponseDTO getAllInvestors() {
		ResponseDTO response = new ResponseDTO();
		response.setData(service.getAllInvestors());
		return response;
	}

	@PostMapping("/movement")
	public ResponseDTO getMovement(@RequestBody StockMovement move) {
		ResponseDTO res = new ResponseDTO();
		res.setData(service.getMovement(move));
		return res;
	}

}