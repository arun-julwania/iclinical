import React from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";

function Dashboard(props) {
  const user = getUser();
  let selectedPage = "";

  // handle click event of logout button
  const handleLogout = () => {
    //removeUserSession();
    props.history.push("/login");
  };

  const selectCat = (e) => {
    const operation = e.target.name;
    console.log("project Operation..", operation);
    selectedPage = "<" + operation + "/>";
    console.log("selectedPage..", selectedPage);
  };

  const versionsOperations = [
    "Project Version",
    "View Version",
    "Individual Version",
    "Delete Version",
    "Update Version",
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
            <li>
              <NavLink
                class="navbar-brand"
                activeClassName="active"
                to="/milestones"
              >
                Milestones
              </NavLink>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
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
                {versionsOperations.map((projectOp) => (
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
            {selectedPage}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;
