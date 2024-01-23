// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "rohan",
  password: "357951",
  database: "byway",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/api/saveLocation", (req, res) => {
  const { location_name, longitude, latitude } = req.body;

  const sql =
    "INSERT INTO locationtable (location_name, longitude, latitude) VALUES (?, ?, ?)";
  const values = [location_name, longitude, latitude];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).json({ error: "Error saving location." });
    } else {
      console.log("Location saved to MySQL:");
      res.json({ message: "Location saved successfully!" });
    }
  });
});

app.get("/api/getLocations", (req, res) => {
  const sql = "SELECT longitude, latitude FROM locationtable";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err);
      res.status(500).json({ error: "Error fetching locations." });
    } else {
      console.log("Locations fetched from MySQL:");
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
