import React, { useState } from "react";
import Navbar from "./Navbar";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles:"user",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    // AJAX
    fetch("https://homema-api.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          console.log("Registration response:", data);

          window.Swal.fire({
            icon: "success",
            title: "Register Success",
          });

          setTimeout(() => {
            window.location.href = "/mainproblem";
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <br />
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h1 className="card-title">Register</h1>
              <br />
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">
                    Username:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    pattern="[a-zA-Z\d\_]"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password:
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <br />
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
