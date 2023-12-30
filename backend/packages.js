import express from "express";
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "anup",
  password: "15akc#",
  database: "byway",
});

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
  } = req.body;
  const insertQuery =
    "INSERT INTO packagetable (package_title, location_id, about, guidance_language, whats_included, what_to_expect, departure_and_return, accessibility, additional_info) VALUES (?)";
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
  ];
  db.query(insertQuery, [values], (err, result) => {
    if (err) {
      console.log("Insertion error:", err);
      return res.json("Insertion error");
    }
    return res.json({ Status: "Success" });
  });
});

router.delete("/deletepackages/:id", (req, res) => {});

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

router.put("/editpackages/:id", async (req, res) => {
  try {
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
    } = req.body;

    const updateQuery = `
      UPDATE packagetable 
      SET 
        package_title = ?,
        location_id = ?,
        about = ?,
        guidance_language = ?,
        whats_included = ?,
        what_to_expect = ?,
        departure_and_return = ?,
        accessibility = ?,
        additional_info = ?
      WHERE id = ?`;

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
      packageId,
    ];

    await db.query(updateQuery, values);
    return res.json({ status: "Success", message: "Package updated successfully" });
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ status: "Error", message: "Update error" });
  }
});

export default router;
