import axios from "axios";
import React, { Component } from "react";
import './Admin.css';

class BlockCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            udata: {},
            user: {},
            errorCheck: false
        }
    }
    userFunc = (ev) => {
        ev.preventDefault();
        let val = document.getElementById('Q').value;
        axios({
            method: 'GET',
            url: `http://localhost:8080/StockManagement/company/data?CompanyName=${val}`
        }).then(resp => {
            if (!resp.data.error) {
                document.getElementById('ele').style.display="none"
                document.getElementById('up').style.display="block"
                this.setState({ udata: resp.data.data[0] });
                this.setState({ user: resp.data.data[0].user });
            } else {
                document.getElementById('ele').innerText="No company Found";
                this.setState({ errorCheck: true });
            }
        })


    }
    submitHandler = (e) => {
        e.preventDefault();

        let object = {
            companyId: this.state.udata.companyId,
            companyName: document.getElementById('cname').value,
            companyPhone: document.getElementById('cph').value,
            companyAddress: document.getElementById('cadd').value,
            status: "Inactive",
            user:
            {
                userId: this.state.udata.user.userId,
                userName: document.getElementById('uname').value,
                phone: document.getElementById('cph').value,
                password: document.getElementById('pwd').value,
                email: document.getElementById('mail').value,
                address: document.getElementById('cadd').value,
                role: document.getElementById('role').value,
                status: "Inactive"
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
            .put("http://localhost:8080/StockManagement/company/manage", json, config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        document.getElementById('up').style.display = "none";
        document.getElementById('result').style.display = "block"
    }
    render() {
        return (
            <>
                <div className="col-md-4 offset-md-4 mt-5 mb-5 card card-body text-center res" id="result">
                    <span><strong>{this.state.udata.companyName}</strong></span> blocked Successfully
                </div>
                <div className="col-md-4 offset-md-4 mt-5 mb-5 blkform text-center" id="ele">
                    <form onSubmit={this.userFunc}>
                        <input type="text" id="Q" placeholder="Enter Company Name" required className="pl-2" />
                        <button className=" btn-primary " type="submit">search</button>
                    </form>
                </div>
                {
                    !this.state.errorCheck && <div id="up" className="blkform mt-5 mb-5 card card-body col-md-6 offset-md-3">
                        <form name="myForm" onSubmit={this.submitHandler}>
                            <h3 className="mb-5 text-muted text-center mt-5">Block Company</h3>

                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    id="cname"
                                    className="form-control"
                                    name="companyName"
                                    value={this.state.udata.companyName}
                                    placeholder="Enter Company Name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    id="cph"
                                    name="companyPhone"
                                    value={this.state.udata.companyPhone}
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
                                    value={this.state.udata.companyAddress}
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
                                    value={this.state.user.userName}
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
                                    value={this.state.user.email}
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
                                    value={this.state.user.password}
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

                            <div>
                                <button className="btn btn-danger mt-4 subtn" type="submit">Block</button>
                            </div>
                        </form>
                    </div>
                }

            </>
        );
    }
}

export default BlockCompany;