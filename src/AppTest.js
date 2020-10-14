import React, { Component } from "react";
import axios from 'axios';

class AppTest extends Component {
  state = {
    name:"",
    age:"",
    salary:""
  };
  constructor(props) {
    super(props);
  
    //this.create = this.create.bind(this);
    
  }

  

  handleName = event => {
    this.setState({ name: event.target.value });
  }
  handleAge = event => {
    this.setState({ age: event.target.value });
  }
  handleSalary = event => {
    this.setState({ salary: event.target.value });
  }


  

  handleSubmit = event => {
    event.preventDefault();

    const details = {
      name: this.state.name,
      age:this.state.age,
      salary:this.state.salary
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { details })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
    <>
       <input type="text" name="name" onChange={this.handleName}/>
       <input type="number" name="age" onChange={this.handleAge}/>
       <input type="number" name="salary" onChange={this.handleSalary}/>
       <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
export default AppTest;
