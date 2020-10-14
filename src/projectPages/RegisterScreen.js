import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { getManagerId } from "../Utils/Common";
import { useState } from "react";

function RegisterScreen(props){
 
 
     let Name;
     let EmailId;
     let ManagerId;
     let Password;
     let PlaceOfBirth;
     let RetypePwd;
     const [loading, setLoading] = useState(false);
  

  const handleName = (event) => {
     Name=event.target.value ;
  };
  const handleEmailId = (event) => {
    EmailId= event.target.value 
  };
  const handleManagerID = (event) => {
     ManagerId= event.target.value
  };

  const handlePassword = (event) => {
    Password=event.target.value 
  };
  const handleReType = (event) => {
    RetypePwd=event.target.value 
  };
  const handlePlaceOfBirth = (event) => {
    PlaceOfBirth= event.target.value ;
  };
  const handleRegister = (event) => {
    event.preventDefault();

   
    const url= 'http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers';
    axios
    .post(
      "http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers",
     {
        name: Name,
        emailId: EmailId,
        managerId:parseInt(ManagerId),
        password: btoa(Password),
        resetHint: PlaceOfBirth,
        reTypePassword:btoa(RetypePwd)
      },
      {
        headers: {
          "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
          "client_secret":"F2c85252ac554f6889f71431C80675cC",
          "Content-Type": "application/json"
        },
      }
    ).then((response) => {
      console.log("Register Successfull");
      console.log("response...", response);
      setLoading(false);
      
      props.history.push("/login");
    }).catch((error) => {
        
        console.log("exception while getting users");
      });
  };


    return (
      <React.Fragment>
        <div class="jumbotron card container">
        <form>
  <div class="form-group">
                <h1 class="mb-0 mr-4 mt-2">Register with</h1>
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Name</h6>
                </label>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={(event) => handleName(event)}
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">EmailId</h6>
                </label>
                <input
                  class="form-control"
                  type="text"
                  name="email"
                  placeholder="Enter a valid Email Address"
                  onChange={(event) => handleEmailId(event)}
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">ManagerId</h6>
                </label>
                <input
                 class="form-control"
                  type="number"
                  name="managerId"
                  placeholder="Enter a valid ManagerId"
                  onChange={(event) => handleManagerID(event)}
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">Password</h6>
                </label>
                <input
                class="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={(event) => handlePassword(event)}
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">ReType Password</h6>
                </label>
                <input
                  class="form-control"
                  type="password"
                  name="retype password"
                  placeholder="Retype Password"
                  onChange={(event) => handleReType(event)}
                />
              </div>
              <div class="row px-3">
                <label class="mb-1">
                  <h6 class="mb-0 text-sm">ResetHint</h6>
                </label>
                <input
                  class="form-control"
                  type="text"
                  name="placeOfBirth"
                  placeholder="Enter PlaceOfBirth"
                  onChange={(event) => handlePlaceOfBirth(event)}
                />
              </div>
              <div class="row px-3 mb-4">
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                  class="form-control"
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    class="custom-control-input"
                  />
                </div>
               
              </div>
              <div class="row mb-3 px-3">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={(event) => handleRegister(event)}
                >
                  Register
                </button>
              </div>
              <div class="row mb-3 px-3">
                <button
                  type="submit"
                  class="btn btn-primary"
                
                >
                  Reset Password
                </button>
              </div>
            

            <div class="bg-blue py-4">
              <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2">
                  Copyright &copy; 2019. All rights reserved.
                </small>
                <div class="social-contact ml-4 ml-sm-auto">
                  <span class="fa fa-facebook mr-4 text-sm"></span>
                  <span class="fa fa-google-plus mr-4 text-sm"></span>
                  <span class="fa fa-linkedin mr-4 text-sm"></span>
                  <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

export default RegisterScreen;
