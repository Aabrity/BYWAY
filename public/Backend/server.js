const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nothing',
  database: 'travelbyway',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(express.json());

app.post('/api/storeContent', (req, res) => {
    const { content } = req.body;
    console.log('Received content:', content);
  
    const sql = 'INSERT INTO blog_posts (content) VALUES (?)';
    const values = [content];
  
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error storing content in MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Content stored in MySQL:', results);
        res.json({ success: true });
      }
    });
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
