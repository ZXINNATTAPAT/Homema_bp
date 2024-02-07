// import axios from "axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import StatusTypeModal from "../../../components/StatusTypeModel";
import JobTypeModal from "../../../components/JobTypeModal";
import axios from "axios";

const Joblist = () => {

  const [currentPage, setCurrentPage] = useState(0); // หน้าปัจจุบัน
  const itemsPerPage = 10; // จำนวนงานต่อหน้า

  const [jobs, setJobs] = useState([]);

  const pageCount = Math.ceil(jobs.length / itemsPerPage); // จำนวนหน้า

  const offset = currentPage * itemsPerPage; // คำนวณ offset
  const currentJobs = jobs.slice(offset, offset + itemsPerPage); // รายการงานในหน้าปัจจุบัน
  const [imageData, setImageData] = useState([]);

  const [showJobTypeModal, setShowJobTypeModal] = useState(false);
  const [showStatusTypeModal, setShowStatusTypeModal] = useState(false);

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
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const username = decodedToken.username;

  useEffect(() => {
    fetch("https://homema-api.onrender.com/jobst1")
      .then((response) => response.json())
      .then((data) => {
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

  const handleAcceptJob = (job) => {
    const updatedJobWithStatusAndTechnician = {
      ...job,
      status_id: 2,
      technicial_username: username,
    };

    window.Swal.fire({
      icon: "success",
      title: "รับงานสำเร็จ",
    });

    fetch(`https://homema-api.onrender.com/jobaccept/${job.job_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJobWithStatusAndTechnician),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedJobs = jobs.map((j) =>
          j.job_id === job.job_id ? updatedJobWithStatusAndTechnician : j
        );
        setJobs(updatedJobs);
      });
  };

  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok",
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

        <br/>
            <h2>รายการงานที่ยังไม่ถูกดำเนินการ</h2>
      
        

            <div className="table-responsive">
               <table
              className="table table-bordered"
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mergedData.map((job) => (
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
                    </td>{" "}
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
                        onClick={() => handleAcceptJob(job)}
                      >
                        รับงาน
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div><br/>
           
      
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

            <JobTypeModal
              show={showJobTypeModal}
              handleClose={handleCloseJobTypeModal}
            />
            <StatusTypeModal
              show={showStatusTypeModal}
              handleClose={handleCloseStatusTypeModal}
            />
            
      </div>
    </div>
  );
};

export default Joblist;
