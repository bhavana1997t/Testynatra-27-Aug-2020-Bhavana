package com.tyss.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.stockmanagement.dao.CompanyDAO;
import com.tyss.stockmanagement.entites.Company;
import com.tyss.stockmanagement.entites.Stock;
import com.tyss.stockmanagement.entites.User;
import com.tyss.stockmanagement.exceptions.StockException;

@Service
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	private CompanyDAO dao;
	@Override
	public Company addCompany(Company company) {
		Company dto= dao.addCompany(company);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("company not found");
		}
	}

	@Override
	public Company removeCompany(int companyID) {
		Company dto=dao.removeCompany(companyID);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("company not found");
		}
	}

	@Override
	public Company updateCompany(Company company) {
		Company dto= dao.updateCompany(company);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("company not found");
		}
	}

	@Override
	public Company getCompany(User user) {

		Company dto= dao.getCompany(user);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Company not found");
		}
	}

	@Override
	public List<Company> getAllCompany() {
		List<Company> dto= dao.getAllCompany();
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Company not found");
		}
	}

	@Override
	public Stock addStock(Stock stock) {
		Stock dto=dao.addStock(stock);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Stock not found");
		}
	}

	@Override
	public Stock updateStock(Stock stock) {

		Stock dto= dao.updateStock(stock);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Stock not found");
		}
	}

	@Override
	public List<Stock> getStock(Company company) {
		List<Stock> dto= dao.getStock(company);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("Stock not found");
		}
	}

	@Override
	public List<Company> getCompanyData(String companyNane) {
		List<Company> dto= dao.getCompanyData(companyNane);
		if(dto!=null) {
			return dto;
		}
		else {
			throw new StockException("company not found");
		}
	}


}
