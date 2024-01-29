import express from "express";
import connectToDatabase from "../db.js";

import ContactModel from "../model/ContactModel.js";

const router = express.Router();

let db;
(async function () {
  try {
    db = await connectToDatabase();
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
})();

const insertContact = async (contactData) => {
  const insertQuery = `
    INSERT INTO contacttable (
      email,
      phone,
      subject,
      address,
      message
    ) VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    contactData.getEmail(),
    contactData.getPhone(),
    contactData.getSubject(),
    contactData.getAddress(),
    contactData.getMessage(),
  ];

  return new Promise((resolve, reject) => {
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        reject({ Error: "Insertion error" });
      } else {
        console.log("Data inserted successfully");
        resolve({ Status: "Success" });
      }
    });
  });
};

router.post("/addContact", async (req, res) => {
  const { email, contactNumber, subject, address, message } = req.body;

  const contactData = new ContactModel(
    email,
    contactNumber,
    subject,
    address,
    message
  );

  try {
    const insertResponse = await insertContact(contactData);
    console.log("Insert response:", insertResponse);
    res.json(insertResponse);
  } catch (error) {
    console.error("An error occurred during insertion:", error);
    res.json(error);
  }
});

export default router;