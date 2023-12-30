import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import mysql from "mysql";
const router = express.Router();
const salt = 10;

router.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "anup",
  password: "15akc#",
  database: "byway",
});

router.post("/register", (req, res) => {
  const createQuery =
    "INSERT INTO Admins (`username`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      return res.json("Hashing error");
    }
    const values = [req.body.username, req.body.email, hash];
    db.query(createQuery, [values], (err, result) => {
      if (err) {
        console.log("Insertion error:", err);
        return res.json("Insertion error");
      }
      return res.json({ Status: "Success" });
    });
  });
});


router.post("/login", (req, res) => {
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


router.get("/dash", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});


export default router;
