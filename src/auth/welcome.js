import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signin.css";
import logo from "../logo.svg";
import axios from "axios";
import ProjectSetup from "../ProjectSetup.js";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      managerId: "",
      password: "",
    };
  }

  handleClick(event) {
    let credentials = this.state.managerId + ":" + this.state.password;
    let base64Credentials = btoa(
      this.state.managerId + ":" + this.state.password
    );
    var self = this;
    var options = {
      'method': 'POST',
      'url': 'http://l9ro2.mocklab.io/login',
      'headers': {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': 'Basic '+base64Credentials
      }
    };

      axios(options)
        .then(function (response) {
          console.log(response);
          if (response.data.code == 200) {
            console.log("Login successfull");
            var projectSetup = [];
            projectSetup.push(
              <ProjectSetup appContext={self.props.appContext} />
            );
            self.props.appContext.setState({
              loginPage: [],
              projectSetup: projectSetup,
            });
          } else if (response.data.code == 204) {
            console.log("Username password do not match");
            alert("username password do not match");
          } else {
            console.log("Username does not exists");
            //alert("Username does not exist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    const handleInputChange = (event) => {
      const { id, value } = event.target;
      if (id === "managerId") {
        this.setState({ managerId: event.target.value });
      } else if (id === "password") {
        this.setState({ password: event.target.value });
      }
    };

    {
      var hrs = new Date().getHours();
      var greet;
      if (hrs < 12) greet = "Good Morning";
      else if (hrs >= 12 && hrs <= 16) greet = "Good Afternoon";
      else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
    }
    return (
      <div>
        <form class="form-signin">
          <img class="mb-4" src={logo} alt="Infosys" />
          <h1 class="h3 mb-3 font-weight-normal">Hello, {greet}...!</h1>
          <input
            type="email"
            id="managerId"
            class="form-control"
            placeholder="Manager ID"
            onChange={(e) => handleInputChange(e)}
            required
            autofocus
          />

          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            required
          />
          <button
            class="btn btn-md btn-primary btn-block"
            onClick={(event) => this.handleClick(event)}
            type="submit"
          >
            Sign in{" "}
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
          <button class="btn btn-md btn-primary btn-block" type="submit">
            Sign up{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-pencil-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
        </form>
      </div>
    );
  }
}

export default LoginPage;
