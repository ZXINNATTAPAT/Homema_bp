import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import StatusTypeModal from "../components/StatusTypeModel";
import JobTypeModal from "../components/JobTypeModal";
import Navbar from "../components/Navbar";

const UserReport = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showJobTypeModal, setShowJobTypeModal] = useState(false);
  const [showStatusTypeModal, setShowStatusTypeModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(0); // หน้าปัจจุบัน
  const itemsPerPage = 10; // จำนวนงานต่อหน้า
  const pageCount = Math.ceil(jobs.length / itemsPerPage); // จำนวนหน้า

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
  // Decode Token เพื่อรับข้อมูล username
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const username = decodedToken.username;

  useEffect(() => {
    // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อรับรายการงานที่เป็นของคุณ
    fetch(`https://homema-api.onrender.com/memlist/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setLoading(false); // เมื่อรับข้อมูลเสร็จแล้วให้ปิดการโหลด
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการรับข้อมูลงาน: " + error.message);
        setLoading(false); // หากเกิดข้อผิดพลาดให้ปิดการโหลดเช่นกัน
      });
  }, [username]);

  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok", // กำหนดเป็นเวลาของไทย
  };
  const handleDeleteClick = (jobId) => {
    window.Swal.fire({
      title: "คุณต้องการลบงานนี้?",
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
            } else {
              window.Swal.fire("Error", "Failed to delete the job.", "error");
            }
          });
      }
    });
  };

  return (
    <> 
    <Navbar />
    <br/>
    <div className="useredit-con container-fluid">
      <div className="container">
        <h2>รายการงานของคุณ</h2>
      
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div class="table-responsive">
              <table
                className="table table-bordered"
                style={{ width: "100%", textAlign: "center" }}
              >
                <thead>
                  <tr>
                    {/* <th>ID</th> */}
                    <th>ผู้แจ้ง</th>
                    <th>เบอร์โทรศัพท์</th>
                    {/* <th>เบอร์โทรศัพท์สำรอง</th> */}
                    <th>สถานที่</th>
                    <th>รายละเอียด</th>
                    <th>วันที่</th>
                    <th>เวลา</th>
                    <th>
                      สถานะงาน
                      <i
                        class="fa-solid fa-circle-info"
                        onClick={handleShowStatusTypeModal}
                        style={{ marginLeft: "5px" }}
                      ></i>
                    </th>
                    {/* <th>
                      ประเภทงาน
                      <i
                        class="fa-solid fa-circle-info"
                        onClick={handleShowJobTypeModal}
                        style={{ marginLeft: "5px" }}
                      ></i>
                    </th> */}
                    {/* <th>ชื่อช่างผู้รับงาน</th>
                    <th>image</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs
                    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                    .map((job) => (
                    <tr key={job.job_id}>
                      {/* <td>{job.job_id}</td> */}
                      <td>{job.member_username}</td>
                      <td>{job.job_tel}</td>
                      {/* <td>{job.job_backup_tel}</td> */}
                      <td>{job.job_location}</td>
                      <td>{job.job_details}</td>
                      <td>
                        {new Intl.DateTimeFormat("th-TH", thaiTimeOptions).format(
                          new Date(job.job_assign_date)
                        )}
                      </td>
                      <td>{job.job_assign_time}</td>
                      <td>{job.status_id}</td>
                      {/* <td>{job.job_type_id}</td> */}
                      {/* <td>{job.technicial_username}</td> */}
                      {/* <td>{job.img_url}</td> */}
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
          )} 
          <br/>
          <ul className="pagination">
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
    </>
   
  );
};

export default UserReport;
