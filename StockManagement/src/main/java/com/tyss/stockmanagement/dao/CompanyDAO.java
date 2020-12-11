package com.tyss.stockmanagement.dao;

import java.util.List;

import com.tyss.stockmanagement.entites.Company;
import com.tyss.stockmanagement.entites.Stock;
import com.tyss.stockmanagement.entites.User;

public interface CompanyDAO {

	public Company addCompany(Company company);

	public Company removeCompany(int companyID);

	public Company updateCompany(Company company);

	public Company getCompany(User user);

	public List<Company> getAllCompany();

	public Stock addStock(Stock stock);

	public Stock updateStock(Stock stock);

	public List<Stock> getStock(Company company);

	public List<Company> getCompanyData(String companyNane);

}