// Import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import mysql from 'mysql';

// Create an Express app
const app = express();
const port = 3001;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nothing',
  database: 'Byway', // Change this to your database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/api/post-blog', upload.single('image'), (req, res) => {
  const { title, date, content, category } = req.body;
  const image = req.file ? req.file.buffer : null;

  console.log('Received Title:', title);
  console.log('Received Date:', date);
  console.log('Received Content:', content);
  console.log('Received Image:', image);


  const sql = 'INSERT INTO blog (title, description, image, published_date, category) VALUES (?, ?, ?, ?,?)';
  const values = [title, content, image, date ,category];

 
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

app.get('/api/get-blogs', (req, res) => {
  const sql = 'SELECT * FROM blog';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching blog data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
