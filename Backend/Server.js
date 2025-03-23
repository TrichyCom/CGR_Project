// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require("multer");
const path = require("path");

const cors = require('cors');
app.use(cors());

const PORT = 3001;


const mysql = require('mysql');
// const mysql = require('mysql2');
// const fs = require("fs");

app.use(express.json());
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

// Serve static files (certificate uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });



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

    const query = `INSERT INTO addworker (EmpId, EmpPosition, CompanyName, FirstName, LastName, ExpYear, ContNum, BankAccNum, SelectFeilds, Department, Age, Gender,
      EmergencyContNum, PanTaxId, SelectRole, FinNo, DOA, DOI, DO_Onboard, WP_No, PP_No, DOB,
      DO_ThumbPrint, DO_Renewal, WP_Expiry, PP_Expiry, SelectCourse, Category, Cert_No, DOE,
      SMSE, Rigger, ssrc_sssrc, Levels, DOI_Two, BalanceDays, WAHA_M, Singnel_Man)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      data.EmpId, data.EmpPosition, data.CompanyName, data.FirstName, data.LastName, data.ExpYear, data.ContNum, 
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
  


// GET Worker by FinNo
app.get('/addworker', (req, res) => {
  const { FinNo } = req.query;
  if (!FinNo) return res.status(400).json({ error: "FIN No is required" });

  const sql = "SELECT FirstName, LastName, DOB FROM addworker WHERE FinNo = ?";
  db.query(sql, [FinNo], (err, result) => {
      if (err) return res.status(500).json({ error: "Database Error" });
      if (result.length === 0) return res.status(404).json({ error: "Worker not found" });

      res.json(result[0]);
  });
});




// addcertificate

// app.post("/addcertificate", async (req, res) => {
//   const { FinNo, BasicSafetyCourse, RopeAccessCourse, MetalScaffoldCourse, LiftingCourse } = req.body;

//   try {
//     await db.query(`
//       INSERT INTO addcertificate (FinNo, BasicSafetyCourse, RopeAccessCourse, MetalScaffoldCourse, LiftingCourse)
//       VALUES (?, ?, ?, ?, ?)`, [FinNo, BasicSafetyCourse || null, RopeAccessCourse || null, MetalScaffoldCourse || null, LiftingCourse || null]);

//     res.json({ message: "Certificate data added successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Database insertion failed" });
//   }
// });



// app.post("/addcertificate", upload.any(), (req, res) => {
//   const { FinNo } = req.body;
//   let query = `INSERT INTO addcertificate (FinNo, BasicSafetyCourse, RopeAccessCourse, MetalScaffoldCourse, LiftingCourse, BasicSafetyCourseFile, RopeAccessCourseFile, MetalScaffoldCourseFile, LiftingCourseFile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   const data = [
//     FinNo,
//     req.body.BasicSafetyCourse || null,
//     req.body.RopeAccessCourse || null,
//     req.body.MetalScaffoldCourse || null,
//     req.body.LiftingCourse || null,
//     req.files.find((file) => file.fieldname === "BasicSafetyCourse_file")?.filename || null,
//     req.files.find((file) => file.fieldname === "RopeAccessCourse_file")?.filename || null,
//     req.files.find((file) => file.fieldname === "MetalScaffoldCourse_file")?.filename || null,
//     req.files.find((file) => file.fieldname === "LiftingCourse_file")?.filename || null,
//   ];

//   db.query(query, data, (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Database error" });
//     }
//     res.json({ message: "Certificates added successfully" });
//   });
// });



// add options

// Fetch fields
app.get("/feilds", (req, res) => {
  db.query("SELECT * FROM feilds", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});



// Add new field
app.post("/feilds", (req, res) => {
  const { Feilds } = req.body;
  db.query("INSERT INTO feilds (Feilds) VALUES (?)", [Feilds], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, Feilds });
  });
});

// Delete field
app.delete("/feilds/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM feilds WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Field deleted" });
  });
});


// get feilds column 

