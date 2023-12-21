const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nothing',
  database: 'Byway',
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
    const image = req.files?.image;  // Assuming you're using a middleware that parses files

  console.log('Received content:', content);
  console.log('Received image:', image);

  
    const sql = 'INSERT INTO blog (content) VALUES (?)';
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
