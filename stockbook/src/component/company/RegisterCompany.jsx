import React, { Component } from "react";
import { Form, Button ,Dropdown} from 'react-bootstrap';
import './company.css';

function RegisterCompany(){
   
        return (
            <div className="col-md-4 offset-4 card card-body mt-5">
                <form>
                    <h3>Add New Admin</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="enter your name" />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" placeholder="enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea type="textarea" className="form-control" placeholder="enter your address" />
                    </div>
                    

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    
                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="Investor" checked name="role"/>
                    </div>
                   
                   <div>
                       <input type="checkbox" checked/><label>   I agree the Terms and conditons</label>
                   </div>

                   <div className="form-group">
                        <input type="radio" className="rad form-control" value="Admin" checked name="role"/>
                    </div>
                    
                    <div >
                    <Button variant="outline-primary">Add</Button>{' '}
                    <Button variant="outline-secondary">cancel</Button>{' '}
                    </div>

                </form>
            </div>
        );
    }
export default RegisterCompany;