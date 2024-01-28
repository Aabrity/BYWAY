import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import connectToDatabase from "./db.js";

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "rohan",
//   password: "357951",
//   database: "byway",
// });
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "nothing",
//   database: "Byway",
// });

const router = express.Router();

let db;
(async function () {
  try {
    db = await connectToDatabase();
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
})();
dotenv.config();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "12345",
//   database: "byway",
// });

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/postblog", upload.single("image"), (req, res) => {
  const { title, date, content, category } = req.body;
  const image = req.file ? req.file.buffer : null;
 
  console.log("Received Title:", title);
  console.log("Received Date:", date);
  console.log("Received Content:", content);
  console.log("Received Image:", image);
  console.log("Received Category:", category);

  const sql =
    "INSERT INTO blogtable (title, description, image, published_date, category) VALUES (?, ?, ?, ?, ?)";
  const values = [title, content, image, date, category];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
 
    // After inserting, automatically call the stored procedure to remove HTML tags
    const removeHtmlTagsQuery = 'CALL RemoveHtmlTags()';
    db.query(removeHtmlTagsQuery, (removeHtmlTagsError, removeHtmlTagsResult) => {
      if (removeHtmlTagsError) {
        console.error('Error calling RemoveHtmlTags stored procedure:', removeHtmlTagsError);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
 
      console.log('RemoveHtmlTags stored procedure called successfully');
      return res.status(200).json({ message: 'Data inserted successfully' });
    });
  });
});

router.get("/getblogs", (req, res) => {
  const sql = "SELECT * FROM blogtable";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching blog data:", err);
      res.status(500).json({ error: "Internal Server Error" });
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

router.get('/getblogs/:id', (req, res) => {
  const blogId = req.params.id;
  const sql = 'SELECT id, image, description, title, category,published_date FROM blogtable WHERE id = ?';

  db.query(sql, [blogId], (err, result) => {
    if (err) {
      console.error('Error fetching blog details:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result[0]); // Assuming the result is an array with a single blog
    }
  });
});


router.put("/updateBlog/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const { title, date, content, category } = req.body;
  const image = req.file ? req.file.buffer : null;


  console.log("Received Title:", title);
  console.log("Received Date:", date);
  console.log("Received Content:", content);
  console.log("Received Image:", image);

  
  const updateQuery =
    'UPDATE blogtable SET title=?, description=?, image=?, published_date=?, category=? WHERE id=?';
  const values = [title, content, image, date, category, id];

  db.query(updateQuery, values, (err, result) => {
    if (err) {
      console.error('Error updating data in the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data updated successfully');
      res.status(200).json({ message: 'Data updated successfully' });
    }
  });
});

router.get('/getselectedblog/:id', (req, res) => {
  const id=req.params.id;

  const selectQuery = 'SELECT * FROM blogtable where id = ?';
  db.query(selectQuery, [id], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ status: "Error", message: "Fetch error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ status: "Error", message: "blog not found" });
    }

    return res.status(200).json({ status: "Success", blog: result[0] });
  });
});


export default router;
