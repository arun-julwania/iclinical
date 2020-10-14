import React, { useState } from "react";
import { getManagerId, getPassword } from "../Utils/Common";
import axios from "axios";
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

function IndividualProject(props) {
  const manager = getManagerId();
  const pwd = getPassword();
  forceUpdate();
  console.log('propjson : ' ,props.values)
  console.log('propjson Kesy : ' ,Object.keys(props.values))
  const projectJson = JSON.stringify(props.values);
    const projectName = props.values["projectName"];
    const phases = props.values['phases'];
    const applicationCosts= props.values['applicationCost'];
    const grantAccessTo= props.values['grantAccessTo'];
    const build = 'build';

    //console.log('Prinitng projectName' ,projectName)
    //console.log('Prinitng phases' ,phases)
    //console.log('Prinitng applicationCosts' ,applicationCosts)
    //console.log('Prinitng grantAccessTo' ,grantAccessTo)

    const deleteProject = (e) => {
       axios
        .get(
          `http://ea-project-management-webview-v1.sg-s1.cloudhub.io/ea/managers/${manager}/projects/${projectName}?password=${btoa(pwd)}`,
          {
            headers: {
              "client_id":"1dab35c4c33b48a1a2cc7a42d253330e",
              "client_secret":"F2c85252ac554f6889f71431C80675cC",
              "Content-Type": "application/json"
            },
          }
        )
        .then((response) => {
          })
        .catch((error) => {
          
        });
  
      };
  
    let dataExist = false;
    if( !(typeof props.phases === 'undefined' || props.phases === null )){
        dataExist = true;
    }

  return (
    <div className="container p-3 my-3 border">
      <form>
        <div>
          <p class="font-weight-normal">ManagerID : </p>
          <input type="text" class="form-control" value={manager} />
        </div>
        <div>
          <label class="mb-1">
            <h6 class="font-weight-normal">ProjectName:</h6>
          </label>
          <input type="text" class="form-control" value={projectName} />
        </div>
        <div className="text-sm-left">
          <p className="font-weight-normal">Phases</p>
          
            
           {
               !dataExist ? <div></div> : <div>
                   {Object.keys(props.values['phases']).map((phase)=>{
              return(
               <div>{phase}</div>
  
              )
          })}
               </div>
           }
          
          <p class="font-weight-normal">Applications Costs</p>

          <label class="mb-1">
            <h6 class="font-weight-normal">GrantAccessTo:</h6>
          </label>
          <input type="text" class="form-control" value={grantAccessTo} />
          <div></div>
        </div>
        <div>
          <button type="button" class="btn btn-primary" onClick={(event) => deleteProject(event)}>
            Delete Projects
          </button>
          {""}
          {""}
          {""}
          <button type="button" class="btn btn-primary">
            Update Projects
          </button>
        </div>
      </form>
    </div>
  );
}

export default IndividualProject;
