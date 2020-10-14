import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Assets } from "./ProjectSetup";

class Version extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "January", jsonList: {}, newEntry: false };

    this.handleChange = this.handleChange.bind(this);
    this.updateJsonList = this.updateJsonList.bind(this);
  }

  updateJsonList(updatedJsonList) {
    this.setState({ jsonList: updatedJsonList });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const monthList= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    return (
      <div className="container p-3 my-3 border">
        <form>
          <div class="form-group">
            <label for="managerId">ManagerID:</label>
            <input type="number" class="form-control" id="managerId" />
          </div>
          <div class="form-group">
            <label for="projectName">ProjectName :</label>
            <input type="text" class="form-control" value="Infosys" />
          </div>
          <tr>
            <label class="container">
              Month:
              <select value={this.state.value} onChange={this.handleChange}>
                {monthList.map(month =>{
                  return(<option value={month}>{month}</option>);
                })}
              </select>
            </label>
          </tr>
        </form>
        <Table />
      </div>
    );
  }
}

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      tableJson: {
        Build: {
          Complex: "11",
          Medium: "",
          Simple: "",
          Total: "",
          BillableStatus: "",
        },
        Test: {
          Complex: "",
          Medium: "",
          Simple: "",
          Total: "",
          BillableStatus: "",
        },
        Design: {
          Complex: "",
          Medium: "",
          Simple: "",
          Total: "",
          BillableStatus: "",
        },
        GoLive: {
          Complex: "",
          Medium: "",
          Simple: "",
          Total: "",
          BillableStatus: "",
        },
        HyperCare: {
          Complex: "",
          Medium: "",
          Simple: "",
          Total: "",
          BillableStatus: "",
        },
      },
    };
  }

  displayEntries = () => {
    this.setState({
      display: true,
    });
  };

  render() {
    const projectPhases = ["Build", "Test", "Design", "GoLive", "HyperCare"];
    const projectTypes = [
      "Complex",
      "Medium",
      "Simple",
      "Total",
      "BillableStatus",
    ];
    let entries = null;
    if (this.state.display) {
      entries = (
        <div>
          <Assets />
        </div>
      );
    }

    const handleInputChange = (e) => {
      const { title, id, value } = e.target;
      console.log(value);
      let tempJson = this.state.tableJson;
      tempJson[id][title] = value;
      console.log(tempJson);
      this.setState({ tableJson: tempJson });
    };
    
    return (
      
      <div class="container">
        <table className="container">
          {projectPhases.map((phases) => {
            return (
              <div>
                <td>{phases}</td>
                {projectTypes.map((type, i) => {
                  return (
                    <td>
                      <input
                        type="text"
                        title={type}
            
                        id={phases}
                        placeholder={type}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </td>
                  );
                })}
              </div>
            );
          })}
        </table>
        <tr>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-primary" onClick={this.displayEntries}>
            AddEntries
          </button>
          {entries}
        </tr>
        {JSON.stringify(this.state.tableJson)}
      </div>
    );
  }
}

const Entries = (props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};

export default Version;
