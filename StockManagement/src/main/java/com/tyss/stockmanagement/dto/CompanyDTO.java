package com.tyss.stockmanagement.dto;

import java.io.Serializable;

import lombok.Data;

@Data

public class CompanyDTO implements Serializable {

	private int companyId;
	private String companyName;
	private String companyAddress;
	private int phone;
	private String status;
}
