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

app.post("/api/addpackages", (req, res) => {
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
    console.log("success");
    return res.json({ Status: "Success" });
  });
});

app.delete("/api/deletepackages/:id", (req, res) => {
  const packageId = req.params.id;
  const sqlDelete = "DELETE FROM packagetable WHERE package_id = ?";

  db.query(sqlDelete, packageId, (err, result) => {
    if (err) {
      console.log("Deletion error:", err);
      return res.json("Deletion error");
    }
    return res.json({ Status: "Success" });
  });
});

app.listen(8081, () => {
  console.log("8081 is Listening ");
});
