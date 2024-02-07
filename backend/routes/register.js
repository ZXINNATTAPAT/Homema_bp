const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("./db");


router.post("/register", async (req, res) => {
  const { username, email, roles ,password } = req.body;

  db.query(
    "SELECT * FROM member WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length > 0) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 8);

      // Insert the user into the database
      db.query(
        "INSERT INTO member SET ?",
        { username: username, email: email,roles :roles, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ error: "Database error" , results});
          }
          console.log("User registered:", results);
          res.json({ message: "User registered" }); 
        }
      );
    }
  );
});

module.exports = router;
