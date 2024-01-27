import express from "express";
import connectToDatabase from "../db.js";

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