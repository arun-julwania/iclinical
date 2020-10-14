import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth/signin.css";
import logo from "./logo.svg";
import axios from "axios";
import { setUserSession } from "./Utils/Common";
import RegisterScreen from "./projectPages/RegisterScreen";
import {Link} from "react-router-dom";


function LoginPage(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    console.log('usename', username);
    axios
      .get(`http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${parseInt(username.value)}`, { params: { password:btoa(password.value) } ,
      headers: {
        "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
			"client_secret":"F2c85252ac554f6889f71431C80675cC"
      }})
      .then((response) => {
        console.log("Login Successfull");
        console.log("response...", response);
        setLoading(false);
        setUserSession(
          username,
          password
        );
        props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log("Login Failue");
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  const handleSignUp = () => {
   
    props.history.push("/register");
  };

  {
    var hrs = new Date().getHours();
    var greet;
    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 16) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  }
  return (
    <div class="jumbotron card container">
      <form class="form-signin">
        <img class="mb-4" src={logo} alt="Infosys" />
        <h1 class="h3 mb-3 font-weight-normal">Hello, {greet}...!</h1>
        <input
          type="number"
          id="username"
          class="form-control"
          placeholder="Manager ID"
          {...username}
          autoComplete="new-password"
          required
          autofocus
        />

        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Password"
          {...password}
          autoComplete="new-password"
          required
        />
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <button
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
          class="btn btn-md btn-primary btn-block"
        >
          {" "}
          Signin
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-door-open-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
            />
          </svg>
        </button>
       <button  class="btn btn-md btn-primary btn-block" type="button" onClick={handleSignUp}>SignUp</button>
 
        <br />
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </form>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default LoginPage;
