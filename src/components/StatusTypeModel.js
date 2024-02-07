import React, { useState, useEffect } from "react";

const StatusTypeModal = ({ show, handleClose }) => {
  const [statusTypes, setStatusTypes] = useState([]);

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูล status ทั้งหมดจากเซิร์ฟเวอร์
    fetch("https://homema-api.onrender.com/status")
      .then((response) => response.json())
      .then((data) => {
        setStatusTypes(data);
      })
      .catch((error) => {
        console.error("Error fetching status types: " + error);
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
            <h5 className="modal-title">Status Types</h5>
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
                {statusTypes.map((statusType) => (
                  <tr key={statusType.status_id}>
                    <td>{statusType.status_id}</td>
                    <td>{statusType.status_name}</td>
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

export default StatusTypeModal;
