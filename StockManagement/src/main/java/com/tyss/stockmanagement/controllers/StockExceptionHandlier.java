package com.tyss.stockmanagement.controllers;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.tyss.stockmanagement.dto.ResponseDTO;

@RestControllerAdvice
public class StockExceptionHandlier {
	@ExceptionHandler
	public ResponseDTO handler(Exception e) {
		ResponseDTO dto=new ResponseDTO();
		dto.setError(true);
		dto.setData(e.getMessage());
		return dto;
	}

}
