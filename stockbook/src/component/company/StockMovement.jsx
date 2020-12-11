import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, NavLink } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import logo from './logo.jpeg';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import './stock.css';

function StockMovement() {
    return (
      <div>

   
            <form className="col-md-4 offset-4 card card-body mt-5">
                    <h3>Stock Movement</h3>

                    <div className="form-group">
                        <label>Date </label>
                        <input type="Date" className="form-control" placeholder="Enter today's date" />
                    </div>

                    <div className="form-group">
                        <label>Stock</label>
                        <input type="number" className="form-control"  placeholder="Enter number of stock you want to buy" />
                    </div>
                    

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control"  placeholder="Enter your email address" />
                    </div>
                    
                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="Investor" checked name="role"/>
                    </div>

                    <div >
                    <Button variant="outline-primary">Add</Button>{' '}
                     <Button variant="outline-secondary">cancel</Button>{' '}
                     </div>
                </form>
                <Alert variant="success">
                     <Alert.Heading>Hey, nice to see you</Alert.Heading>
                     <p>
                          Dear user we are glad  that you are interested to buy the stock, we hope that you 
                          have read all the Terms and  Conditions before buying the stock . Please contact the
                          pany manager to proceed further.</p>
                          <hr />
                          <p className="mb-0">
                               Your Stock total amount is  </p>
                               </Alert>
          </div>
    );
}
export default StockMovement;