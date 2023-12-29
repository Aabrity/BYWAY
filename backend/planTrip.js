import express from 'express';
import mysql from 'mysql';
const router = express.Router();


const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'12345',
        database:'cruddabatase'
    }
)

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// app.get('/',(re,res)=>{
//     const sqlInsert = "INSERT INTO travel (fullName, phoneNumber, emailAddress) VALUES ('inception', 985109, 'example@email.com');";

//     db.query(sqlInsert,(err,result)=>{
//         res.send("helllo");
//     });
  
// })

router.get('/api/get',(re,res)=>{
    const sqlSelect = "SELECT * FROM travel";

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
        console.log(result);
    });
  
})
router.get('/api/get/review',(re,res)=>{
    const sqlSelect = "SELECT * FROM review";

    db.query(sqlSelect,(err,result)=>{
        res.send(result);
        console.log(result);
    });
  
})

router.post("/api/insert",(req,res)=>{
    const fullName=req.body.fullName;
    const phoneNumber=req.body.phoneNumber;
    const emailAddress=req.body.emailAddress;
    const selectTrip=req.body.selectTrip;
    const approxDate=req.body.approxDate;
    const tripLength=req.body.tripLength;
    const numberOfAdults=req.body.numberOfAdults;
    const numberOfChildren=req.body.numberOfChildren;
    const tourType=req.body.tourType;
    const hotelType=req.body.hotelType;
    const estimatedBudget=req.body.estimatedBudget;
    const guideLanguage=req.body.guideLanguage;
    const moreInfo=req.body.moreInfo;
    const selectCountry=req.body.selectCountry;
    const whereDidYouFindUs=req.body.whereDidYouFindUs;
    const sqlInsert=
"INSERT INTO travel(fullName, phoneNumber,emailAddress,selectTrip,approxDate,tripLength,numberOfAdults,numberOfChildren,tourType,hotelType,estimatedBudget,guideLanguage,moreInfo,selectCountry,whereDidYouFindUs) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"

    db.query(sqlInsert,[fullName,phoneNumber,emailAddress,selectTrip,approxDate,tripLength,numberOfAdults,numberOfChildren,tourType,hotelType,estimatedBudget,guideLanguage,moreInfo,selectCountry,whereDidYouFindUs],(err,result)=>{
        console.log(err);
    });
})

router.post("/api/insert/review",(req,res)=>{
    const fullName=req.body.fullName;
    const title=req.body.title;
    const date=req.body.date;
    
    const reviewDetails=req.body.reviewDetails;
    
    const selectCountry=req.body.selectCountry;
   
    const sqlInsert=
"INSERT INTO review(title,fullName,date,selectCountry,reviewDetails) VALUES (?,?,?,?,?)"

    db.query(sqlInsert,[title,fullName,date,selectCountry,reviewDetails],(err,result)=>{
        console.log(err);
    });
})


router.delete("/api/delete/:id", async (req, res) => {
    const submissionId = req.params.id;
    const sqlDelete = "DELETE FROM travel WHERE id=?";

    try {
        const result = await db.query(sqlDelete, submissionId);
        console.log(result);
        res.json({ message: 'Submission deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// ...

// app.put('/api/update/review/:id', async (req, res) => {
//     const reviewId = req.params.id;
//     const action = req.body.action; // 'increment' or 'decrement'
//     const sqlUpdate = action === 'increment'
//         ? "UPDATE review SET likes = likes + 1 WHERE id = ?"
//         : "UPDATE review SET dislikes = dislikes + 1 WHERE id = ?";

//     try {
//         const result = await db.query(sqlUpdate, [reviewId]);
//         console.log(result);
//         res.json({ message: 'Review updated successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// ...



export default router;