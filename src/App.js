import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Postcategories from "./components/Postcategories";
import Mainpages from "./mainpage/Mainpages";
import CreatePost from "./components/CreatePost";
const About = () => <div>About Page</div>;

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Mainpages />} />
            <Route path="/about" element={<About />} />
            <Route path="/forum" element={<Postcategories />} />
            <Route path="forum/new_topic" element={<CreatePost />} />

            {/* Add more routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
