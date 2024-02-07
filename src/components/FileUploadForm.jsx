import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [jobData, setJobData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch job data from your first API
    axios.get("https://homema-api.onrender.com//api/getJobData")
      .then((response) => {
        setJobData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });

    // Fetch image data from your second API
    axios.get("https://homema-api.onrender.com//api/getImageData")
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching image data:", error);
      });
  }, []);

  // Merge job data and image data into a single array
  const mergedData = jobData.map((job, index) => ({
    ...job,
    imageData: imageData[index] || {}, // Use an empty object if no image data is available
  }));

  return (
    <div>
      <h1>Data from APIs</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Job Tel</th>
            <th>Job Details</th>
            <th>Job Location</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {mergedData.map((data, index) => (
            <tr key={index}>
              <td>{data.job_tel}</td>
              <td>{data.job_details}</td>
              <td>{data.job_location}</td>
              <td>
                {data.imageData.file_data ? (
                  <img
                    src={`data:image/jpeg;base64,${data.imageData.file_data}`}
                    alt={` ${index}`}
                    width="100"
                    height="100"
                  />
                ) : (
                  "No image data available"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
