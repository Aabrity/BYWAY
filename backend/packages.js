import express from "express";
import mysql2 from "mysql";

const router = express.Router();

const db = mysql2.createConnection({
  host: "localhost",
  user: "anup",
  password: "15akc#",
  database: "byway",
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "rohan",
//   password: "357951",
//   database: "byway",
// });

router.post("/addpackages", (req, res) => {
  const {
    title,
    location_id,
    about,
    guidance_language,
    whats_included,
    what_to_expect,
    departure_and_return,
    accessibility,
    additional_info,
    price,
    discount
  } = req.body;
  const insertQuery =
  "INSERT INTO packagetable (package_title, location_id, about, guidance_language, whats_included, what_to_expect, departure_and_return, accessibility, additional_info,price, discount) VALUES (?)";
  const values = [
    title,
    location_id,
    about,
    guidance_language, 
    whats_included,
    what_to_expect,
    departure_and_return,
    accessibility,
    additional_info,
    price,
    discount
  ];
  db.query(insertQuery, [values], (err, result) => {
    if (err) {
      console.log("Insertion error:", err);
      return res.json("Insertion error");
    }
    return res.json({ Status: "Success" });
  });
});

router.delete("/deletepackages/:id", (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM packagetable WHERE package_id = ?";

  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log("Deletion error:", err);
      return res.json("Deletion error");
    }
    return res.json({ Status: "Success" });
  });
});


router.post("/addlocations", (req, res) => {
  const { location } = req.body;
  const query = "INSERT INTO locationtable (location) VALUES (?)";

  db.query(query, [location], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ status: "Error" });
    } else {
      res.status(200).json({ status: "Success", location_id: result.insertId });
    }
  });
});

router.put("/updatepackage/:id", (req, res) => {
  const packageId = req.params.id;
  const {
    title,
    location_id,
    about,
    guidance_language,
    whats_included,
    what_to_expect,
    departure_and_return,
    accessibility,
    additional_info,
    price,
    discount,
  } = req.body;

  const updateQuery =
    "UPDATE packagetable SET package_title=?, location_id=?, about=?, guidance_language=?, whats_included=?, what_to_expect=?, departure_and_return=?, accessibility=?, additional_info=?, price=?, discount=? WHERE package_id = ?";

  const values = [
    title,
    location_id,
    about,
    guidance_language,
    whats_included,
    what_to_expect,
    departure_and_return,
    accessibility,
    additional_info,
    price,
    discount,
    packageId,
  ];

  db.query(updateQuery, values, (err, result) => {
    if (err) {
      console.log("Update error:", err);
      return res.status(500).json({ status: "Error", message: "Update error", error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ status: "Error", message: "Package not found" });
    }
    return res.status(200).json({ status: "Success" });
  });
});



router.get("/getpackages", (req, res) => {
  const selectQuery = "SELECT * FROM packagetable";

  db.query(selectQuery, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ status: "Error", message: "Fetch error" });
    }
    return res.status(200).json({ status: "Success", packages: result });
  });
});

router.get("/getselectedpackage/:id", (req, res) => {
  const packageId = req.params.id;
  const selectQuery = "SELECT * FROM packagetable WHERE package_id = ?";

  db.query(selectQuery, [packageId], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ status: "Error", message: "Fetch error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ status: "Error", message: "Package not found" });
    }

    return res.status(200).json({ status: "Success", package: result[0] });
  });
});



export default router;
