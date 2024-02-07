const express = require("express");
const router = express.Router();
const db = require("./db");

// API endpoint to get job types
router.get('/job-types', (req, res) => {
  const query = 'SELECT * FROM job_type';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching job types: ' + err);
      res.status(500).json({ error: 'Failed to fetch job types' });
    } else {
      res.json(result);
    }
  });
});


// API endpoint to create a new job type

router.post('/job-types', (req, res) => {
  const { job_type_name } = req.body;

  // Insert the new job type into the job_type table
  const query = 'INSERT INTO job_type (job_type_name) VALUES (?)';

  db.query(query, [job_type_name], (err, result) => {
    if (err) {
      console.error('Error creating job type: ' + err);
      res.status(500).json({ error: 'Failed to create job type' });
    } else {
      console.log('Job type created successfully');
      res.json({ message: 'Job type created successfully' });
    }
  });
});

module.exports = router;
