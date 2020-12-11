import Update from './updateCompany';
import React, { Component } from "react";
import "./company.css";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Stocks from './AddStock';
import axios from "axios"

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company:{},
      stockClick: false,
      comClick:false,
    }
  }
  componentDidMount(){
    axios({
      method:'post',
      url:'http://localhost:8080/StockManagement/company',
      data:JSON.stringify(this.props.location.userData),
      headers: { "Content-Type": "application/json" }
    }).then((resp)=>{
      console.log(resp);
      this.setState({company:resp.data.data});
      console.log(this.state.company);
    })
  }

  getCompFunc=()=>{
    this.setState({stockClick:false});
    this.setState({comClick:!this.state.comClick});
  }
  handleOut = () => {
    localStorage.removeItem(this.props.location.userData.email);
    this.props.history.push("/SigIn");
  }
  handleStock=()=>{
    this.setState({comClick:false});
    this.setState({stockClick:!this.state.stockClick});
  }
  render() {
    if (this.props.location.userData) {
      return (
        <div className="top">
          <div className="text-center bg-secondary pb-4">
            <p className="responsive" alt="User" />
            <br />
            <hr />
            <br />
            <h1 className="text-light user">
              Hey {this.props.location.userData.userName}
            </h1>
          </div>
          <div className="text-center btns pt-4 pb-4 bg-primary">
            <Button variant="secondary" className="mr-5" onClick={this.handleStock}>
            <i class="fas fa-plus-circle"></i> Stock
            </Button>
            <Button variant="secondary" className="mr-5" onClick={this.getCompFunc}>
              Update
            </Button>
            <Button variant="danger" className="mr-5" onClick={this.handleOut}>
              Logout
            </Button>
            
          </div>
          <div className="stocks">
            {this.state.stockClick && <Stocks user={this.props.location.userData}/>}
            {this.state.comClick && <Update company={this.state.company} />}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <p className="text-center msg">Something went wrong please SignIn again...!
          </p>
        </>
      );
    }
  }
}
export default withRouter(CompanyHome);