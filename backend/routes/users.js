const express = require("express");
const router = express.Router();
const db = require("./db");

// API endpoint to get job types
router.get("/member", (req, res) => {
  const query = "SELECT * FROM  member ";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch member" });
    } else {
      res.json(result);
    }
  });
});
router.get("/membercount", (req, res) => {
  const query = "SELECT COUNT(*) as count  FROM member WHERE roles = 'user';";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch member" });
    } else {
      res.json(result);
    }
  });
});

router.get("/memlist/:username", (req, res) => {
  const { username } = req.params; // เปลี่ยนจาก id เป็น username

  const sql = "SELECT * FROM job WHERE member_username = ?";
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลงาน: " + err.message);
      res.status(500).send("เกิดข้อผิดพลาดในการดึงข้อมูลงาน");
    } else {
      res.json(result);
    }
  });
});
router.get("/techcount", (req, res) => {
  const query =
    "SELECT COUNT(*) as count FROM member WHERE roles LIKE 'tech';";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching job types: " + err);
      res.status(500).json({ error: "Failed to fetch member" });
    } else {
      res.json(result);
    }
  });
});
router.put("/member/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const sql = "UPDATE member  SET ? WHERE member_id = ?";
  db.query(sql, [updatedUser, id], (err, result) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้: " + err.message);
      res.status(500).send("เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้");
    } else {
      res.status(200).send("อัปเดตข้อมูลผู้ใช้เรียบร้อย");
    }
  });
});

router.delete("/member/:id", (req, res) => {
  const memberId = req.params.id;

  const sql = "DELETE FROM member WHERE member_id = ?";
  db.query(sql, [memberId], (err, result) => {
    if (err) {
      console.error("Error deleting member: " + err);
      res.status(500).json({ error: "Failed to delete member" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Member not found" });
      } else {
        res.status(204).send(); // ส่ง HTTP Status 204 No Content หากลบสมาชิกสำเร็จ
      }
    }
  });
});
module.exports = router;
