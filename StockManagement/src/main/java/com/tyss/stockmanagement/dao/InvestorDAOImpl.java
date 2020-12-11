package com.tyss.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tyss.stockmanagement.entites.Investor;
import com.tyss.stockmanagement.entites.StockMovement;
import com.tyss.stockmanagement.entites.User;

@Repository
public class InvestorDAOImpl implements InvestorDAO {

	@PersistenceContext
	EntityManager manager;

	@Override
	@Transactional
	public Investor updateInvestor(Investor investor) {

		Investor investor1 = manager.find(Investor.class, investor.getInvestorId());
		BeanUtils.copyProperties(investor, investor1);
		return investor1;
	}

	@Override
	@Transactional
	public List<Investor> getAllInvestors() {
		return manager.createQuery("FROM Investor",Investor.class).getResultList();
	}
	
	@Override
	@Transactional
	public Investor addInvestor(User user) {
		Investor invest = new Investor();
		invest.setUser(user);
		manager.persist(invest);
		return invest;
	}

	@Override
	@Transactional
	public StockMovement getMovement(StockMovement move) {
		manager.persist(move);
		return move;
	}

	@Override
	@Transactional
	public Investor getInvestor(User user) {
		TypedQuery<Investor> query=manager.createQuery("from Investor I where I.user=:data",Investor.class);
		query.setParameter("data", user);
		return query.getSingleResult();
	}
}