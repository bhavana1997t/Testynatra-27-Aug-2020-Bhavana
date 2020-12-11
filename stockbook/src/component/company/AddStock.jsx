import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./stock.css";
import { useEffect } from "react";

function Stock(props) {
  const [company, setCompany] = useState({});
  useEffect(() => {
    axios({
      method: "post",
      url: " http://localhost:8080/StockManagement/company",
      data: JSON.stringify(props.user),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        setCompany(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function submitHandle(event) {
    event.preventDefault();
    console.log(company);

    console.log(document.getElementById('avv').value);
    let stockData = {
      stockAmount: document.getElementById('amount').value,
      availableStock: document.getElementById('avv').value,
      maxStock: 80,
      company: {
        companyId: company.companyId,
        companyName: company.companyName,
        companyPhone: company.companyPhone,
        companyAddress: company.companyAddress,
        user: {
          userId: props.user.userId,
          userName: props.user.userName,
          phone: props.user.phone,
          password: props.user.password,
          email: props.user.email,
          address: props.user.address,
          role: props.user.role,
        },
      },
    };

    axios({
      method: "post",
      url: " http://localhost:8080/StockManagement/company/stock",
      data: JSON.stringify(stockData),
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      console.log(resp);
    });
    let ele = document.getElementById("main");
    ele.innerHTML = "Stock Added Successfully";
    ele.style.textAlign = "center";
  }

  return (
    <div id="main" className="col-md-4 offset-md-4 mt-5 mb-5 card card-body">
      <form className="" name="myform" onSubmit={submitHandle}>
        <h3 className="mt-5 mb-5 text-muted text-center">Add New Stock</h3>

        <div className="form-group">
          <label className="price text-muted">Stock Amount</label>
          <input
            type="number"
            name="stockAmount"
            id="amount"
            className="form-control"
            placeholder="Enter Stock Amount"
          />
        </div>
        <div className="form-group">
          <label className="price text-muted">Number Of Stocks</label>
          <input
            type="number"
            name="availabeStock"
            id="avv"
            className="form-control"
            placeholder="Enter Number of Stocks to Add"
          />
        </div>
        <div>
          <Button variant="secondary" className="btn btn-primary" type="submit">
            Add Stock
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Stock;