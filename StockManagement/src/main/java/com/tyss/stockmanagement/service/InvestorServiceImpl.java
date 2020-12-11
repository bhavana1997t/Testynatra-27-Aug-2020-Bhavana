package com.tyss.stockmanagement.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.stockmanagement.dao.InvestorDAO;
import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.StockMovement;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.exceptions.StockException;

@Service
public class InvestorServiceImpl implements InvestorService{
	@PersistenceContext
	EntityManager manager;
	@Autowired
	InvestorDAO dao;

	@Override
	public Investor updateInvestor(Investor investor) {
		
		Investor dto= dao.updateInvestor(investor);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Investor not found");
		}
	}


	@Override
	public List<Investor> getAllInvestors() {
		List<Investor> dto= dao.getAllInvestors();
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("investor not found");
		}
	}


	@Override
	public StockMovement getMovement(StockMovement move) {
		StockMovement movment=dao.getMovement(move);
		if(movment!=null) {
			return movment;		
		}else {
			throw new StockException("unable to create stock movement");
		}
	}


	@Override
	public Investor getInvestor(User user) {
		Investor dto= dao.getInvestor(user);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Investor not found");
		}
	}
}
