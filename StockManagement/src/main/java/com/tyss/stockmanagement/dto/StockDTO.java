package com.tyss.stockmanagement.dto;

import java.io.Serializable;

import lombok.Data;

@Data

public class StockDTO implements Serializable {

	private int stockId;
	private String stockName;
	private double stockAmount;
	private int availableStock;
	private int maxStock;

}
