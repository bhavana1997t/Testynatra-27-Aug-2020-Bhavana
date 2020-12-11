import React, { Component } from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import "./investor.css";

class ManageStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      amount: 0,
      stock: {},
      avail: {}
    }
  }
  componentDidMount() {
    axios({
      method: "post",
      url: " http://localhost:8080/StockManagement/company/stocks",
      data: JSON.stringify(this.props.cname),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        typeof (resp.data.data[0]) === 'object' && this.setState({ stock: resp.data.data[0] });
        console.log(resp);
        console.log(this.state.stock);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  manageBuy = (event) => {
    event.preventDefault();
    let info = {
      buyAmount: this.state.amount,
      investorId: this.props.idata.investorId,
      sellAmount: 0,
      user: this.props.user,
    };

    axios({
      method: "put",
      url: "http://localhost:8080/StockManagement/investor/update",
      data: JSON.stringify(info),
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {console.log(resp); });
    document.getElementById('frm').innerHTML = "Thanks Buy";
    let d = new Date();
    let move = {
      movementDate: d,
      stock: this.state.stock,
      investor: this.props.idata,
    }
    console.log(move);
    axios({
      method: "post",
      url: " http://localhost:8080/StockManagement/investor/movement",
      data: JSON.stringify(move),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <>
        <Popup
          trigger={<button className="btn btn-success"> Buy</button>}
          position="top center"
        >
          <>
            <form className="popcard card card-body bg-dark text-light" id="frm" onSubmit={this.manageBuy}>
              <input
                type="number"
                id="stock"
                required
                className="popdata"
                placeholder="Number of stocks"
                onChange={(event) => {
                  this.setState({ value: event.target.value });
                  this.setState({ amount: event.target.value * this.state.stock.stockAmount });
                }}
              />
              <input
                type="number"
                id="amt"
                required
                className="popdata mt-3 mb-3"
                value={this.state.amount}
                placeholder="Amount"
              />
              <button className="btn btn-success">
                Buy
          </button>
            </form>
          </>
        </Popup>
      </>
    );
  }
}

export default ManageStock;