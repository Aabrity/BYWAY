import express from "express";
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "anup",
  password: "15akc#",
  database: "byway",
});

router.post("/contactus", (req, res) => {
  const sqlInsert =
    "INSERT INTO contacttable(email, phone,subject,address,message) VALUES (?,?,?,?,?)";
  const Email = req.body.Email;
  const contactnum = req.body.contactnum;
  const subject = req.body.subject;
  const address = req.body.address;
  const message = req.body.message;

  db.query(
    sqlInsert,
    [Email, contactnum, subject, address, message],
    (err, result) => {
      if (err) return res.json(err);
      return res.json(Result);
    }
  );
});

export default router;
