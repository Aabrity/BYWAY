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

app.post("/api/insertcontactus", (req, res) => {
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
