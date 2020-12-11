import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./SignUp.css";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  submitHandler = (event) => {
    event.preventDefault();
    const pass = document.getElementById('pass');
    const repass = document.getElementById('repass');
    const phone = document.getElementById('ph');
    if ((pass.value.trim()) === (repass.value).trim() && phone.value.length === 10) {
      let object = {};
      let formData = new FormData(event.target);
      formData.forEach((value, key) => {
        object[key] = value;
      });
      let json = JSON.stringify(object);
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      axios
        .post("http://localhost:8080/StockManagement/users/register", json, config)
        .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        });
      this.props.history.push("/SignIn");
    } else {
      if ((pass.value.trim()) != (repass.value).trim()) {
        repass.focus();
        repass.style.outline = "3px solid red"
        repass.placeholder = "password's didn't match";
      }else{
        phone.focus();
        phone.style.outline = "3px solid red"
      }
    }
  };
  render() {
    return (
      <div className="col-sm-6 offset-sm-3  mt-5 mb-5">
        <form
          action="/SignIn"
          className="regdiv p-5"
          onSubmit={this.submitHandler}
        >
          <h2 className=" text-center text-muted pb-5">Sign Up</h2>

          <div className="row mt-5">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                required
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
                id="ph"
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
              id="pass"
              className="form-control"
              placeholder="Enter Your password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              name="repassword"
              id="repass"
              className="form-control"
              placeholder="Confirm Your password"
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
            <input type="checkbox" id="term" required className="mt-4 mb-5" />{" "}
            <label htmlFor="term">
              I agree the <a href="/terms">Terms and conditons</a>
            </label>
          </div>

          <div>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);