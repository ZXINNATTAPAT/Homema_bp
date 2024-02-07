import React, { useState, useEffect } from "react";

const JobTypeModal = ({ show, handleClose }) => {
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูล job_type ทั้งหมดจากเซิร์ฟเวอร์
    fetch("https://homema-api.onrender.com/job-types")
      .then((response) => response.json())
      .then((data) => {
        setJobTypes(data);
      })
      .catch((error) => {
        console.error("Error fetching job types: " + error);
      });
  }, []);

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Job Types</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {jobTypes.map((jobType) => (
                  <tr key={jobType.job_type_id}>
                    <td>{jobType.job_type_id}</td>
                    <td>{jobType.job_type_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTypeModal;
