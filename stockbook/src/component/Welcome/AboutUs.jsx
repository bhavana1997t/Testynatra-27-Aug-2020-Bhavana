import React from 'react';
import { Jumbotron } from 'react-bootstrap';


function AboutUs(){
    return(
        <Jumbotron>
        <div>
            <p>
                <h3>Stock  Management System</h3>                                                                                      
<p>
This page outlines the Project. The project is to develop a Stock Management System. 
This page contains the work flow of the system and gives guidelines on how to build the functionality
 gradually in each of the course modules.
 </p>
<p>
This Web application is aimed at providing a standalone Stock Management System simulation, 
which is used by investors to buy stocks/shares of a company 
 There are three kind of users, (company manager) one who add the stocks and remove stocks
  from the application. This user can update the stocks that can be brought by the investors.
Investor,the one who can buy some stocks from the application as well as sell the stocks whatever user 
bought from the application in the application dashboard. And last type of user
 (admin) one who can do crud operation on company manager, 
 user and crud operation on companies that are visible to investors to buy stocks. Admin will decide how much
  stock an investor can buy and what is the maximum amount he/she can invest in one company.<br></br><br></br>
  </p>
<h2>Admin Module</h2>
o	User can login<br></br>
o	create,read,upadte and delete operation on Company manager user<br></br>
o	create,read,upadte and delete operation on Company which will be there in application to buy the stocks<br></br>
o	Decide what is the maximum amount one investor can invest in a company<br></br>
o	Decide what is the maximum number of stocks one investor can buy<br></br>
(Admin will add the company but number of stocks available, price of the stock will be added by company
 manager)<br></br><br></br>
<h2>Company Module</h2>
o	User can login (credentials will be shared by admin)<br></br>
o	Can change the password<br></br>
o	create,read,upadte and delete operation on stocks<br></br>
 
<h2>Investor Module</h2>
o	User can register/login<br></br>
o	Request for forgot password<br></br>
o	Update profile<br></br>
o	Buy stocks<br></br>
o	Sell stocks<br></br>
o	View all stocks which is bought by the user<br></br>

            </p>
        </div>
        </Jumbotron>
        )

    }
    export default AboutUs;