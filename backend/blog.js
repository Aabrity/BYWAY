import express from "express";
import mysql from "mysql";
import multer from "multer";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nothing",
  database: "Byway",
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/api/post-blog", upload.single("image"), (req, res) => {
  const { title, date, content } = req.body;
  const image = req.file ? req.file.buffer : null;

  console.log("Received Title:", title);
  console.log("Received Date:", date);
  console.log("Received Content:", content);
  console.log("Received Image:", image);

  const sql =
    "INSERT INTO blog (title, description, image, published_date) VALUES (?, ?, ?, ?)";
  const values = [title, content, image, date];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
});

router.get("/get-blogs", (req, res) => {
  const sql = "SELECT * FROM blog";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching blog data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(result);
    }
  });
});

export default router;

