import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './Admin.css';

class BlockUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            udata: {},
            errorCheck: false
        };
    }
    userFunc = (ev) => {
        ev.preventDefault();
        let val = document.getElementById('Q').value;
        axios({
            method: 'GET',
            url: `http://localhost:8080/StockManagement/users?userName=${val}`
        }).then(resp => {

            if (!resp.data.error) {
                document.getElementById('ele').style.display = "none";
                let ele = document.getElementById('up')
                ele.style.display = "block";
                this.setState({ udata: resp.data.data[0] });
            } else {
                document.getElementById('ele').innerText = "No User Found";
                this.setState({ errorCheck: true });
            }
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        let object = {};
        let formData = new FormData(event.target);
        formData.forEach((value, key) => {
            object[key] = value;
        });
        object.userId = this.state.udata.userId;

        axios({
            method: 'put',
            url: 'http://localhost:8080/StockManagement/users/manage',
            data: JSON.stringify(object),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            console.log(response);
        })
            .catch((error) => {
                console.log(error);
            });

        document.getElementById('up').style.display = "none";
        document.getElementById('result').style.display = "block";
    };


    render() {
        return (
            <>
                <div className="col-md-4 offset-md-4 mt-5 mb-5 card card-body text-center res" id="result">
                    <span><strong>{this.state.udata.userName}</strong></span> blocked Successfully
                </div>
                <div className="col-md-4 offset-md-4 mt-5 mb-5 blkform text-center" id="ele">
                    <form onSubmit={this.userFunc}>
                        <input type="text" id="Q" placeholder="Enter User Name" required className="pl-2" />
                        <button className="btn btn-primary mt-3" type="submit">sub</button>
                    </form>
                </div>
                {
                    !this.state.errorCheck && <div id="up" className="m-auto mt-5 mb-5">
                    <form
                        action="/SigIn"
                        className="card card-body col-md-6 offset-md-3 mt-5 mb-5"
                        onSubmit={this.submitHandler}
                    >
                        <h2 className=" text-center text-muted pb-5">Block User</h2>

                        <div className="row mt-5">
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={this.state.udata.userName}
                                    name="userName"
                                    className="line form-control"
                                    placeholder="Enter Your FullName"
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Mobile</label>
                                <input
                                    type="number"
                                    required
                                    name="phone"
                                    value={this.state.udata.phone}
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
                                value={this.state.udata.address}
                                className="form-control"
                                placeholder="Enter Your address"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={this.state.udata.email}
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
                                value={this.state.udata.password}
                                className="form-control"
                                placeholder="Enter Your password"
                            />
                        </div>


                        <div className="form-group">
                            <input
                                type="radio"
                                readOnly="true"
                                className="rad form-control"
                                value={this.state.udata.role}
                                checked
                                name="role"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="radio"
                                readOnly="true"
                                className="rad form-control"
                                value="Inactive"
                                checked
                                name="status"
                            />
                        </div>

                        <div>
                            <Button variant="primary" type="submit">
                                Block
            </Button>
                        </div>
                    </form>
                </div>
                }
            </>
        );
    }
}

export default withRouter(BlockUser)