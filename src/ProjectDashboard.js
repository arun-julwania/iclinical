import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class ProjectDashboard extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Dashboard</span>
                  <a
                    class="d-flex align-items-center text-muted"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6>
                <li class="nav-item">
                  <Link to="/project" class="nav-link" href="ProjectSetup">
                    <span data-feather="file"></span>
                    New Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    View Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users"></span>
                    Individual Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Delete Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Update Projects
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Milestones</span>
                <a
                  class="d-flex align-items-center text-muted"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="/Version">
                    <span data-feather="file-text"></span>
                    Project Version
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    View Versions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Individual Versions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Delete Versions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Update Versions
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
