import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import StatusTypeModal from "../../../components/StatusTypeModel";
import JobTypeModal from "../../../components/JobTypeModal";
import axios from "axios";

const Ownjob = () => {
  const [jobs, setJobs] = useState([]);
 
  
  const [currentPage, setCurrentPage] = useState(0); // หน้าปัจจุบัน
  const itemsPerPage = 10; // จำนวนงานต่อหน้า

  const offset = currentPage * itemsPerPage; // คำนวณ offset
  const currentJobs = jobs.slice(offset, offset + itemsPerPage); // รายการงานในหน้าปัจจุบัน

  const pageCount = Math.ceil(jobs.length / itemsPerPage); // จำนวนหน้า

  const [imageData, setImageData] = useState([]);

  const [loading, setLoading] = useState(true);
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
  // Decode Token เพื่อรับข้อมูล username
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const username = decodedToken.username;
  console.log(username);

  useEffect(() => {
    // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อรับรายการงานที่เป็นของคุณ
    fetch(`https://homema-api.onrender.com/joblist/${username}`)
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
      axios.get("https://homema-api.onrender.com/api/getImageData")
          .then((response) => {
            setImageData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching image data:", error);
          });
  }, [username]);

  const thaiTimeOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok", // กำหนดเป็นเวลาของไทย
  };

  const handleCancelJob = (jobId) => {
    // ส่งคำขอ PUT ไปยังเซิร์ฟเวอร์เพื่อยกเลิกงาน
    fetch(`https://homema-api.onrender.com/cancelJob/${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status_id: 1, // กำหนด status_id เป็น 1
        technicial_username: null, // กำหนด technicial_username เป็น null
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.Swal.fire({
          icon: "success",
          title: "ยกเลิกงานสำเร็จ",
        });
        setTimeout(() => {
          window.location.href = "/dashboard_tech/jobaccept";
        }, 3000);
        // อัปเดตรายการงานหลังยกเลิก
        const updatedJobs = jobs.map((job) => {
          if (job.job_id === jobId) {
            // อัปเดตเฉพาะงานที่ถูกยกเลิก
            return {
              ...job,
              status_id: 1, // กำหนด status_id เป็น 1
              technicial_username: null, // กำหนด technicial_username เป็น null
            };
          }
          return job;
        });

        setJobs(updatedJobs);
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการยกเลิกงาน: " + error.message);
      });
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
                        className="btn btn-danger"
                        onClick={() => handleCancelJob(job.job_id)}
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

export default Ownjob;
