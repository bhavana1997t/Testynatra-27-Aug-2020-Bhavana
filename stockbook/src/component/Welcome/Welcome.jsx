import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './welcome.css';
function welcome() {
  return (
 
     
      <Jumbotron>
        <h1>Welcome to StockBook</h1>
        <p className="welcome"><br></br>
          The purpose of stock control is to reduce the costs of holding stock,
          while ensuring you can meet customer demand and making sure that there's enough material for 
          production.
          Businesses should always
          have a safe amount of stock so that they're able to react and cover any unforeseen issues.
  </p>
      </Jumbotron>
  )
}

export default welcome;