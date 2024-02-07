import React from "react";
import jwt_decode from "jwt-decode";
import AccessDenied from "./AccessDenied";
import Login from "./components/Loginpage"

const PrivateRoute = (props, c ) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwt_decode(token);
    const userRole = decodedToken.roles;
    
    if (userRole === "admin" && c === 0 ) {
      return <div>{props}</div>;
    } 
    else if (userRole === "tech" && c === 1) {
      return <div><h1>{props}</h1></div>;
    }
    else if (userRole === "user") {
      return <AccessDenied />;
    }
    else {
      return <AccessDenied />;
    }
  } else {
    return  <Login />;
  }
};

export default PrivateRoute;
