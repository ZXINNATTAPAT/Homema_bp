// const express = require("express");
// const router = express.Router();
// const db = require("./db");
// const fileUpload = require("express-fileupload");
// const fs = require("fs");
// const bodyParser = require("body-parser");

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
// router.use(fileUpload());

// router.post("/submit-job", (req, res) => {
//   // req.file จะเป็นข้อมูลของไฟล์รูปภาพที่อัปโหลด
//   const {
//     job_tel,
//     job_details,
//     job_assign_date,
//     job_assign_time,
//     job_backup_tel,
//     job_location,
//     member_username,
//     status_id,
//     job_type_id,
//     technicial_username,
//   } = req.body;
//   const query = `INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(
//     query,
//     [
//       job_tel,
//       job_details,
//       job_assign_date,
//       job_assign_time,
//       job_backup_tel,
//       job_location,
//       member_username,
//       status_id,
//       job_type_id,
//       technicial_username,
//     ],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting data: " + err);
//         return res.status(500).json({ error: "Failed to insert data" });
//       } else {
//         console.log("Data inserted successfully");
//         return res.json({ message: "Data inserted successfully" });
//       }
//     }
//     // req.file.filename เก็บชื่อไฟล์รูปภาพที่อัปโหลด
//   );
// });

// router.post("/submit-job", (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("ไม่พบไฟล์ที่อัปโหลด");
//   }
//   const uploadedFile = req.files.sampleFile;
//   const fileName = uploadedFile.name;

//   // บันทึกไฟล์ที่อัปโหลดลงใน uploads/
//   uploadedFile.mv("uploads/" + fileName, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }

//     // อ่านข้อมูลไฟล์ที่อัปโหลด
//     const fileData = fs.readFileSync("uploads/" + fileName);

//     // บันทึกข้อมูลไฟล์ลงในตาราง job
//     const sqlInsertJob = `INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, file_name, file_data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//     db.query(
//       sqlInsertJob,
//       [
//         req.body.job_tel,
//         req.body.job_details,
//         req.body.job_assign_date,
//         req.body.job_assign_time,
//         req.body.job_backup_tel,
//         req.body.job_location,
//         fileName,
//         fileData,
//       ],
//       (jobInsertErr, jobInsertResults) => {
//         if (jobInsertErr) {
//           return res.status(500).send(jobInsertErr);
//         }
//         res.send("ไฟล์ถูกอัปโหลดและบันทึกลงใน MySQL เรียบร้อยแล้ว");
//       }
//     );
//   });
// });

// module.exports = router;
