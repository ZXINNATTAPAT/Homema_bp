const express = require("express");
const fileUpload = require("express-fileupload"); // เพิ่มบรรทัดนี้
const cors = require("cors");

const db = require("./routes/db");

const register = require("./routes/register");
const login = require("./routes/login");
const authensession = require("./routes/authensession");
const jobtype = require("./routes/job_type");
const users = require("./routes/users");
const fs = require("fs");

const multer = require("multer");
const job = require("./routes/jobs_list");
const status = require("./routes/status");

const app = express();
const port = process.env.PORT || 5000 ;

const bodyParser = require("body-parser");

const path = require("path"); // เพิ่มโมดูล path

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

// middleware
// app.use(cors());

const corsOptions = {
  origin: 'https://homema.onrender.com',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.static('build')); 
// ใช้เอกสารสถานที่เชื่อมต่อ

app.use(express.json());

app.use(fileUpload());

// job submit !!!!!!!!!!!!!!!!!!!!!!
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
    // กำหนดโฟลเดอร์ปลายทางสำหรับไฟล์ที่อัปโหลด
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//ส่วนที่ 1: อัปโหลดรูปภาพไปยังโฟลเดอร์
app.post("/upload-to-folder", (req, res) => {
  if (
    !req.files ||
    !req.files.sampleFiles ||
    req.files.sampleFiles.length === 0
  ) {
    return res.status(400).send("No files were uploaded.");
  }

  const uploadedFiles = Array.isArray(req.files.sampleFiles)
    ? req.files.sampleFiles
    : [req.files.sampleFiles];

  // Define the upload directory (change this to your desired folder path)
  const uploadDirectory = path.join(__dirname, "uploads");

  uploadedFiles.forEach((uploadedFile) => {
    const fileName = uploadedFile.name;

    // Move the uploaded file to the specified directory
    uploadedFile.mv(path.join(uploadDirectory, fileName), (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  });

  res.send("Files uploaded to folder.");
});

// ส่วนที่ 2: เพิ่มข้อมูลรูปภาพลงใน MySQL
app.post("/upload-to-mysql", (req, res) => {
  const uploadDirectory = path.join(__dirname, "uploads");

  // Read the list of uploaded files in the directory
  fs.readdir(uploadDirectory, (err, files) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Find the specific filename you want to insert into MySQL
    const desiredFileName = req.body.fileName; // Replace 'fileName' with the actual field name in your request

    if (!desiredFileName || !files.includes(desiredFileName)) {
      return res
        .status(404)
        .send("File not found or missing filename in the request.");
    }

    // Process the desired file and insert data into MySQL
    const fileData = fs.readFileSync(
      path.join(uploadDirectory, desiredFileName)
    );

    const sql =
      "INSERT INTO job (job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username, file_name, file_data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(
      sql,
      [
        req.body.job_tel,
        req.body.job_details,
        req.body.job_assign_date,
        req.body.job_assign_time,
        req.body.job_backup_tel,
        req.body.job_location,
        req.body.member_username,
        req.body.status_id,
        req.body.job_type_id,
        req.body.technicial_username,
        desiredFileName, // Use the desired filename
        fileData, // File data for the desired file
      ],
      (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).send("Error adding job data to MySQL.");
        }

        res.send("Job data added to MySQL.");
      }
    );
  });
});


app.get("/api/getJobData", (req, res) => {
  const sql =
    "SELECT job_tel, job_details, job_assign_date, job_assign_time, job_backup_tel, job_location, member_username, status_id, job_type_id, technicial_username FROM job";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get("/api/getImageData", (req, res) => {
  const sql = "SELECT job_id, file_data FROM job";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Encode image data as Base64 and send it as JSON
    const imageObjects = results.map((row) => {
      return { job_id: row.job_id, file_data: Buffer.from(row.file_data).toString("base64") };
    });
    

    res.json(imageObjects);
  });
});

// routes
app.use(job);
app.use(login);
app.use(users);
app.use(register);
app.use(status);
app.use(login);
app.use(users);
// app.use(jobsubmit);
app.use(jobtype);

// app.use(upload);

//ไว้ใช้check session
app.use(authensession);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});