const express = require("express");
const router = express.Router();
const db = require("./db");

// API endpoint to get job types
router.get("/status", (req, res) => {
  const query = "SELECT * FROM status";

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching status: " + err);
      res.status(500).json({ error: "Failed to fetch status" });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
