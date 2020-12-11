import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import './SignIn.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      mail: '',
      pass: '',
      udata: {}
    };
  }
  setEmail = (event) => {
    this.setState({ mail: event.target.value });
  }
  setPass = (event) => {
    this.setState({ pass: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.loginCheck();
    var body = {
      email: this.state.mail,
      password: this.state.pass
    }

    let json = JSON.stringify(body);

    axios({
      method: 'post',
      url: 'http://localhost:8080/StockManagement/users/auth',
      data: json,
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      this.setState({ udata: response.data.data });
      localStorage.setItem(response.data.data.email,JSON.stringify(response.data.data));
      console.log(this.state.udata);
      if (this.state.udata.role === "Manager" && this.state.udata.status==="Active") {
        this.props.history.push({
          pathname:'/company',
          userData: response.data.data
        });
      } else if (this.state.udata.role === "Admin" && this.state.udata.status==="Active") {
        this.props.history.push({
          pathname:'/admin',
          userData: response.data.data
        })
      } else if (this.state.udata.role === "Investor" && this.state.udata.status==="Active") {
        this.props.history.push({
          pathname:'/Investor',
          userData: response.data.data
        });
      } else {
        console.log("Incorrect");
        document.write("Provide proper Input")
      }
    }).catch(err => {
      console.log(err);
    });
    document.myform.reset();
  }


  render() {
    return (
      <div className="first">
        <div className="formdiv col-md-4 mr-auto card card-body ml-auto mt-5 mb-5">
          <div>
   
          </div>

          <form name="myform" className="logform" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="mail">Email address</label>
              <input type="email" required onChange={this.setEmail} className="form-control" name="email" placeholder="Enter Your email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group mb-5">
              <label for="exampleInputPassword1" className="pass">Password</label>
              <input type="password" required onChange={this.setPass} className="form-control" name="password" placeholder="Enter Your password" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-success">Submit</button><br />
          </form>
        </div>
        <p className="text-center mt-5 mb-5">Or, <a onClick={() => this.props.history.push('/signup')} href="http://localhost:3000/SignUp">Signup</a>  now to Start Invest</p>
      </div>
    );
  }
}
export default withRouter(Login);