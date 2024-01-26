import express from "express";
import multer from "multer";
import connectToDatabase from "./db.js";

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


router.post("/insertPackage", upload.array("image", 4), async (req, res) => {
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

  const images = req.files.map((file) => ({
    name: file.originalname,
    data: file.buffer,
  }));

  const insertQuery = `
      INSERT INTO packagetable (
        package_title,
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
        image1,
        image2,
        image3,
        image4
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

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
    images[0] ? images[0].data : null,
    images[1] ? images[1].data : null,
    images[2] ? images[2].data : null,
    images[3] ? images[3].data : null,
  ];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
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


router.get("/fetchLocationName/:location_id", (req, res) => {
  const locationId = req.params.location_id;
  const query = "SELECT location_name FROM locationtable WHERE location_id = ?";
  db.query(query, [locationId], (err, result) => {
    if (err) {
      console.error("Error fetching location name:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const locationName = result[0] ? result[0].location_name : null;
      res.json({ locationName });
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

router.put("/updatepackage/:id", upload.array("image", 4), async (req, res) => {
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

  const images = req.files.map((file) => ({
    name: file.originalname,
    data: file.buffer,
  }));

  const updateQuery = `
    UPDATE packagetable 
    SET 
      package_title=?, 
      location_id=?, 
      about=?, 
      guidance_language=?, 
      whats_included=?, 
      what_to_expect=?, 
      departure_and_return=?, 
      accessibility=?, 
      additional_info=?, 
      price=?, 
      discount=?, 
      image1=?, 
      image2=?, 
      image3=?, 
      image4=? 
    WHERE package_id = ?
  `;

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
    images[0] ? images[0].data : null,
    images[1] ? images[1].data : null,
    images[2] ? images[2].data : null,
    images[3] ? images[3].data : null,
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
