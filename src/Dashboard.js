import React, { Component } from "react";
import { getUser, getManagerId, removeUserSession, removeProjectSubmitJson } from "./Utils/Common";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import ProjectSetup from "./projectPages/ProjectSetup.js";
import ViewProjects from "./projectPages/ViewProjects.js";

class Dashboard extends Component {
  state = {
    operation: "New Project",
  };
  render() {
    const user = getUser();
    const manager = getManagerId();
    console.log("User Name...,", user);
    // handle click event of logout button
    const handleLogout = () => {
      removeUserSession();
      removeProjectSubmitJson();
      window.location.href = "/login";
    };

    const selectCat = (e) => {
      this.setState({ operation: e.target.name });
      console.log("project Operation..", this.state.operation);
    };

    const projectsOperations = [
      "New Project",
      "View Projects",
      
    ];
    const versions = [];
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img class="mb-1" src={logo} alt="Infosys" />
            </a>
            <ul class="nav navbar-nav">
              <li class="active">
                <NavLink
                  class="navbar-brand"
                  activeClassName="active"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a class="navbar-brand">{" " + user + " "}</a>
              </li>
              <li>{"  "}</li>
              <li>
                <button class="btn btn-primary" onClick={handleLogout}>
                  {" "}
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div class="container-fluid">
          <div class="row">
            <nav
              id="sidebarMenu"
              class="col-md-3 col-lg-2 d-md-block  sidebar collapse text-right"
            >
              <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                  {projectsOperations.map((projectOp) => (
                    <li class="nav-item">
                      <a class="nav-link active">
                        <button
                          id={projectOp}
                          class="btn btn-lg btn-outline"
                          name={projectOp}
                          title={projectOp}
                          onClick={(event) => selectCat(event)}
                        >
                          {projectOp}
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <GetProjectComponent projectName={this.state.operation} />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;

function GetProjectComponent(props) {
  console.log("abdc..", props.projectName);
  switch (props.projectName) {
    case "New Project":
      return <ProjectSetup />;
      break;
    case "View Projects":
      return <ViewProjects />;
      break;

    default:
      break;
  }
}