app.get("/feilds", (req, res) => {
  db.query("SELECT Feilds FROM feilds", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});









// add roles

app.get("/roles", (req, res) => {
  db.query("SELECT * FROM roles", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.post("/roles", (req, res) => {
  const { Roles } = req.body;
  db.query("INSERT INTO roles (Roles) VALUES (?)", [Roles], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, Roles });
  });
});


app.delete("/roles/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM roles WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Role deleted successfully!" });
  });
});


// get Roles column
app.get("/roles", (req, res) => {
  db.query("SELECT * FROM roles", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});






// Department

// Fetch all departments
app.get("/departments", (req, res) => {
  db.query("SELECT * FROM Department", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add a new department
app.post("/departments", (req, res) => {
  const { Department } = req.body;
  db.query("INSERT INTO Department (Department) VALUES (?)", [Department], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Department added successfully!" });
  });
});

// Delete a department by ID
app.delete("/departments/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM Department WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Department deleted successfully!" });
  });
});

// particular column get in Department
app.get("/departments", (req, res) => {
  db.query("SELECT id, Department FROM Department", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});










// worker table view

app.get("/workers", (req, res) => {
  const sql = "SELECT Id, EmpId, EmpPosition, FirstName, LastName, ContNum, FinNo, SelectFeilds, Gender FROM addworker";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});




// get particular worker details 

app.get("/workers/:finNo", (req, res) => {
  const finNo = req.params.finNo;
  db.query("SELECT * FROM addworker WHERE FinNo = ?", [finNo], (err, result) => {
    if (err) {
      console.error("Error fetching worker details:", err);
      res.status(500).json({ error: "Error fetching worker details" });
    } else {
      res.json(result[0]);
    }
  });
});



// get particular worker certificate

// app.get("/certificates/:FinNo", (req, res) => {
//   const { FinNo } = req.params;
//   const sql = "SELECT * FROM addcertificate WHERE FinNo = ?";
  
//   db.query(sql, [FinNo], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     if (result.length === 0) return res.status(404).json({ message: "No certificate found" });
//     res.json(result[0]);
//   });
// });



// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Ensure 'uploads' directory exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

app.post("/certificates", upload.single("CertificateFile"), async (req, res) => {
  try {
    const {
      FinNo,
      CertificateName,
      Category,
      CertNo,
      Expiry,
      BalanceDays,
      Levels,
      Smse,
      IssueDate,
      WahaM,
      Rigger,
      SignalMan,
      SsrcSssrc,
      CourseTitle,
      CourseTitleTwo,
    } = req.body;

    const CertificateFile = req.file ? req.file.filename : null;

    const sql = `INSERT INTO certificate (FinNo, CertificateName, Category, CertNo, Expiry, BalanceDays, Levels, Smse, IssueDate, WahaM, Rigger, SignalMan, SsrcSssrc, CourseTitle, CourseTitleTwo, CertificateFile)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [FinNo, CertificateName, Category, CertNo, Expiry, BalanceDays, Levels, Smse, IssueDate, WahaM, Rigger, SignalMan, SsrcSssrc, CourseTitle, CourseTitleTwo, CertificateFile], (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.status(201).json({ message: "Certificate added successfully", id: result.insertId });
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});







// GET - Fetch Certificate Records
app.get("/certificates", (req, res) => {
  const sql = "SELECT * FROM certificate";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching certificates:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
});

// GET - Download Certificate File
app.get("/certificates/download/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ error: "File not found" });
  }
});


// Fetch Certificates by FinNo
app.get("/certificates/:FinNo", (req, res) => {
  const { FinNo } = req.params;
  const sql = "SELECT * FROM certificate WHERE FinNo = ?";
  
  db.query(sql, [FinNo], (err, results) => {
    if (err) {
      console.error("Error fetching certificates:", err);
      return res.status(500).json({ error: "Failed to fetch certificates" });
    }
    res.json(results);
  });
});


// delete the particular row in certificate table

app.delete("/certificates/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM certificate WHERE Id = ?", [id]);
    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting certificate" });
  }
});










app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  