package com.tyss.stockmanagement.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.StockMovement;
import com.tyss.stockmanagement.entites.User;

public interface InvestorDAO {
	public Investor addInvestor(User user);
	public Investor updateInvestor(Investor investor);
	public List<Investor> getAllInvestors();
	public StockMovement getMovement(StockMovement move);
	public Investor getInvestor(User user);
	

}
