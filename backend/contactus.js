import express from "express";
import connectToDatabase from "./db.js";
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

router.get("/getcontacts", (req, res) => {
  const sqlSelect = "SELECT * FROM contacttable";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(result);
  });
});

router.delete("/deletecontact/:contact_id", (req, res) => {
  const id = req.params.contact_id; // Corrected variable name
  const deleteQuery = "DELETE FROM contacttable WHERE contact_id = ?"; // Corrected table name

  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("Deletion error:", err);
      return res.json("Deletion error");
    }
    return res.json({ Status: "Success" });
  });
});


router.post("/addcontact", (req, res) => {
  const {
    email,
    phone,
    subject,
    address,
    message
  }=req.body;
  const sqlInsert =
    "INSERT INTO contacttable(email, phone,subject,address,message) VALUES (?)";
  const values= [
    email,
    phone,
    subject,
    address,
    message,
  ];
  db.query(
    sqlInsert,
    [values],
    (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    }
  );
});

export default router;