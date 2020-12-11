import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, NavLink } from 'react-bootstrap';
import logo from './logo.jpeg';
import { Form, InputGroup, FormControl} from 'react-bootstrap';
import './stock.css';

function UpdateStock() {
    return (
      <div>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">search stock</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="search here"
        aria-label="CompanyName"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
            <h1 className="col-md-4 offset-4">Welcome to StockBook</h1><br></br>
            <form className="col-md-4 offset-4 card card-body mt-5">
                    <h3>Add New Stock</h3>

                    <div className="form-group">
                        <label>Stock Amount </label>
                        <input type="number" className="form-control" placeholder="Enter Stock Amount" />
                    </div>
                    

                    <div className="form-group">
                        <label>Maximum stock</label>
                        <input type="number" className="form-control" 
                        placeholder="Enter maximum stock investor can have" />
                    </div>
                    
                    <div className="form-group">
                        <input type="radio" className="rad form-control" value="stock" checked name="role"/>
                    </div>

                    <div >
                    <Button variant="outline-primary">Apply</Button>{' '}
                     <Button variant="outline-secondary">cancel</Button>{' '}
                     </div>
                     </form>
          </div>
    );
}
export default UpdateStock;