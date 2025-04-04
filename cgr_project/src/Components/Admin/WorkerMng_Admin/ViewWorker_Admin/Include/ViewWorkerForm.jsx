import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../../../../../../public/assets/css/owncss/SignupLogin.css'
import '../../../../../../public/assets/css/owncss/Admin/ViewWorkerForm.css'
import { User } from 'lucide-react';
import { HiIdentification } from "react-icons/hi";
const ViewWorkerForm = () => {
  const { state } = useLocation();
  const worker = state?.worker || {};

  // const [certificate, setCertificate] = useState(null);

  // useEffect(() => {
  //   if (worker?.FinNo) {
  //     axios
  //       .get(`http://localhost:3001/certificates/${worker.FinNo}`)
  //       .then((res) => {
  //         setCertificate(res.data);
  //       })
  //       .catch((err) => console.error("Error fetching certificate:", err));
  //   }
  // }, [worker?.FinNo]);

  // // Function to validate file types
  // const isValidFile = (file) => {
  //   if (!file) return false;
  //   const validExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".gif"];
  //   const ext = file.slice(file.lastIndexOf(".")).toLowerCase();
  //   return validExtensions.includes(ext);
  // };




  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    if (worker.FinNo) {
      axios
        .get(`http://localhost:3001/certificates/${worker.FinNo}`) // Fetch specific FinNo
        .then((response) => {
          setCertificates(response.data);
        })
        .catch((error) => {
          console.error("Error fetching certificate data:", error);
        });
    }
  }, [worker.FinNo]);


//   useEffect(() => {
//   if (worker.FinNo) {
//     axios
//       .get(`http://localhost:3001/certificates/${worker.FinNo}`)  // Use FinNo as URL param
//       .then((response) => {
//         setCertificates(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching certificate data:", error);
//       });
//   }
// }, [worker.FinNo]);

// const [selectedFinNo, setSelectedFinNo] = useState(null);
//   const [selectedWorker, setSelectedWorker] = useState(null);

const [selectedWorker, setSelectedWorker] = useState(null);

useEffect(() => {
  if (!worker?.FinNo) return;

  const fetchWorker = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/addworker/${worker.FinNo}`);
      setSelectedWorker(response.data);
    } catch (error) {
      console.error("Error fetching worker details:", error);
    }
  };

  fetchWorker();
}, [worker?.FinNo]);




  return (
    <div id="content" className="app-content">
      <h1 className="page-header bluetext fw-bold">VIEW DETAILS</h1>
      <div className="card">
        <div className="card-header yellowtext fs-6 fw-bold">WORKER DETAILS</div>
        <div className="card-body">
          <form>

          <div className="row">
          <div className="col-md-6">
          {/* {selectedWorker?.ProfileImg && (
  <img
    src={`http://localhost:3001/${selectedWorker.ProfileImg}`}
    alt="Profile"
    width={230}
    height={230}
    className=""
  />
)} */}

















<h1 className="page-header fw-bold">Profile</h1>
<div class="profilecard">
        <div class="mail">
        <User size={25} color="#555" />
        </div>
        <div class="profile-pic">
        {selectedWorker?.ProfileImg && (
  <img
    src={`http://localhost:3001/${selectedWorker.ProfileImg}`}
    alt="Profile"
    width={80}
    height={80}
    className="profileimg"
  />
)}

        </div>
        
        <div class="bottom">
            <div class="content">
              <div className="my-5"></div>
                <span class="name">{worker.FirstName} {worker.LastName}</span>
                <span class="about-me">{worker.EmpPosition}</span>
            </div>
           <div class="bottom-bottom">
            <div class="social-links-container"> 
            <span className=""> <h6 className="fw-bold text-dark">Emp ID : <span className="bg-white p-2 rounded">121212122</span></h6></span>
            </div>
            {/* <button class="button">Contact Me</button> */}
           </div>
        </div>
        
    </div>

















            </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Employee ID</label>
                <input type="text" className="form-control" value={worker.EmpId || ""} readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Employee Position</label>
                <input type="text" className="form-control" value={worker.EmpPosition || ""} readOnly />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" value={worker.FirstName || ""} readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" value={worker.LastName || ""} readOnly />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">FIN No</label>
                <input type="text" className="form-control" value={worker.FinNo || ""} readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="text" className="form-control" value={worker.ContNum|| ""} readOnly />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">Fields</label>
                <input type="text" className="form-control" value={worker.SelectFeilds || ""} readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <input type="text" className="form-control" value={worker.Gender || ""} readOnly />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
              <table className="table table-bordered">
              <thead className="table-dark">
              {/* <label className="form-label"></label> */}
              <tr>
            <th colSpan="2">Certificate Files</th>
          </tr>
              </thead>
              </table>
              {certificates.length > 0 ? (
  certificates.map((certificate, index) => (
    <div key={index} className="table-responsive mt-3">
      <table className="table table-bordered">
        <thead className="bluebg">
          <tr>
            <th colSpan="2">Certificate {index + 1} - <span className="mx-3 yellowtext fw-bold">{certificate.CertificateName}</span></th>
          </tr>
        </thead>
        <tbody>
          {certificate.CertificateName && (
            <tr>
              <th className="fw-bold">Certificate Name</th>
              <td><span className="fw-bold yellowtext">{certificate.CertificateName}</span></td>
            </tr>
          )}
          {certificate.Category && (
            <tr>
              <th>Category</th>
              <td>{certificate.Category}</td>
            </tr>
          )}
          {certificate.CertNo && (
            <tr>
              <th>Cert No</th>
              <td>{certificate.CertNo}</td>
            </tr>
          )}
          {certificate.CertNoTwo && (
            <tr>
              <th>Cert No Two</th>
              <td>{certificate.CertNoTwo}</td>
            </tr>
          )}
          {certificate.Expiry && (
            <tr>
              <th>Expiry</th>
              <td>{certificate.Expiry}</td>
            </tr>
          )}
          {certificate.BalanceDays && (
            <tr>
              <th>Balance Days</th>
              <td>{certificate.BalanceDays}</td>
            </tr>
          )}
          {certificate.Levels && (
            <tr>
              <th>Levels</th>
              <td>{certificate.Levels}</td>
            </tr>
          )}
          {certificate.Smse && (
            <tr>
              <th>SMSE</th>
              <td>{certificate.Smse}</td>
            </tr>
          )}
          {certificate.IssueDate && (
            <tr>
              <th>Issue Date</th>
              <td>{certificate.IssueDate}</td>
            </tr>
          )}
          {certificate.CourseTitle && (
            <tr>
              <th>Course Title</th>
              <td>{certificate.CourseTitle}</td>
            </tr>
          )}
          {certificate.CertificateFile && (
            <tr>
              <th>Certificate File</th>
              <td>
                <a
                  href={`http://localhost:3001/uploads/${certificate.CertificateFile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm me-2"
                >
                  View
                </a>
                <a
                  href={`http://localhost:3001/download/${certificate.CertificateFile}`}
                  className="btn btn-primary btn-sm"
                >
                  Download
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  ))
) : (
  <p>No certificates found for this FinNo.</p>
)}



              </div>
            </div>
          </form>




























          
        </div>
      </div>
    </div>
  );
};

export default ViewWorkerForm;
