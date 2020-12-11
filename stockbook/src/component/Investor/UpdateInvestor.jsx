 import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./investor.css";
import { withRouter } from "react-router-dom";

class UpdateInvestor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (event) => {
    event.preventDefault();
    let object = {};
    let formData = new FormData(event.target);
    formData.forEach((value, key) => {
      object[key] = value;
    });
    object.userId=this.props.user.userId;
    let json = JSON.stringify(object);
    console.log(json);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .put("http://localhost:8080/StockManagement/users/manage", json, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      let ele=document.getElementById("ele");
      ele.innerHTML="Update Successful";
      ele.style.textAlign="center";
  };
  render() {
    return (
      <div className="col-sm-6 offset-sm-3 mt-5 mb-5" id="ele">
        <form
          action="/login"
          className="regdiv p-5"
          onSubmit={this.submitHandler}
        >
          <h2 className=" text-center text-muted pb-5">Update</h2>

          <div className="row mt-5">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                required
                value={this.props.user.userName}
                name="userName"
                className="line form-control"
                placeholder="Enter Your FullName"
              />
            </div>

            <div className="form-group col-md-6">
              <label>Phone</label>
              <input
                type="number"
                required
                name="phone"
                className="line form-control"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              type="textarea"
              required
              name="address"
              className="form-control"
              placeholder="Enter Your address"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={this.props.user.email}
              required
              name="email"
              className="form-control"
              placeholder="Enter Your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              name="password"
              className="form-control"
              placeholder="Enter Your password"
            />
          </div>

          <div className="form-group">
            <input
              type="radio"
              readOnly="true"
              className="rad form-control"
              value="Investor"
              checked
              name="role"
            />
          </div>

          <div className="form-group">
            <input
              type="radio"
              readOnly="true"
              className="rad form-control"
              value="Active"
              checked
              name="status"
            />
          </div>

          <div>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateInvestor);