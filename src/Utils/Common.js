// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getManagerId = () => {
  const userStr = sessionStorage.getItem("managerId");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getPassword = () => {
  const userStr = sessionStorage.getItem("password");
  if (userStr) return userStr;
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("managerId") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("client_id");
  sessionStorage.removeItem("client_secret");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("managerId");
  sessionStorage.removeItem("password");
};
export const setProjectSubmitJson = (body) =>{
  sessionStorage.setItem("projectReqBody", body);
  
}
export const getProjectSubmitJson = () =>{
  const userStr = sessionStorage.getItem("projectReqBody");
  if (userStr) return JSON.parse(userStr);
  else return null;
}


export const removeProjectSubmitJson = () =>{
  sessionStorage.removeItem("projectReqBody");
}

// set the token and user from the session storage
export const setUserSession = (managerId, password) => {
  sessionStorage.setItem("client_id", "1dab35c4c33b48a1a2cc7a42d253330e");
  sessionStorage.setItem("client_secret", "F2c85252ac554f6889f71431C80675cC");
  sessionStorage.setItem("user", managerId.value);
  sessionStorage.setItem("managerId", managerId.value);
  sessionStorage.setItem("password", password.value);

};
