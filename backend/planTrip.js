import express from "express";
import mysql from "mysql";

const router = express.Router();
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "cruddabatase",
});

router.get("/gettrip", (re, res) => {
  const sqlSelect = "SELECT * FROM plantrip";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(result);
  });
});
router.get("/getreview", (re, res) => {
  const sqlSelect = "SELECT * FROM review";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

router.post("/inserttrip", (req, res) => {
  const {
    fullName,
    phoneNumber,
    emailAddress,
    selectTrip,
    approxDate,
    tripLength,
    numberOfAdults,
    numberOfChildren,
    tourType,
    hotelType,
    estimatedBudget,
    guideLanguage,
    moreInfo,
    selectCountry,
    whereDidYouFindUs,
  } = req.body;
  sqlInsert =
    "INSERT INTO plantrip(fullName, phoneNumber,emailAddress,selectTrip,approxDate,tripLength,numberOfAdults,numberOfChildren,tourType,hotelType,estimatedBudget,guideLanguage,moreInfo,selectCountry,whereDidYouFindUs) VALUES (?)";
  const values = [
    fullName,
    phoneNumber,
    emailAddress,
    selectTrip,
    approxDate,
    tripLength,
    numberOfAdults,
    numberOfChildren,
    tourType,
    hotelType,
    estimatedBudget,
    guideLanguage,
    moreInfo,
    selectCountry,
    whereDidYouFindUs,
  ];
  db.query(sqlInsert, [values], (err, result) => {
    console.log(err);
  });
});

router.post("/insertreview", (req, res) => {
  const { fullName, title, date, reviewDetails, selectCountry } = req.body;

  const sqlInsert =
    "INSERT INTO review(title,fullName,date,selectCountry,reviewDetails) VALUES (?)";
  const values = [fullName, title, date, reviewDetails, selectCountry];
  db.query(sqlInsert, [values], (err, result) => {
    console.log(err);
  });
});

router.delete("/api/delete/:id", async (req, res) => {
  const submissionId = req.params.id;
  const sqlDelete = "DELETE FROM travel WHERE id=?";

  try {
    const result = await db.query(sqlDelete, submissionId);
    console.log(result);
    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
