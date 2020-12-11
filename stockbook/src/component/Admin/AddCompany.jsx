import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./Admin.css";

function AddCompany() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
            
            companyName:document.getElementById('cname').value,
            companyPhone:document.getElementById('cph').value,
            companyAddress:document.getElementById('cadd').value,
            status: "Active",
            user:
            {
                userName: document.getElementById('uname').value,
                phone: document.getElementById('cph').value,
                password: document.getElementById('pwd').value,
                email: document.getElementById('mail').value,
                address:document.getElementById('cadd').value,
                role: document.getElementById('role').value,
                status: "Active"
            }
            
        };
        let json = JSON.stringify(object);
        console.log(json);
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        axios
          .post("http://localhost:8080/StockManagement/company/register", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="Company Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Add Company</h3>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            id="cname"
            className="form-control"
            name="companyName"
            placeholder="Enter Company Name"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            id="cph"
            name="companyPhone"
            className="form-control"
            placeholder="Enter Contact Number"
          />
        </div>

        <div className="form-group">
          <label>Company Address</label>
          <textarea
            type="textarea"
            id="cadd"
            name="companyAddress"
            className="form-control"
            placeholder="Enter Company Address"
          />
        </div>

        <div className="form-group">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            id="uname"
            className="form-control"
            placeholder="Enter Manager Name"
          />
        </div>

        <div className="form-group">
          <label>Email </label>
          <input
            type="email"
            name="email"
            id="mail"
            className="form-control"
            placeholder="Enter Manager Email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="pwd"
            placeholder="Enter Manager password"
          />
        </div>

        <div className="form-group">
          <input
            type="radio"
            className="rad form-control"
            value="Manager"
            id="role"
            checked
            name="role"
          />
        </div>

        <div className="form-group">
          <input
            type="radio"
            className="rad form-control"
            value="Manager"
            checked
            name="role"
          />
        </div>

        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Add Company</button>
        </div>
      </form>
    </div>
  );
}
export default AddCompany;