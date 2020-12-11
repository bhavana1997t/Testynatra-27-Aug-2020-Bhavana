 import React, { Component } from 'react';
import Investor from '../Investor/Investor';
import Admin from '../Admin/AdminHome';
import Company from '../company/companyHome';
import Welcome from '../Welcome/Welcome';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import logo from '../Navbar/logo.jpeg';
import signin from '../SigIn/Login';
import signup from '../Investor/SignUp';

 class  RenderComponent extends Component{
   
    
    render() {

        return (
            <div>
            <Router>
              <Route exact path="/" component={Welcome}/>
                <Route path="/company" component={Company} />
                <Route path="/Investor" component={Investor} />
                <Route path="/admin" component={Admin} />
                <Route path='/SignUp' component={signup}/>
                <Route path='/SignIn' component={signin}></Route>
                
            </Router>
            </div>
        );
    }
 }

 export default RenderComponent;