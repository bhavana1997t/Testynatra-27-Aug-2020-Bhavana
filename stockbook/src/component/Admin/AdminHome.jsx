import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { Button } from 'react-bootstrap';
import User from "./investor.jpeg";
import { withRouter } from "react-router-dom";
import Add from "./AddAdmin";
import axios from "axios";
import Company from "./AddCompany";
import Update from "./UpdateAdmin";
import BlockedUser from "./BlockUser";
import BlockedCompany from './BlockCompany';


function AdminHome(props) {
  const [adminClick, setAdminClick] = useState(false);
  const [comp, setComp] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [compClick, setCompClick] = useState(false);
  const[updateCom,setUpdateCom]=useState({});
  const[updateClick,setUpdateClick]=useState(false);
  const [users, setUsers] = useState([]);
  const[userClick,setUserClick]=useState(false);
  const [companysClick, setCompanyClick] = useState({});
  const [companyClick, setCompyClick] = useState(false);


  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/StockManagement/company/companies",
    }).then((response) => {
      console.log(response);
      setCompanies(response.data.data);
      console.log(companies);
    });
  }, []);

  useEffect(()=>{
    axios({
      method:"GET",
      url:"http://localhost:8080/StockManagement/users/user",
    }).then((response)=>{
      console.log(response);
      setUsers(response.data.data);
      console.log(users);
    })
  },[])
  
  function handleAd() {
    setComp(false);
    setCompClick(false);
    setCompyClick(false);
    setUpdateClick(false);
    setUserClick(false);
    setAdminClick(!adminClick);
  }
  function companyFunc() {
    setComp(false);
    setUserClick(false);
    setAdminClick(false);
    setUpdateClick(false);
    setCompyClick(false);
    setCompClick(!compClick);
  }
  function handleOut() {
    localStorage.removeItem(props.location.userData.email);
    props.history.push("/SignIn");
  }
  function handleCompany() {
    setAdminClick(false);
    setUserClick(false);
    setCompClick(false);
    setCompyClick(false);
    setUpdateClick(false);
    setComp(!comp);
  }
  function compUpdate(event){
    setUpdateCom(event.target.value);
    console.log(updateCom);
  }
  function updateAd(){
    setAdminClick(false);
    setCompClick(false);
    setComp(false);
    setCompyClick(false);
    setUserClick(false);
    setUpdateClick(!updateClick);
  }
  function BlockUser(){
    setAdminClick(false);
    setCompClick(false);
    setCompyClick(false);
    setComp(false);
    setUpdateClick(false);
    setCompyClick(false);
    setUserClick(!userClick);
  }
  function BlockCompany(){
    setAdminClick(false);
    setCompClick(false);
    setCompyClick(false);
    setComp(false);
    setUpdateClick(false);
    setUserClick(false);
    setCompyClick(!companyClick); 
  }
  function userFunc(){
    setAdminClick(false);
    setCompClick(false);
    setCompyClick(false);
    setComp(false);
    setUpdateClick(false);
    setCompanyClick(false);
    setUserClick(!userClick);
  }
  if (props.location.userData) {
    return (
      <>
        <div className="top">
          <div className="text-center bg-dark pb-4">
            <img src={User} className="responsive" alt="User" />
            <br />
            <hr />
            <br />
            <h1 className="text-light user">
              Welcome {props.location.userData.userName}
            </h1>
          </div>
          <div className="text-center btns pt-4 pb-4 bg-primary">
          <Button variant="dark" className="mr-3" onClick={handleAd}>
              <i class="fas fa-plus-circle"></i> Add Admin
            </Button>
            <Button variant="dark" className="mr-3" onClick={updateAd}>
              Update
            </Button>
            <Button variant="dark" className="mr-3" onClick={handleCompany}>
              <i class="fas fa-plus-circle"></i> Add Company
            </Button>
            <Button variant="dark" className="mr-3" onClick={companyFunc}>
              view Companies
            </Button>
            <Button variant="danger" className="mr-3" onClick={BlockUser}>
              <i class="fas fa-plus-circle"></i> Block User
            </Button>
            <Button variant="danger" className="mr-3" onClick={BlockCompany}>
              <i class="fas fa-plus-circle"></i> Block Company
            </Button>
            
            <Button variant="danger" className="mr-3" onClick={handleOut}>
              Logout
            </Button>
         
          </div>
          <div className="admin">
            {adminClick && <Add userData={props.location.userData} />}
          </div>
          <div className="admin">
            {companyClick && <BlockedCompany userData={props.location.userData} />}
          </div>
          <div className="admin">
            {userClick && <BlockedUser userData={props.location.userData} />}
          </div>
          <div className="admin">
            {comp && <Company userData={props.location.userData} />}
          </div>
          <div>
            {updateClick && <Update userData={props.location.userData} /> }
          </div>
          <div>
          
              <div className="users">
                {users.map((userDetails)=>{
                  if(userClick){
                    return(
                      <>
                      <div className="pop col-md-4 offset-md-4 card card-body bg-dark text-light mt-5 mb-5">
                        <h3 className="text-success"> {userDetails.status}</h3>
                      <h2 className="text-center cname" key={userDetails.userId}>
                        {userDetails.userName}
                  <hr/>
                   <h4 className="text-muted text-center">
                   {userDetails.role}
                        </h4>
                        
                      
                      </h2>
                    
                    </div>
                    </>
                    );
                  }else{
                    return null;
                  }
                })}

              </div>
            
          </div>
          {
            <div className="companies">
            {companies.map((detail) => {
              if (compClick) {
                return (
                  <>
                    <div className="pop col-md-4 offset-md-4 card card-body bg-dark text-light mt-5 mb-5">
                    <h3 className="text-success"> {detail.status}</h3>
                      <h2 className="text-center cname" key={detail.companyId}>
                        {detail.companyName}
                      </h2>
                      <hr />
                     
                    
                    </div>
                  </>
                );
              } else {
                return null;
              }
            })}
          </div>
          }
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="text-center msg">
          Something wnet wrong please SignIn again....!
        </p>
      </>
    );
  }
}
export default withRouter(AdminHome);