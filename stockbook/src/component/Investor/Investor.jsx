import React, { Component } from "react";
import User from "./investor.jpeg";
import "./investor.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Pop from "./ManageStock";
import { Button } from 'react-bootstrap';
import Update from './UpdateInvestor';
import Companies from './ComoanyDetails';
class Investor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      compClick: false,
      updateClick:false,
      investor: {},
    };
  }
  updateFunc=()=>{
    this.setState({compClick:false});
    this.setState({updateClick:!this.state.updateClick});
  }
  handleOut = () => {
    localStorage.removeItem(this.props.location.userData.email);
    this.props.history.push("/SignIn");
  };
  handleComp = () => 
  {
    this.setState({updateClick:false});
    this.setState({ compClick: !this.state.compClick });
    console.log(JSON.stringify(this.props.location.userData));
    axios({
      method: "post",
      url: "http://localhost:8080/StockManagement/investor/invest",
      data: JSON.stringify(this.props.location.userData),
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      
      console.log("======investor==========");
      this.setState({ investor: resp.data.data});
      console.log(this.state.investor);
      
    }).catch(err=>console.log(err))
    axios({
      method: "get",
      url: "http://localhost:8080/StockManagement/company/companies",
    }).then((response) => {
      this.setState({ companies: response.data.data });
    });
  };
  render() {
    if (this.props.location.userData) {
      return (
        <div className="top">
          <div className="text-center bg-success pb-4">
            <img src={User} className="responsive" alt="User" />
            <br />
            <hr />
            <br />
            <h1 className="text-light user">
              Welcome {this.props.location.userData.userName}
            </h1>
          </div>
          <div className="text-center btns pt-4 pb-4 bg-dark">
            <Button variant="success" className="mr-5" onClick={this.handleComp}>
              Companies
            </Button>
           
            <Button variant="success" className="mr-5" onClick={this.updateFunc}>
              Update
            </Button>
            <Button variant="danger" className="mr-5" onClick={this.handleOut}>
              Logout
            </Button>
          </div>
      <div>{this.state.updateClick && <Update user={this.props.location.userData} />}</div>
          <div className="companies">
            {this.state.compClick && <Companies user={this.props.location.userData} idata={this.state.investor} />}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p className="text-center msg">
            404 <strong>Page Not Found</strong>
          </p>
        </>
      );
    }
  }
}

export default withRouter(Investor);