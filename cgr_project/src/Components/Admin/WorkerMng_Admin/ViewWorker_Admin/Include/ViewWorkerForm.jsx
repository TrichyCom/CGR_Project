import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";
import '../../../../../../public/assets/css/owncss/SignupLogin.css'
import '../../../../../../public/assets/css/owncss/Admin/ViewWorkerForm.css'
import ComLogo from '../../../../../../public/assets/img/Logo/Clogo.jpeg'
import { User } from 'lucide-react';
import { FaIdBadge } from 'react-icons/fa';
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVenusMars } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaFolder } from 'react-icons/fa';

const ViewWorkerForm = () => {
  const { state } = useLocation();
  const worker = state?.worker || {};


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



  const [alldata, setalldata] = useState(""); // "" means OverView is selected



  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (worker.FinNo) {
      axios
        .get(`http://localhost:3001/workerreportfiles/${worker.FinNo}`)
        .then((res) => setReportData(res.data))
        .catch((err) => console.error("Error fetching worker report data:", err));
    }
  }, [worker.FinNo]);

  const fileFields = [
    "IPA",
    "Passport",
    "Bond",
    "Onboard",
    "Medical",
    "Issuance",
    "MOMThumbPrint",
    "IC",
    "Contract"
  ];



  const handleView = (filename) => {
    window.open(`http://localhost:3001/view/workerreportfile/${filename}`, '_blank');
  };

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `http://localhost:3001/download/workerreportfile/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };





  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    if (worker.FinNo) {
      axios
        .get(`http://localhost:3001/education/${worker.FinNo}`)
        .then((res) => setEducationData(res.data))
        .catch((err) => console.error("Error fetching education data", err));
    }
  }, [worker.FinNo]);











  const safe = (value) => {
    if (
      value === undefined ||
      value === null ||
      value === "undefined" ||
      value === "null" ||
      (typeof value === "string" && value.trim().toLowerCase() === "undefined")
    ) {
      return "";
    }
    return value;
  };

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const firstName = safe(worker.FirstName);
    const lastName = safe(worker.LastName);
    const empPosition = safe(worker.EmpPosition) || "—";
    const companyName = safe(worker.CompanyName) || "—";
    const expYear = safe(worker.ExpYear) || "—";
    const selectFields = Array.isArray(worker.SelectFeilds)
      ? worker.SelectFeilds.filter(f => safe(f)).join(", ")
      : safe(worker.SelectFeilds) || "—";
    const department = safe(worker.Department) || "—";
    const onboardDate = safe(worker.DO_Onboard) || "—";
    const dob = safe(worker.DOB) || "—";
    const age = safe(worker.Age) || "—";
    const empId = safe(worker.EmpId) || "—";

    const story = `MMeet ${firstName} ${lastName}, currently working as a ${empPosition} at ${companyName}.With ${expYear} years of experience, ${firstName} brings skills in ${selectFields} to the team.They are part of the ${department} department and officially joined us on ${onboardDate}. Born on ${dob}, ${firstName} is ${age} years old and continues to be a valuable asset to our growing company.Employee ID: ${empId} — we're lucky to have ${firstName} on board!`;

    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < story.length) {
        setDisplayedText((prev) => prev + story.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [worker]); // only depends on worker




  return (
    <div id="content" className="app-content viewformfullcontanttop">


<div class="d-lg-flex mb-lg-3 mb-2 ">
              <h3 class="page-headr mb-6 flex-1" id='data' ><span className="bg-dark text-white px-4 py-1 border-white border rounded-start rounded-5">WORKER DETAILS</span></h3>
              <div class="row gx-2 pb-lg-3 pb-2"></div>

              <span class="d-none d-lg-flex align-items-center">
                <Link to="/workermngadmin" className="btn yellowtext btn-sm d-flex pe-3 fw-bold buttonborder" >
                  <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                  BACK
                </Link>
              </span>

            </div>




      <div className="card viewformfullcontant">
        <div className="card-header yellowtext fs-6 fw-bold">WORKER DETAILS</div>
        <div className="card-body">

          <form>

            <h1 className="page-header fw-bold px-3">Profile</h1>
            <div className="row typing-container">
              <div className="col-md-3 ">
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
                        {/* <span className=""> <h6 className="fw-bold text-dark">Emp ID : <span className="bg-white p-2 rounded">{worker.EmpId}</span></h6></span> */}
                        <img src={ComLogo} alt="logo" className="w-25 h-25 mx-auto rounded rounded-4"></img>
                      </div>
                      {/* <button class="button">Contact Me</button> */}
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-md-9">
                <div className=" px-4">
                  <div style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", padding: "1rem" }}>
                    <span className="text-primary">Employee Story...</span><br></br>
                    {displayedText}
                    <span className="blinking-cursor">|</span>
                  </div>



                </div>
              </div>

            </div>

            {/* Basic details */}
            <h1 className="page-header fw-bold my-2 px-3 mt-4">Basic Details</h1>
            <div className="row border border-2 py-5 rounded mx-2 bg-dark">
              <div className="col-md-4 border-3 border-end">

                <tr className="">

                  <td className="px-4 py-3 text-white fw-bold"> <FaIdBadge className="fs-3 text-warnig yellowtext" /> Employee ID </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.EmpId || "—"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white fw-bold"><FaUserTie className="fs-3 text-warnig yellowtext" /> Position </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.EmpPosition || "—"}</td>
                </tr>

              </div>
              <div className="col-md-4 border-3 border-end">
                <tr className="">
                  <td className="px-4 py-3 text-white fw-bold"><FaUser className="fs-4 text-warnig yellowtext" /> FullName </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.FirstName || "—"} {worker.LastName || ""}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white fw-bold"><FaRegCalendarAlt className="fs-4 text-warnig yellowtext" /> Age </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.Age || "—"}</td>
                </tr>

              </div>
              <div className="col-md-4">
                <tr className="">
                  <td className="px-4 py-3 text-white fw-bold"><FaPhoneAlt className="fs-4 text-warnig yellowtext" /> Contact Number </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.ContNum || "—"}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white fw-bold"><FaVenusMars className="fs-3 text-warnig yellowtext" /> Gender </td>
                  <td className="fw-bold">:</td>
                  <td className="px-4 py-3 text-white">{worker.Gender || "—"}</td>
                </tr>
              </div>
            </div>












            <div className="border border-3  my-4 rounded"></div>

            <div className="radio-input d-flex gap-2 my-4 mx-auto">
              {["OverView", "Certificate", "Reports", "EmergencyCon", "Education"].map((SelectOptions) => {
                const value = SelectOptions === "OverView" ? "" : SelectOptions;
                const isChecked = alldata === value;

                return (
                  <label key={SelectOptions} className={`label w-75 ${isChecked ? "active" : ""}`}>
                    <input
                      type="radio"
                      className=""
                      name="section"
                      value={value}
                      checked={isChecked}
                      onChange={() => setalldata(value)}
                    />
                    <span className="text">{SelectOptions}</span>
                  </label>
                );
              })}
            </div>





            {alldata === "" && (
              <>
                <h1 className="page-header fw-bold my-2 px-3 mt-4">OverAll Details</h1>
                <div className="row border border-2 py-5 rounded mx-2 bg-dark">
                  <div className="col-md-4 border-3 border-end">
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaBuilding className="fs-3 text-warning" /> Company Name
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.CompanyName || "—"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaBriefcase className="fs-3 text-warning" /> Exp Year
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.ExpYear || "—"}</td>
                    </tr>
                  </div>

                  <div className="col-md-4 border-3 border-end">
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaLayerGroup className="fs-3 text-warning" /> Feilds
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">
                        {worker.SelectFeilds || ""}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaSitemap className="fs-3 text-warning" /> Department
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white"> {worker.Department || "—"}</td>
                    </tr>
                  </div>

                  <div className="col-md-4">
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaCalendarCheck className="fs-3 text-warning" /> DO Onboard
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.DO_Onboard || "—"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaBirthdayCake className="fs-3 text-warning" /> DOB
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.DOB || "—"}</td>
                    </tr>
                  </div>
                </div>
              </>
            )}


            {alldata === "EmergencyCon" && (
              <>
                <h1 className="page-header fw-bold my-2 px-3 mt-4">Emergency Contant</h1>
                <div className="row border border-2 py-5 rounded mx-2 bg-dark">
                  <div className="col-md-4">
                    <tr>
                      <td className="px-4 py-3 text-white fw-bold">
                        <FaBuilding className="fs-3 text-warning" /> Emergency Cont Num
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.EmergencyContNum || "—"}</td>
                    </tr>
                    <tr className="">
                      <td className="px-4 py-3 text-white fw-bold"><FaPhoneAlt className="fs-4 text-warning" /> Contact Number </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-white">{worker.ContNum || "—"}</td>
                    </tr>
                  </div>


                </div>
              </>
            )}






            {alldata === "Certificate" && (
              <>
                <h1 className="page-header fw-bold my-2 px-3 mt-4">CERTIFICATE FILES</h1>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <table className="table table-bordered">
                      <thead className="table-dark">
                        {/* <label className="form-label"></label> */}
                        <tr>
                          <th colSpan="2" className="card-header "><span className="yellowtext fs-6 fw-bold">CERTIFICATE FILES</span></th>

                        </tr>
                      </thead>
                    </table>
                  </div>
                  {certificates.length > 0 ? (
                    certificates.map((certificate, index) => (

                      <div className="col-md-6 col-xl-4 col-lg-6 col-sm-6 col-4 mt-5" key={index}>
                        <div className="cartificatecard w-75">
                          <div className="cartificatecardcontent">
                            <div className="back">
                              <div className="back-content">


                                <div class="foldercontainer">
                                  <div class="folderfolder">
                                    <div class="front-side">
                                      <div class="tip"></div>
                                      <div class="cover"></div>
                                    </div>
                                    <div class="back-side cover"></div>
                                  </div>
                                  <label class="custom-file-upload fw-bold">
                                    {certificate.CertificateName}
                                  </label>
                                </div>


                              </div>
                            </div>


                            <div className="front">
                              <div className="cartificatecardimg">
                                <div className="circle"></div>
                                <div className="circle" id="right"></div>
                                <div className="circle" id="bottom"></div>
                              </div>
                              <div className="front-content">
                                <small className="badge">{index + 1}</small>
                                <div className="description">
                                  <div className="title">
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
                                    <div className="border border-3 my-4 border-light rounded"></div>
                                  </div>
                                  {/* <p className="card-footer">
                30 Mins &nbsp; | &nbsp; 1 Serving
              </p> */}
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    ))
                  ) : (
                    <p>No certificates found for this FinNo.</p>
                  )}




                </div>
              </>
            )}



            {alldata === "Reports" && (
              <>
                <h1 className="page-header fw-bold my-2 px-3 mt-4">REPORTS DETAILS</h1>
                <div className=" border rounded">
                  <div className="card mb-4">
                    <div className="card-header yellowtext fs-6 fw-bold">REPORTS DETAILS</div>
                    <div className="card-body">
                      {reportData ? (
                        <>
                          <div className="mb-3">
                            {/* <strong>FinNo:</strong> {reportData.FinNo} */}
                          </div>
                          <div className="row">
                            {fileFields.map((field) => (
                              reportData[field] && (
                                <div className="col-md-4 mb-4" key={field}>
                                  <div className="reportcard h-100 shadow-sm border-primary border-2">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                      <h5 className="card-title text-primary">{field}</h5>
                                      <p className="card-text text-truncate">
                                        <FaFolder size={32} color="goldenrod" />
                                      </p>
                                      <div className="mt-auto">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-primary me-2 reportcardbutton"
                                          onClick={() => handleView(reportData[field])}
                                        >
                                          <span class="lable"> View</span>

                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-success reportcardbutton"
                                          onClick={() => handleDownload(reportData[field])}
                                        >
                                          <span class="lable"> Download</span>
                                        </button>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        </>
                      ) : (
                        <p>Loading report data or no data found for this worker.</p>
                      )}
                    </div>
                  </div>

                </div>
              </>
            )}





            {alldata === "Education" && (
              <>
                <h1 className="page-header fw-bold my-2 px-3 mt-4">Education Details</h1>
                {educationData.length > 0 ? (
                  <div className="row px-3">
                    {educationData.map((edu, index) => (
                      <div className="col-md-4 mb-4" key={edu.Id}>
                        <div className="card h-100 shadow-sm border border-2">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">Education {index + 1}</h5>
                            <p className="card-text">
                              <strong>Title:</strong> {edu.Education}
                            </p>
                          </div>
                          <div className="card-footer d-flex justify-content-between">
                            <a
                              href={`http://localhost:3001/uploads/${edu.EducationFile}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-success btn-sm"
                            >
                              View
                            </a>
                            <a
                              href={`http://localhost:3001/download/${edu.EducationFile}`}
                              className="btn btn-primary btn-sm"
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="px-3">No education records found for this FinNo.</p>
                )}

              </>
            )}








            {/* <div className="row">
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
            </div> */}











            {/* <div className="row mt-3">
              <div className="col-md-12">
              <table className="table table-bordered">
              <thead className="table-dark">
              
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
            </div> */}
          </form>




























        </div>
      </div>
    </div>
  );
};

export default ViewWorkerForm;
