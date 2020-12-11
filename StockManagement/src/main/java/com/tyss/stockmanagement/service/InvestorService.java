package com.tyss.stockmanagement.service;

import java.util.List;

import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.StockMovement;
import com.tyss.stockmanagement.entites.User;

public interface InvestorService {

	public Investor updateInvestor(Investor investor);
	public List<Investor> getAllInvestors();
	public StockMovement getMovement(StockMovement move);
	public Investor getInvestor(User user);
	
}
