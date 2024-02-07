// import axios from "axios";
import React, { useState, useEffect } from "react";
import JobTypeModal from "../../../components/JobTypeModal";
import StatusTypeModal from "../../../components/StatusTypeModel";
import axios from "axios";

const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const [showJobTypeModal, setShowJobTypeModal] = useState(false);
  const [showStatusTypeModal, setShowStatusTypeModal] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(0); // หน้าปัจจุบัน
  const jobsPerPage = 10; // จำนวนงานต่อหน้า

  const offset = currentPage * jobsPerPage; // คำนวณ offset
  const currentJobs = jobs.slice(offset, offset + jobsPerPage); // รายการงานในหน้าปัจจุบัน

  const pageCount = Math.ceil(jobs.length / jobsPerPage); // จำนวนหน้า

  const [imageData, setImageData] = useState([]);

  const handleShowStatusTypeModal = () => {
    setShowStatusTypeModal(true);
  };

  const handleCloseStatusTypeModal = () => {
    setShowStatusTypeModal(false);
  };
  const handleShowJobTypeModal = () => {
    setShowJobTypeModal(true);
  };

  const handleCloseJobTypeModal = () => {
    setShowJobTypeModal(false);
  };

  const fields = [
    { name: "job_id", label: "ID" },
    { name: "job_tel", label: "Telephone" },
    { name: "job_details", label: "Details" },
    { name: "job_assign_date", label: "Assign Date" },
    { name: "job_assign_time", label: "Assign Time (UTC)" },
    { name: "job_backup_tel", label: "Backup Telephone" },
    { name: "job_location", label: "Location" },
    { name: "member_username", label: "Member Username" },
    { name: "status_id", label: "Status ID" },
    { name: "job_type_id", label: "Job Type ID" },
    { name: "technicial_username", label: "Technical Username" },
  ];

  const [editedJob, setEditedJob] = useState({
    job_id: "",
    job_tel: "",
    job_details: "",
    job_assign_date: "",
    job_assign_time: "",
    job_backup_tel: "",
    job_location: "",
    member_username: "",
    status_id: "",
    job_type_id: "",
    technicial_username: "",
  });

      useEffect(() => {
        fetch("https://homema-api.onrender.com/job")
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            setJobs(data);
          });
          
        axios.get("https://homema-api.onrender.com/api/getImageData")
          .then((response) => {
            setImageData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching image data:", error);
          });
      }, []);

    const handleDeleteClick = (jobId) => {
      window.Swal.fire({
        title: "คุณต้องการลบสมาชิกนี้ใช่หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://homema-api.onrender.com/job/${jobId}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                window.Swal.fire(
                  "Deleted!",
                  "The job has been deleted.",
                  "success"
                );
                const updatedJobs = jobs.filter((job) => job.job_id !== jobId);
                setJobs(updatedJobs);
                window.location.reload();

              } else {
                window.Swal.fire("Error", "Failed to delete the job.", "error");
              }
            });
        }
      });
    };

  const handleEditClick = (job) => {
    setEditedJob(job);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedJob({ ...editedJob, [name]: value });
  };

  const handleUpdateClick = () => {
    window.Swal.fire({
      icon: "success",
      title: "Update Success",
    });
    fetch(`https://homema-api.onrender.com/job/${editedJob.job_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedJobs = jobs.map((job) =>
            job.job_id === editedJob.job_id
              ? { ...editedJob }
              : job
          );
          setJobs(updatedJobs);
          setEditedJob({
            job_id: "",
          });
          // console.log(editedJob);
      });
  };
      const thaiTimeOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",

        hour12: false,
        timeZone: "Asia/Bangkok", // กำหนดเป็นเวลาของไทย
      };

      const mergedData = currentJobs.map((job) => {
        const jobImageData = imageData.find((image) => image.job_id === job.job_id);
        const imageDataForJob = jobImageData ? { ...jobImageData } : {};
      
        return {
          ...job,
          imageData: imageDataForJob,
        };
      });
  
  
  return (
    <div className="useredit-con container-fluid">
      <div className="container">
        <br />
        <form>
          <h2>แก้ไขงาน</h2>
          {fields.map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}:</label>
            <input
              type="text"
              className="form-control"
              name={field.name}
              value={editedJob[field.name]}
              onChange={handleInputChange}
            />
          </div>
        ))}
          <br/>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdateClick}
          >
            Update
          </button>

        </form>
      

      <br />

      <h2>รายการงาน</h2>
      
      <div class="table-responsive">
        <table
          className="table table-bordered "
          style={{ width: "100%", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>ชื่อลูกค้า</th>
              <th>เบอร์โทรศัพท์</th>
              <th>เบอร์โทรศัพท์สำรอง</th>
              <th>สถานที่นัดหมาย</th>
              <th>รายละเอียดงาน</th>
              <th>วันที่นัดหมาย</th>
              <th>เวลาที่นัดหมาย</th>
              <th>
                สถานะงาน
                <i
                  class="fa-solid fa-circle-info"
                  onClick={handleShowStatusTypeModal}
                  style={{ marginLeft: "5px" }}
                ></i>
              </th>
              <th>
                ประเภทงาน
                <i
                  class="fa-solid fa-circle-info"
                  onClick={handleShowJobTypeModal}
                  style={{ marginLeft: "5px" }}
                ></i>
              </th>
              <th>ชื่อช่างผู้รับงาน</th>
              <th>image</th>
              <th colSpan={"2"}>Action</th>
            </tr>
          </thead>
          <tbody>
            {mergedData.map((job ,index) => (
              <tr key={job.job_id}>
                <td>{job.job_id}</td>
                <td>{job.member_username}</td>
                <td>{job.job_tel}</td>
                <td>{job.job_backup_tel}</td>
                <td>{job.job_location}</td>
                <td>{job.job_details}</td>
                <td>
                  {new Intl.DateTimeFormat("th-TH", thaiTimeOptions).format(
                    new Date(job.job_assign_date)
                  )}
                </td>
                <td>{job.job_assign_time}</td>
                <td>{job.status_id}</td>
                <td>{job.job_type_id}</td>
                <td>{job.technicial_username}</td>
                <td>
                  {job.imageData.file_data ? (
                      <img
                        src={`data:image/jpeg;base64,${job.imageData.file_data}`}
                        alt={` ${job.job_id}`}
                        width="100"
                        height="100"
                      />
                    ) : (
                      "No image data available"
                    )}
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEditClick(job)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(job.job_id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br /> 

      <ul className="pagination float-end">
          <li className="page-item">
            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>ก่อนหน้า</button>
          </li> 
          {Array.from({ length: pageCount }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(i)}>{i + 1}</button>
            </li>
          ))}
           <li className="page-item">
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>ถัดไป</button>
        </li>
      
        </ul>

      </div>

       
     
      

      <JobTypeModal
        show={showJobTypeModal}
        handleClose={handleCloseJobTypeModal}
      />
      <StatusTypeModal
        show={showStatusTypeModal}
        handleClose={handleCloseStatusTypeModal}
      />

    </div>
  );
};

export default Joblist;
