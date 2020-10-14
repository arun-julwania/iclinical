import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getManagerId, getPassword, setProjectSubmitJson, removeProjectSubmitJson, getProjectSubmitJson} from "../Utils/Common";
import { ApplicationCosts } from "../ApplicationCosts";
import axios from "axios";

export default class ProjectSetup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonList: {},
      selectedProject: "",
      projectName: "",
      phases: {
        build: 40,
        design: 30,
        test: 30,
      },
      applicationCost: {
        design: {
          complex: "",
          medium: "",
          simple: "",
        },
        build: {
          complex: "",
          medium: "",
          simple: "",
        },
        test: {
          complex: "",
          medium: "",
          simple: "",
        },
      },
      count: 0,
      ManagerId: "",
      grantAccessTo: "",
    };
    this.updateJsonList = this.updateJsonList.bind(this);
    this.updatedCount = this.updatedCount.bind(this);
  }
  updateJsonList(updatedJsonList) {
    this.setState({ jsonList: updatedJsonList });
  }
  updatedCount(updateCount) {
    this.setState({ count: updateCount });
  }

  componentDidMount() {
    const pwd = getPassword();
    const manager = getManagerId();
    const body = getProjectSubmitJson();
    console.log("Body taken from session", body);
    const headers = {
      client_id: "1dab35c4c33b48a1a2cc7a42d253330e",
      client_secret: "F2c85252ac554f6889f71431C80675cC",
      "Content-Type": "application/json",
    };
    

    axios
      .post(
        `http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${manager}/projects?password=${btoa(pwd)}`,
        JSON.stringify(body),
        { headers: headers }
      )
      .then((response) => {
        removeProjectSubmitJson();
        console.log("Login Successfull");
        console.log("response...", response);
      })
      .catch((error) => {
        console.log("Posr Failue");
      });
  }
  render() {
    const handleProjectSubmit = () => {
      //this.setState({projectName : "ABCD"});
      const body = {
        projectName: this.state.projectName,
        phases: this.state.phases,
        applicationCost: this.state.applicationCost,
        grantAccessTo: this.state.grantAccessTo,
      };
      setProjectSubmitJson(JSON.stringify(body));
      this.componentDidMount();
    };

    const selectProject = (e) => {
      this.setState({ selectedProject: e.target.id });
    };

    const updateProjectName = (event) => {
      console.log("before project name ", event.target.value);
      this.setState({ projectName: event.target.value });
      console.log("State project name ", this.state.projectName);
    };

    const updateGrantAccessTo = (event) => {
      this.setState({ grantAccessTo: event.target.value });
    };

    const updateAppCostJson = (e) => {
      const { id, title, value } = e.target;
      let appCostJsonTemp = { ...this.state.applicationCost };
      appCostJsonTemp[this.state.selectedProject.toLowerCase()][
        title.toLowerCase()
      ] = parseInt(value);
      this.setState({ applicationCost: appCostJsonTemp });
      console.log(this.state.applicationCost);
    };

    const managerId = getManagerId();
    const phases = ["Complex", "Medium", "Simple"];
    //const [jsonList, setJsonList] = useState([{Complex:[],Medium:[],Simple:[]}]);
    return (
      <div className="container p-3 my-3 border">
        <form>
          <div>
            <p class="font-weight-normal">ManagerID : {managerId}</p>
          </div>
          <div>
            <label class="mb-1">
              <h6 class="font-weight-normal">ProjectName:</h6>
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(event) => updateProjectName(event)}
            />
          </div>
          <div className="text-sm-left">
            <p className="font-weight-normal">Phases</p>
            <Assets
              type="Assets"
              jsonStr={this.state.jsonList}
              updatedJsonList={this.updateJsonList}
              count={this.state.count}
              updateCount={this.updatedCount}
            />

            <p class="font-weight-normal">Applications Costs</p>
            <div class="dropdown">
              <div class="dropdown">
                <button
                  class="btn btn-primary  btn-md dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.selectedProject === ""
                    ? "Select Phases"
                    : this.state.selectedProject}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  {Object.keys(this.state.jsonList).map((key) => (
                    <div>
                      {this.state.jsonList[key].map((insideKey) => (
                        <button
                          class="dropdown-item"
                          id={insideKey["field1"]}
                          type="button"
                          onClick={(event) => selectProject(event)}
                        >
                          {insideKey["field1"]}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div></div>
            <div>
              {phases.map((phase) => {
                return (
                  <div class="row">
                    <div class="col">
                      <input
                        type="text"
                        className="form-control"
                        title={phase}
                        id="1"
                        value={phase}
                        readOnly
                      />
                    </div>
                    <div class="col">
                      <input
                        type="number"
                        id="2"
                        title={phase}
                        className="form-control"
                        name="field2"
                        onChange={(event) => updateAppCostJson(event)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <label class="mb-1">
              <h6 class="font-weight-normal">GrantAccessTo:</h6>
            </label>
            <input
              type="text"
              class="form-control"
              onChange={(event) => updateGrantAccessTo(event)}
            />
            <div></div>
          </div>
          <div>
            <button class="btn btn-primary" onClick={handleProjectSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export function Assets(props) {
  const [inputList, setInputList] = useState([{ field1: "", field2: "" }]);
  const list = [...inputList];
  var count = parseInt(props.count);
  if (isNaN(parseInt(props.count))) {
    count = 0;
  }
  //let jsonList = {};
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    count = count + parseInt(value);
    if (count > 100) {
      return;
    }
    const jsonList = props.jsonStr;
    list[index][name] = value;
    setInputList(list);
    jsonList[e.target.title] = list;
    props.updatedJsonList(jsonList);
    props.updateCount(count);
    console.log(jsonList);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e, index) => {
    setInputList([...inputList, { field1: "", field2: "" }]);
  };

  return (
    <div>
      <div>
        <div class="card-body">
          {inputList.map((x, i) => {
            return (
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    title={props.type}
                    name="field1"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    title={props.type}
                    className="form-control"
                    name="field2"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div class="col">
                  {inputList.length !== 1 && (
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-trash-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                        />
                      </svg>
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleAddClick(i)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-plus-square-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
