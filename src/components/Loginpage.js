import React, { useState } from "react";
import "../styles/Loginpage.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "./Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting login form");

      const response = await axios.post("https://homema-api.onrender.com/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);

      const decodedToken = jwt_decode(token);
      const userRoles = decodedToken.roles;

      if (userRoles === "admin") {
        window.location.href = "/dashboard";
      } else if (userRoles.startsWith("tech")) {
        window.location.href = "/dashboard_tech";
      } else {
        window.location.href = "/mainproblem";
      }
    } catch (error) {
      console.log("Login error:", error);
      window.Swal.fire({
        icon: "error",
        title: "Login Error",
      });
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container cardwidthscope">
          <br />
          <div className="card container block">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
              {errorMessage && <p>{errorMessage}</p>}
              <br />

              <a href="/register" style={{ textDecoration: "none" }}>
                สมัครสมาชิก
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
