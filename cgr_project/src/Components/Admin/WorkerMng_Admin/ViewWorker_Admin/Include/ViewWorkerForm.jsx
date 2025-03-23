import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewWorkerForm = () => {
  const { state } = useLocation();
  const worker = state?.worker || {};

  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    if (worker?.FinNo) {
      axios
        .get(`http://localhost:3001/certificates/${worker.FinNo}`)
        .then((res) => {
          setCertificate(res.data);
        })
        .catch((err) => console.error("Error fetching certificate:", err));
    }
  }, [worker?.FinNo]);

  // Function to validate file types
  const isValidFile = (file) => {
    if (!file) return false;
    const validExtensions = [".pdf", ".jpg", ".jpeg", ".png", ".gif"];
    const ext = file.slice(file.lastIndexOf(".")).toLowerCase();
    return validExtensions.includes(ext);
  };
  return (
    <div id="content" className="app-content">
      <h1 className="page-header">VIEW WORKER</h1>
      <div className="card">
        <div className="card-header">WORKER DETAILS</div>
        <div className="card-body">
          <form>
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
                <input type="text" className="form-control" value={worker.ContNum || ""} readOnly />
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
              <label className="form-label">Certificate Files</label>
                {certificate ? (
                  <ul>
                    {certificate.BasicSafetyCourseFile &&
                      isValidFile(certificate.BasicSafetyCourseFile) && (
                        <li>
                          <p>Basic Safety Course</p>
                          {certificate.BasicSafetyCourseFile.endsWith(".pdf") ? (
                            <iframe
                              src={`http://localhost:3001/uploads/${certificate.BasicSafetyCourseFile}`}
                              width="300"
                              height="400"
                              title="Basic Safety Course"
                            />
                          ) : (
                            <img
                              src={`http://localhost:3001/uploads/${certificate.BasicSafetyCourseFile}`}
                              alt="Basic Safety Course"
                              width="150"
                              height="150"
                            />
                          )}
                          <br />
                          <a
                            href={`http://localhost:3001/uploads/${certificate.BasicSafetyCourseFile}`}
                            download={certificate.BasicSafetyCourseFile}
                          >
                            Download Basic Safety Course
                          </a>
                        </li>
                      )}
                  </ul>
                ) : (
                  <p>No certificate data found.</p>
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
