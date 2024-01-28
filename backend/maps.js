import express from "express";
import connectToDatabase from './db.js'

const router=express.Router();

let db;
(async function () {
  try {
    db = await connectToDatabase();
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
})();

router.post("/saveLocation", (req, res) => {
  const { location_name, longitude, latitude } = req.body;

  const sql =
    "INSERT INTO locationtable (location_name, longitude, latitude) VALUES (?, ?, ?)";
  const values = [location_name, longitude, latitude];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).json({ error: "Error saving location." });
    } else {
      console.log("Location saved to MySQL:");
      res.json({ message: "Location saved successfully!" });
    }
  });
});

router.get("/getLocations", (req, res) => {
  const sql = "SELECT longitude, latitude FROM locationtable";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err);
      res.status(500).json({ error: "Error fetching locations." });
    } else {
      console.log("Locations fetched from MySQL:");
      res.json(results);
    }
  });
});
router.get("/fetchAvailableLocations", (req, res) => {
  const query = "SELECT location_id, location_name FROM locationtable";
  db.query(query, (err, locations) => {
    if (err) {
      console.error("Error fetching locations:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(locations);
    }
  });
});
export default router;