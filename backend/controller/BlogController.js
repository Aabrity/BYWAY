import express from "express";
import multer from "multer";
import BlogModel from "../model/BlogModel.js";
import connectToDatabase from "../db.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let db;
(async function () {
  try {
    db = await connectToDatabase();
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
})();

const insertBlog = async (blogData) => {
  const insertQuery = `
    INSERT INTO blogtable (
      image,
      description,
      title,
      category
    ) VALUES (?, ?, ?, ?)
  `;

  const values = [
    blogData.getImage(),
    blogData.getDescription(),
    blogData.getTitle(),
    blogData.getCategory(),
  ];

  return new Promise((resolve, reject) => {
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        reject({ Error: "Insertion error" });
      } else {
        console.log("Data inserted successfully");
        resolve({ Status: "Success" });
      }
    });
  });
};

router.post("/postBlog", upload.single("image"), async (req, res) => {
  const { description, title, category } = req.body;

  const blogData = new BlogModel(
    null,
    req.file.buffer,
    description,
    title,
    category
  );

  console.log("Description from model: " + blogData.getDescription());

  try {
    const insertResponse = await insertBlog(blogData);
    console.log("Insert response:", insertResponse);
    res.json(insertResponse);
  } catch (error) {
    console.error("An error occurred during insertion:", error);
    res.json(error);
  }
});

const updateBlog = async (blogData, id) => {
  const updateQuery = `
    UPDATE blogtable SET
      image = COALESCE(?, image),
      description = ?,
      title = ?,
      category = ?
    WHERE id = ?
  `;

  const values = [
    blogData.getImage(),
    blogData.getDescription(),
    blogData.getTitle(),
    blogData.getCategory(),
    id,
  ];

  return new Promise((resolve, reject) => {
    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        reject({ Error: "Update error" });
      } else {
        console.log("Data updated successfully");
        resolve({ Status: "Success" });
      }
    });
  });
};

router.put("/updateBlog/:id", upload.single("image"), async (req, res) => {
  const { description, title, category } = req.body;
  const { id } = req.params;

  const blogData = new BlogModel(
    null,
    req.file.buffer,
    description,
    title,
    category
  );
  try {
    const updateResponse = await updateBlog(blogData, id);
    console.log("Update response:", updateResponse);
    res.json(updateResponse);
  } catch (error) {
    console.error("An error occurred during update:", error);
    res.json(error);
  }
});


router.get("/getBlogs", (req, res) => {
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

router.get("/getSelectedBlog/:id", (req, res) => {
  const blogId = req.params.id;
  const selectQuery = "SELECT * FROM blogtable WHERE id = ?";

  db.query(selectQuery, [blogId], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ status: "Error", message: "Fetch error" });
    }

    if (result.length === 0) {
      return res
        .status(404)
        .json({ status: "Error", message: "Blog not found" });
    }

    return res.status(200).json({ status: "Success", blog: result[0] });
  });
});

router.delete("/deleteBlog/:id", (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM blogtable WHERE id = ?";

  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Deletion error:", err);
      return res.json("Deletion error");
    }
    return res.json({ Status: "Success" });
  });
});

export default router;
