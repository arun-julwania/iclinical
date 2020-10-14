import React, { useState, Component } from "react";

export function Assets() {
  const [inputList, setInputList] = useState([{ field1: "", field2: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { field1: "", field2: "" }]);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <tr>
            <label for="Assets">Assets</label>
            <tr>
              <span>
                <input
                  type="text"
                  name="field1"
                  onChange={(e) => handleInputChange(e, i)}
                />
              </span>
              <input
                type="number"
                name="field2"
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {input.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </tr>
          </tr>
        );
      })}
    </div>
  );
}
