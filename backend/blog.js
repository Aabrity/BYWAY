import express from "express";
import mysql from "mysql";
import multer from "multer";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "rohan",
  password: "357951",
  database: "byway",
});
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nothing",
//   database: "Byway",
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/postblog", upload.single("image"), (req, res) => {
  const { title, date, content , category} = req.body;
  const image = req.file ? req.file.buffer : null;

  console.log("Received Title:", title);
  console.log("Received Date:", date);
  console.log("Received Content:", content);
  console.log("Received Image:", image);

  const sql = 'INSERT INTO blogtable (title, description, image, published_date, category) VALUES (?, ?, ?, ?, ?)';
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

router.get('/getblogs', (req, res) => {
  const sql = 'SELECT * FROM blogtable';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching blog data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result);
    }
  });
});

router.delete("/deleteblogs/:id", (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM blogtable WHERE id = ?";

  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("Deletion error:", err);
      return res.json("Deletion error");
    }
    return res.json({ Status: "Success" });
  });
});

export default router;
