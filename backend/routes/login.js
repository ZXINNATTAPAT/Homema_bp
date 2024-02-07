const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM member WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "User not found" });
      }

      const user = results[0];

      try {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign(
          { userId: user.id, roles: user.roles, username: user.username },
          "your-secret-key",
          { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
      } catch (hashingError) {
        console.error("Hashing error:", hashingError);
        return res.status(500).json({ error: "Hashing error" });
      }
    }
  );
});

module.exports = router;
