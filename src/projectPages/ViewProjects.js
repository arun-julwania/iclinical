import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { getManagerId,getPassword } from "../Utils/Common";
import projectDetailsJson from "./projectDetailsJson.js";
//import IndividualProject from "./IndividualProject";


export default class ViewProjects extends React.Component {
  state = {
    projects: [],
    selectedProject: "",
    dropdownLoad: false,
    projectNames:[],
    individualjson:{},
    projectName :"",
    phases:{},
    applicationCosts:{},
    grantAccessTo:"",
    jsonStatus:false
  };

  

  render() {
    const manager = getManagerId();
    const pwd=getPassword();
    

    {
      if (!this.state.dropdownLoad) {
        this.setState({ dropdownLoad: true });
        axios
        .get(
          `http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${manager}/projects?password=${btoa(pwd)}`,
          
          {
            headers: {
              "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
              "client_secret":"F2c85252ac554f6889f71431C80675cC",
              "Content-Type": "application/json"
            },
          }
        )
          .then((response) => {
            this.setState({ projects: response.data });
           //this.setState({ selectedProject: response.projectName[0] });
           //let tempProjects={...this.state.projects};
            console.log("response.data...", response.data);
      
           
          })
          .catch((error) => {
            this.setState({ dropdownLoad: false });
            console.log(error);
          });
      }
    }

    const deleteProject = (e) => {
      axios
       .get(
         `http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${manager}/projects/${this.state.projectName}?password=${btoa(pwd)}`,
         {
           headers: {
             "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
             "client_secret":"F2c85252ac554f6889f71431C80675cC",
             "Content-Type": "application/json"
           },
         }
       )
       .then((response) => {
         })
       .catch((error) => {
         
       });
 
     };

    const selectProject = (e) => {
      this.setState({ selectedProject: e.target.id });
      let name=e.target.id;
     
      console.log("printing the project" +name)
      axios
      .get(
        `http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${manager}/projects/${name}?password=${btoa(pwd)}`,
        
        {
          headers: {
            "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
            "client_secret":"F2c85252ac554f6889f71431C80675cC",
            "Content-Type": "application/json"
          },
        }
      )
      .then((response) => {
        
       this.setState({individualjson:response.data})
       this.setState({projectName:response.data['projectName']})
       this.setState({phases:response.data['phases']})
       this.setState({applicationCosts: response.data['applicationCost']})
       this.setState({grantAccessTo:response.data['grantAccessTo']})
        
      })
      .catch((error) => {
        
      });

    };

    return (
      <div class="jumbotron card container">
        <div class="dropdown">
          <button
            class="btn btn-primary  btn-lg dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.selectedProject === ""
              ? "Select"
              : this.state.selectedProject}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            {this.state.projects.map((project) => {
              console.log(project['projectName']);
              return (
                <button
                  class="dropdown-item"
                  id={project['projectName']}
                  onClick={(event) => selectProject(event)}
                  type="button"
                >
                  {project['projectName']}
                </button>
              );
            })}
          </div>
        </div>
        <div></div>
       
        
        <div className="container p-3 my-3 border">
      <form>
        <div>
          <p class="font-weight-normal">ManagerID : </p>
          <input type="text" class="form-control" value={manager} />
        </div>
        <div>
          <label class="mb-1">
            <h6 class="font-weight-normal">ProjectName:</h6>
          </label>
          <input type="text" class="form-control" value={this.state.projectName} />
        </div>
        <div className="text-sm-left">
          <p className="font-weight-normal">Phases</p>
          {Object.keys(this.state.phases).map((phase)=>{
            return(
              <div>
              <input type="text" class="form-control" value={phase} readOnly/>
              <input type="text" class="form-control" value={this.state.phases[phase]} readOnly/></div>
            );

          })}
            
    
          <p class="font-weight-normal">Applications Costs</p>
         
          {Object.keys(this.state.applicationCosts).map((phaseName)=>{
            return(
              <div>
              <input type="text" class="form-control" value={phaseName} readOnly/>

              {JSON.stringify((this.state.applicationCosts).phaseName)}
              
              </div>
            );

          })}
          <label class="mb-1">
            <h6 class="font-weight-normal">GrantAccessTo:</h6>
          </label>
          <input type="text" class="form-control" value={this.state.grantAccessTo} />
          <div></div>
        </div>
        <div>
          <button type="button" class="btn btn-primary" onClick={(event) => deleteProject(event)}>
            Delete Projects
          </button>
          {""}
          {""}
          {""}
          <button type="button" class="btn btn-primary">
            Update Projects
          </button>
        </div>
      </form>
    </div>



      </div>
    );
  }
}