import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import RegisterScreen from "./projectPages/RegisterScreen";
import History from "./History";
import LoginScreen from "./LoginScreen";
import ProjectSetup from "./ProjectSetup";
import ProjectDashboard from "./ProjectDashboard";
import Version from "./Version.js";
import Welcome from "./auth/welcome.js";

export default class Routes extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route exact path="/login" component={Welcome} />

          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/project" component={ProjectSetup} />
          <Route exact path="/dashboard" component={ProjectDashboard} />
          <Route exact path="/version" component={Version} />
        </Switch>
      </Router>
    );
  }
}
