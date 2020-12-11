package com.tyss.stockmanagement.dto;

import java.io.Serializable;

import lombok.Data;

@Data

public class InvestorDTO implements Serializable {
	
	private int investorId;
	private String buyAmount;
	private String sellAmount;
	

}
