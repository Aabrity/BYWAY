import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import mysql from "mysql";
import dotenv from 'dotenv'

import Admin from "../model/AdminModel.js";

const router = express.Router();
router.use(cookieParser());
const salt=10;

const db = mysql.createConnection({
  host: "localhost",
  user: "rohan",
  password: "357951",
  database: "byway",
});
dotenv.config()

//Login API call
const loginUser = async (user) => {
  const loginQuery = "SELECT * FROM Admins WHERE email= ?";

  return new Promise((resolve, reject) => {
    db.query(loginQuery, [user.getEmail()], (err, data) => {
      if (err) {
        reject({ Error: "Login error in server" });
      }

      if (data.length > 0) {
        bcrypt.compare(
          user.getPassword().toString(),
          data[0].password,
          (err, response) => {
            if (err) {
              reject({ Error: "Password Compare error" });
            }

            if (response) {
              const name = data[0].username;

              // Create a JWT token
              const token = jwt.sign(
                { name, email: user.getEmail() },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1d",
                }
              );

              // Attach the token to the response for the client to store
              resolve({
                Status: "Success",
                UserData: { name, email: user.getEmail() },
                Token: token,
              });
            } else {
              reject({ Error: "Password doesn't match" });
            }
          }
        );
      } else {
        reject({ Error: "Admin doesn't exist" });
      }
    });
  });
};

// Controller endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = new Admin(email, password);

  try {
    const response = await loginUser(user);

    // Securely store the token in an HttpOnly cookie
    res.cookie("token", response.Token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development", // Set to true in production if using HTTPS
      sameSite: "strict", // Prevent CSRF attacks
    });

    res.json(response);
  } catch (error) {
    res.json(error);
  }
});



export default router;
