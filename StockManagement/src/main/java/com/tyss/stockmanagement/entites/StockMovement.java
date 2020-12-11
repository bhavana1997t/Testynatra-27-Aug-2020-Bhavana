package com.tyss.stockmanagement.entites;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class StockMovement { 
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="movement_id")
	private int movenentId;
	
	
	@Column(name="movement_date")
	private Date movementDate;

	@ManyToOne
	@JoinColumn(name="stock_id")
	private Stock stock;
	
	
	@ManyToOne
	@JoinColumn(name="investor_id")
	private Investor investor;
	
	
	
	
}