// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3001;


const mysql = require('mysql');
// const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'Mysql-prakashs', 
  database: 'CGR'  
});


db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;




app.use(bodyParser.json());





// API to Add Worker
// app.post('/addworker', (req, res) => {
//     const {
//       EmpId, CompanyName, FullName, ExpYear, ContNum, BankAccNum, SelectFeilds, Department, Age, Gender,
//       EmergencyContNum, PanTaxId, SelectRole, FinNo, DOA, DOI, DO_Onboard, WP_No, PP_No, DOB,
//       DO_ThumbPrint, DO_Renewal, WP_Expiry, PP_Expiry, SelectCourse, Category, Cert_No, DOE,
//       SMSE, Rigger, ssrc_sssrc, Levels, DOI_Two, BalanceDays, WAHA_M, Singnel_Man
//     } = req.body;
  
//     const sql = `INSERT INTO addworker (EmpId, CompanyName, FullName, ExpYear, ContNum, BankAccNum, SelectFeilds, Department, Age, Gender,
//       EmergencyContNum, PanTaxId, SelectRole, FinNo, DOA, DOI, DO_Onboard, WP_No, PP_No, DOB,
//       DO_ThumbPrint, DO_Renewal, WP_Expiry, PP_Expiry, SelectCourse, Category, Cert_No, DOE,
//       SMSE, Rigger, ssrc_sssrc, Levels, DOI_Two, BalanceDays, WAHA_M, Singnel_Man)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
//     db.query(sql, [
//       EmpId, CompanyName, FullName, ExpYear, ContNum, BankAccNum, SelectFeilds, Department, Age, Gender,
//       EmergencyContNum, PanTaxId, SelectRole, FinNo, DOA, DOI, DO_Onboard, WP_No, PP_No, DOB,
//       DO_ThumbPrint, DO_Renewal, WP_Expiry, PP_Expiry, SelectCourse, Category, Cert_No, DOE,
//       SMSE, Rigger, ssrc_sssrc, Levels, DOI_Two, BalanceDays, WAHA_M, Singnel_Man
//     ], (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.status(500).json({ error: 'Database insertion failed' });
//       }
//       res.status(201).json({ message: 'Worker added successfully', workerId: result.insertId });
//     });
//   });



// Add Worker 


app.post("/addworker", (req, res) => {
    const data = req.body;
      
        // Ensure SelectFeilds is stored as a JSON string
    const selectFieldsString = JSON.stringify(data.SelectFeilds);

    const query = `INSERT INTO addworker (EmpId, CompanyName, FullName, ExpYear, ContNum, BankAccNum, SelectFeilds, Department, Age, Gender,
      EmergencyContNum, PanTaxId, SelectRole, FinNo, DOA, DOI, DO_Onboard, WP_No, PP_No, DOB,
      DO_ThumbPrint, DO_Renewal, WP_Expiry, PP_Expiry, SelectCourse, Category, Cert_No, DOE,
      SMSE, Rigger, ssrc_sssrc, Levels, DOI_Two, BalanceDays, WAHA_M, Singnel_Man)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.EmpId, data.CompanyName, data.FullName, data.ExpYear, data.ContNum, 
      data.BankAccNum,selectFieldsString, data.Department, data.Age, 
      data.Gender, data.EmergencyContNum, data.PanTaxId, data.SelectRole, data.FinNo, data.DOA, 
      data.DOI, data.DO_Onboard, data.WP_No, data.PP_No, data.DOB, data.DO_ThumbPrint, data.DO_Renewal, data.WP_Expiry, data.PP_Expiry,
      data.SelectCourse, data.Category, data.Cert_No, data.DOE, data.SMSE, data.Rigger, data.ssrc_sssrc, data.Levels,
      data.DOI_Two, data.BalanceDays, data.WAHA_M, data.Singnel_Man
    ];
  
    db.query(query, values, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error inserting data", error: err });
      }
      res.json({ message: "Worker added successfully!" });
    });
  });
  



//   app.get("/getworkers", (req, res) => {
//     db.query("SELECT * FROM addworker", (err, results) => {
//       if (err) {
//         return res.status(500).json({ message: "Error fetching data", error: err });
//       }
  
//       // Parse SelectFeilds before sending response
//       const formattedResults = results.map(worker => ({
//         ...worker,
//         SelectFeilds: JSON.parse(worker.SelectFeilds || "[]") // Ensure it's an array
//       }));
  
//       res.json(formattedResults);
//     });
//   });
  














app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  