import React from 'react';
import ReactDOM from 'react-dom';

const sampleJSON = {
  "Assets":[{"field1":"build","field2":"30"},{"field1":"test","field2":"40"},{"field1":"design","field2":"30"}]
}

export default function App() {

  return (
    <div>
      {
        Object.keys(jsonList).map((key) => (
          <p>
            <span>Key Name: {key}</span>
             {
              (jsonList[key]).map((insideKey) => (

                
                <p>
                  <span>{insideKey['field1']}</span>
                </p>
              )
              )};
          </p>
        )
        )};
  
    </div>
  )
}
