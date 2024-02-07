import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const [jobCount, setJobCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [technicianCount, setTechnicianCount] = useState(0);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // Fetch and set job count
    fetch("https://homema-api.onrender.com/graph")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });

    fetch("https://homema-api.onrender.com/jobcount")
      .then((response) => response.json())
      .then((data) => {
        setJobCount(data[0].count);
      });

    // Fetch and set category count
    fetch("https://homema-api.onrender.com/jobtypecount")
      .then((response) => response.json())
      .then((data) => {
        setCategoryCount(data[0].count);
      });

    // Fetch and set customer count with roles "user"
    fetch("https://homema-api.onrender.com/membercount")
      .then((response) => response.json())
      .then((data) => {
        setCustomerCount(data[0].count);
      });

    // Fetch and set technician count with roles starting with "Technician_"
    fetch("https://homema-api.onrender.com/techcount")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].count);

        setTechnicianCount(data[0].count);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="dashboard card">
          <div className="card-inner">
            <h3>JOBS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{jobCount}</h1>
        </div>
        <div className="dashboard card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{categoryCount}</h1>
        </div>
        <div className="dashboard card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{customerCount}</h1>
        </div>
        <div className="dashboard card">
          <div className="card-inner">
            <h3>TECHNICIANS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{technicianCount}</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={jobs}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total_jobs" fill="#F898A4" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={jobs}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total_jobs"
              stroke="#FF6962"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
