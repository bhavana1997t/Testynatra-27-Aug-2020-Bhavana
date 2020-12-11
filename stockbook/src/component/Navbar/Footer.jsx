import { Component } from 'react';
import AboutUs  from '../Welcome/AboutUs.jsx';
import  ContactUs from '../Welcome/ContactUs';
import PrivacyPolicy  from '../Welcome/PrivacyPolicy';
import  TermsAndConditions from '../Welcome/TermsAndConditions';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

class Footer extends Component{
   render(){
        return(

            <Router>
        <footer className="sticky-bottom">
            <div className="footdata">
                <Jumbotron>
  Testyantra Solutions: 50, 2nd Floor, Brigade MLR Center, Vanivilas Rd, Bengaluru, Karnataka 560004 | 
  <br />Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI and our Terms
   <br />of Use and Privacy Policy <br></br><br></br>
  <h5><a className="terms" href="/terms">Terms and conditions</a></h5><br /><br />
  <h5><a className="contact" href="/contact">ContactUs </a></h5><br /><br />
  <h5><a className="about" href="/about">About Us </a></h5><br /><br />
  <h5><a className="privacy" href="/privacy">Privacy Policy</a></h5>
  <Route path="/terms" component={TermsAndConditions} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
        <Route path="/privacy" component={PrivacyPolicy} />
</Jumbotron>
</div>
</footer>
</Router>

);
   }
    }
    export default Footer;