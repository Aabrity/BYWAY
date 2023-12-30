import express from "express";
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "anup",
  password: "15akc#",
  database: "byway",
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
      return res.json(Result);
    }
  );
});

export default router;
