import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function MyNav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            WebSiteName
          </a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-user"></span> Sign Up
            </a>
          </li>
          <li>
            <a href="#">
              <span class="glyphicon glyphicon-log-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNav;
