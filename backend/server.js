import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import cookieParser from "cookie-parser";
const salt = 10;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "rohan",
  password: "357951",
  database: "byway",
});

app.post("/register", (req, res) => {
  const createQuery =
    "INSERT INTO Admins (`username`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      return res.json("Hashing error");
    }
    const values = [req.body.username, req.body.email, hash];
    db.query(createQuery, [values], (err, result) => {
      if (err) {
        console.log("Insertion error:", err); // Print the error
        return res.json("Insertion error");
      }
      return res.json({ Status: "Success" });
    });
  });
});

app.post("/login", (req, res) => {
  const loginQuery = "SELECT* FROM Admins WHERE email= ?";
  db.query(loginQuery, [req.body.email], (err, data) => {
    if (err) {
      return res.json({ Error: "Login error in server" });
    }
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) {
            return res.json({ Error: "Password Compare error" });
          }
          if (response) {
            const name = data[0].username;
            const token = jwt.sign({ name }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password doesn't match" });
          }
        }
      );
    } else {
      return res.json({ Error: "Admin doesn't exist" });
    }
  });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "Authentication Failure" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Invalid Token" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/dash", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.listen(8081, () => {
  console.log("8081 is Listening ");
});
