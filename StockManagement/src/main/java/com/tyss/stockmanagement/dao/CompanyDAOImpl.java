package com.tyss.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.tyss.stockmanagement.entites.Company;
import com.tyss.stockmanagement.entites.Stock;
import com.tyss.stockmanagement.entites.User;

@Repository
public class CompanyDAOImpl implements CompanyDAO {

	@PersistenceContext
	EntityManager manager;

	@Override
	@Transactional
	public Company addCompany(Company company) {
		manager.persist(company.getUser());
		manager.persist(company);
		return company;
	}

	@Override
	@Transactional
	public Company removeCompany(int companyID) {

		Company company1 = manager.find(Company.class, companyID);
		Company company = manager.find(Company.class, companyID);
		User user=manager.find(User.class, company.getUser().getUserId());
		if (company1 != null && user!=null) {
			manager.remove(company1);
			manager.remove(user);
			return company1;
		} else {

			return null;
		}
	}

	@Override
	@Transactional
	public Company updateCompany(Company company) {
		Company company1 = manager.find(Company.class, company.getCompanyId());

		User user=manager.find(User.class, company.getUser().getUserId());
		if(user!=null && company1!=null) {
			BeanUtils.copyProperties(company.getUser(),user);
			BeanUtils.copyProperties(company,company1);
			return company1;
		}else {
			return null;
		}
	}

	@Override
	@Transactional
	public Company getCompany(User user) {
		TypedQuery<Company> query = manager.createQuery("FROM Company C Where C.user =:uname",Company.class);
		query.setParameter("uname", user);
		return query.getSingleResult();
		}

	@Override
	@Transactional
	public List<Company> getAllCompany() {

		List<Company> companyList = manager.createQuery("FROM Company", Company.class).getResultList();
		return companyList;
	}

	@Override
	@Transactional
	public Stock addStock(Stock stock) {
		manager.persist(stock);
		return stock;
	}

	@Override
	@Transactional
	public Stock updateStock(Stock stock) {
		Stock stock1 = manager.find(Stock.class, stock.getStockId());
		BeanUtils.copyProperties(stock, stock1);
		return stock1;
	}

	@Override
	public List<Stock> getStock(Company company) {
		TypedQuery<Stock> query=manager.createQuery("from Stock S where  S.company=:comp",Stock.class);
		query.setParameter("comp", company);
		List<Stock> stockList = query.getResultList();
		List<Stock> stock = null;
		if (stockList.isEmpty()) {
			return stock;
		} else {
			return stockList;

		}
	}

	@Override
	public List<Company> getCompanyData(String companyNane) {
		TypedQuery<Company> query = manager.createQuery("FROM Company U Where U.companyName=:value", Company.class);
		query.setParameter("value", companyNane);
		List<Company> companyList = query.getResultList();
		List<Company> company = null;
		if (companyList.isEmpty()) {
			return company;
		} else {
			return companyList;

		}
	}
}
