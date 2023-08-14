import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpages from './mainpage/Mainpages';




const About = () => <div>About Page</div>;

export default function App(){
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Mainpages />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

