import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);


const db = mysql.createConnection({
  host: "localhost",
  user: "rohan",
  password: "357951",
  database: "byway",
});

app.post("/api/addlocations", (req, res) => {
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
