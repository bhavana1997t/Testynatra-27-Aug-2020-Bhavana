package com.tyss.stockmanagement.exceptions;

@SuppressWarnings("serial")
public class StockException  extends RuntimeException{
	
	public StockException(String message) {
		super(message);
	}

}
