package com.tyss.stockmanagement.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "company_id")
	private int companyId;

	// @Pattern(regexp = "[a-zA-Z]+\\\\.?")
	@Column(name = "company_name")
	private String companyName;

	@Column(name = "company_adress")
	private String companyAddress;

	// @Pattern(regexp = "(0/91)?[7-9][0-9]{9}")
	@Column(name = "company_phone")
	private Long companyPhone;
	
	@Column(name="status")
	private String status;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
}