/*import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
function ContactUs(){
    return(
    <Jumbotron>      
        <div>
            <strong>Email: testyantra@gmail.com</strong>
            <strong>Phone: +91 9978678333</strong>
            <strong>Instagram: TYSS_banglore</strong>
        </div>
    </Jumbotron>
  
    )
}*/
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';


class ContactUs extends Component {
  
render() {
return (
    <Router>
        <Jumbotron>
<div className="condiv">
<h1 className="subtopic">Contact Us</h1>
<p></p>
<strong>phone:+91 (080) 4120-4235</strong><br></br>
<strong>Address: #88, 3rd Floor, Brigade Chambers,<br></br>
Gandhi Bazaar Main Rd, Basavanagudi, <br></br>Bangalore-560004 Karnataka, India</strong><br></br>
<strong>Email:  @testyantra.com</strong><br></br>
<strong>facebook: https://www.facebook.com/TestYantra</strong><br></br>
<strong>Instagram:@testyantraltd</strong><br></br>
<strong>website:http://testyantra.com/</strong><br></br>

</div>
</Jumbotron>
</Router>
)
}
}
export default ContactUs;