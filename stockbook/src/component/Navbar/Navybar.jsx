import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './nav.css';
import logo from './logo.jpeg';



class NavComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    }
}
  render() {
    let value;
    if (!this.state.isLoggedIn) {
        value="SignIn";            
    } else {
       value="SignIn";
    }
    return (
      <Router>
               <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand exact href="/"><img src={logo}></img><strong>StockBook</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/SignIn">
        <Button variant="outline-success" className="mr-5"  
        onClick={(event)=>{this.setState({isLoggedIn:!this.state.isLoggedIn})}}>{value}</Button>
        </Nav.Link>
         <Nav.Link href="/SignUp">
        <Button variant="outline-primary">SignUp</Button>
        </Nav.Link> 
            </Navbar.Collapse>
            </Navbar>
      </Router>
    );
    }
  }

export default NavComp;