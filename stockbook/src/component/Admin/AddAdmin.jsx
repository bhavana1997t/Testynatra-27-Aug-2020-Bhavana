import React from "react";
import {  Button } from 'react-bootstrap';
import './Admin.css';
import axios from  'axios';
import { withRouter } from "react-router";

function AddAdmin(props){
    const handleSubmitClick = (e) => {
        e.preventDefault();
        let object = {};
        let formData=new FormData(e.target);
        formData.forEach((value,key)=>{
            object[key] = value;
            
        }
        );
        console.log(object);
        let json = JSON.stringify(object); 
        console.log(json); 


        const config = {     
            headers: { 'content-type' : "application/json" }
        }

        axios.post('http://localhost:8080/StockManagement/users/register', json,config).then((response)=>{
             console.log(response);
           })
           .catch((error)=>{
             console.log(error);
          });
        //   props.history.push("/Admin");
        let ele=document.getElementById('lub');
        ele.innerHTML="Admin Added Successfully";
        ele.style.textAlign="center";
        }
        return (
            
            <div className="col-md-4 offset-4 card card-body mt-5 mb-5" id="lub">
                
                <form onSubmit={handleSubmitClick} >
                    <h3>Add Admin</h3>

                    <div className="form-group">
                        <label> Full Name</label>
                        <input type="text" className="form-control" name="userName"  placeholder="enter your full name"  required/>
                    </div>

                    <div className="form-group">
                        <label>Mobile number</label>
                        <input type="number" className="form-control" name="phone" placeholder="enter your mobile number" />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <textarea type="textarea" name="address" className="form-control" placeholder="enter your address" />
                    </div>
                    

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter your email id"  required/>
                    </div>
                    

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter the password"  required/>
                    </div>
            
                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="Admin" checked name="role"/>
                    </div>

                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="Active" checked name="status"/>
                    </div>
                   
                   <div>
                       <input type="checkbox" checked/>  I agree the <a href="/terms">
                           Terms and conditons</a>
                   </div>
                   <br></br>
                    
                <div>
                    <Button variant="outline-primary" type="submit" >Add Admin</Button>{' '}
                     <Button variant="outline-danger" className="offset-4 " type= "reset">cancel</Button>{' '}
                    </div>

                </form>
            </div>
     
        );
    }
export default withRouter(AddAdmin);