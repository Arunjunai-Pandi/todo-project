const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Abinaya_2711',
  database: 'mydb', // your actual DB name
});

// Get all users
app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(data);
  });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
