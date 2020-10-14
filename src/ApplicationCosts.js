import React, { useState, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function ApplicationCosts(props) {
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
              <React.Fragment>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    title={props.type}
                    value="Complex"
                    readOnly
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
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    title={props.type}
                    value="Medium"
                    readOnly
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
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    title={props.type}
                    value="Simple"
                    readOnly
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
              </div>
                

             
                
              
              
              </React.Fragment>);
          })}
        </div>
      </div>
    </div>
  );
}