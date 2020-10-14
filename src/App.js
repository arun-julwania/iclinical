import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./welcome";
import Dashboard from "./Dashboard";
import Milestones from "./Milestones";
import "bootstrap/dist/css/bootstrap.min.css";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import RegisterScreen from "./projectPages/RegisterScreen";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Switch>
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/register" component={RegisterScreen} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/mileStones" component={Milestones} />
            <PrivateRoute path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
