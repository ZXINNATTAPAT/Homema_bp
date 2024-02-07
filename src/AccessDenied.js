// AccessDenied.js
import React from "react";

const AccessDenied = () => {
  return (
    <div className="container-fluid">
      <div className="position-absolute top-50 start-50 translate-middle">
        <center>
          <h1 className="fw-bold">403 Access Denied</h1>
          <p className="fw-bold"><strong>You do not have permission to access this page.</strong></p>
        </center>
      </div>
    </div>
  );
};

export default AccessDenied;
