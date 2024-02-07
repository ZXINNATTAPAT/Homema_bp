
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Mainpages from "./mainpage/Mainpages";
import Requestlist from "./mainpage/Requestlist";
import Mainproblem from "./mainpage/Mainproblem";
import Register from "./components/Register";
import Login from "./components/Loginpage";
import Tse from "./components/FileUploadForm"
import ProtectedData from "./ProtectedData";
import Search from "./mainpage/Search";
import { Dashboard } from "./mainpage/AdminDashboard/Dashboard";
// import { Jobs } from "./mainpage/AdminDashboard/Jobs";
// import { Users } from "./mainpage/AdminDashboard/Users";
import { Dashboard1 } from "./mainpage/TechDashboard/Dashboard1"; //
// import AcceptJob from "./mainpage/TechDashboard/AcceptJob";
// import Yourjob from "./mainpage/TechDashboard/Yourjob";
import UserReport from "./mainpage/UserReport";
import PrivateRoute from "./PrivateRoute";
import Forum from "./components/Forum";
// import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        
        <div className="content-container">
          <Routes>
            
            <Route 
              path="/dashboard" 
              element={ProtectedData(PrivateRoute(<Dashboard /> , 0))} 
            />
            <Route
              path="/test"
              element={ProtectedData(PrivateRoute(<Tse />, 0))}
            />
            <Route
              path="/dashboard_tech"
              element={ProtectedData(PrivateRoute(<Dashboard1 /> , 1))}
            />
          
            <Route path="/login" element={<Login />} />
            
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Mainpages />} />

            <Route path="/request" element={<Requestlist />} />

            <Route path="/mainproblem" element={ProtectedData(<Mainproblem />)} />

            <Route path="/list" element={<Search />} />

            <Route path="/report" element={<UserReport />} />

            <Route path="/forum" element={<Forum />} />

            
          </Routes>
        </div>
      </div>
    </Router>
  );
}
