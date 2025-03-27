import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddWorkerFormThreeAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FinNo: "",
    CertificateName: "",
    Category: "",
    CertNo: "",
    Expiry: "",
    BalanceDays: "",
    Levels: "",
    Smse: "",
    IssueDate: "",
    WahaM: "",
    Rigger: "",
    SignalMan: "",
    SsrcSssrc: "",
    CourseTitle: "",
    CourseTitleTwo: "",
  });

  const [certificateFile, setCertificateFile] = useState(null);
  const [certificateData, setCertificateData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  // Fetch data function
  const fetchData = () => {
    if (formData.FinNo) {
      axios.get(`http://localhost:3001/certificates/${formData.FinNo}`)
        .then((response) => {
          setCertificateData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching certificate data:", error);
        });
    }
  };

  // Auto-refresh every 5 seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5 sec
    return () => clearInterval(interval);
  }, [formData.FinNo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setCertificateFile(e.target.files[0]);
    }
  };



  // Handle navigation to previous form
  const handlePre = () => {
    localStorage.setItem("workerData", JSON.stringify(formData));
    navigate("/addworkerformtwomain");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/certificates/${id}`);
      setCertificateData(certificateData.filter((cert) => cert.Id !== id));
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.FinNo) {
      alert("Please enter FinNo.");
      return;
    }

    // Convert SelectFields array to a string before sending to the backend
    const formattedData = {
      ...formData,
      SelectFields: JSON.stringify(formData.SelectFields),
    };

    try {
      const response = await fetch("http://localhost:3001/addworker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();
      console.log(result.message);
      alert("Worker added successfully!");
      localStorage.removeItem("workerData");

      setFormData({
        SelectCourse: "",
        Category: "",
        Levels: "",
        Cert_No: "",
        DOI: "",
        DOE: "",
        BalanceDays: "",
        SMSE: "",
        WAHA_M: "",
        Rigger: "",
        ssrc_sssrc: "",
        Singnel_Man: "",
        SelectFields: [],
      });


    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };






  const handleUpload = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    if (certificateFile) {
      formDataToSend.append("CertificateFile", certificateFile);
    }

    try {
      await axios.post("http://localhost:3001/certificates", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Certificate Added Successfully!");
      // Clear file state
      setCertificateFile(null);

      // **Manually clear file input**
      document.getElementById("fileInput").value = "";

      // Clear form but keep FinNo to avoid losing data
      setFormData((prev) => ({
        ...prev,
        CertificateName: "",
        Category: "",
        CertNo: "",
        CertNoTwo: "",
        Expiry: "",
        BalanceDays: "",
        Levels: "",
        Smse: "",
        IssueDate: "",
        WahaM: "",
        Rigger: "",
        SignalMan: "",
        SsrcSssrc: "",
        CourseTitle: "",
        CourseTitleTwo: "",

      }));

      // Refresh GET request after upload
      fetchData();

    } catch (error) {
      alert("Failed to add certificate.");
    }
  };








  const [formDataeducation, setFormDataeducation] = useState({
  
    Education: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle dropdown change
  const handleInputChangeeducation = (e) => {
    setFormDataeducation({ ...formDataeducation, Education: e.target.value });
  };

  // Handle file selection
  const handleFileChangeeducation = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  
  

  // const UploadEducation = async (e) => {
  //   e.preventDefault();
  
  //   console.log("Current formDataeducation:", formDataeducation); // Debugging
  
  //   if (!formDataeducation.FinNo) {
  //     alert("FinNo is missing. Please check the stored data.");
  //     return;
  //   }
  
  //   if (!formDataeducation.Education || !selectedFile) {
  //     alert("Please enter FinNo, select an education level, and upload a file.");
  //     return;
  //   }
  
  //   const formDataToSend = new FormData();
  //   formDataToSend.append("FinNo", formDataeducation.FinNo);
  //   formDataToSend.append("Education", formDataeducation.Education);
  //   formDataToSend.append("EducationFile", selectedFile);
  
  //   console.log("Uploading Education with FinNo:", formDataeducation.FinNo); // Debugging
  
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/upload-education",
  //       formDataToSend,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     alert(response.data.message);
  //     fetchDataeducation(); // Refresh data after upload
  //   } catch (error) {
  //     console.error("Error uploading education data:", error);
  //     alert("Failed to upload education data.");
  //   }
  // };
  
  // Ensure FinNo is set correctly from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    console.log("Loaded FinNo from localStorage:", storedData.FinNo); // Debugging
  
    setFormDataeducation((prevData) => ({
      ...prevData,
      FinNo: storedData.FinNo || "", // Ensure FinNo is assigned correctly
    }));
  }, []);
  
  
  



  const [education, setEducation] = useState([]);
// const [formData, setFormData] = useState({ FinNo: "" });

useEffect(() => {
  // Ensure FinNo is loaded from localStorage first
  const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
  if (storedData.FinNo) {
    setFormData((prevData) => ({ ...prevData, FinNo: storedData.FinNo }));
  }
}, []); // Runs only once when the component mounts

useEffect(() => {
  if (formData.FinNo) {
    fetchEducationData(formData.FinNo); // Fetch data immediately

    const interval = setInterval(() => {
      fetchEducationData(formData.FinNo);
    }, 5000); // Auto-refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }
}, [formData.FinNo]); // Runs when FinNo is updated

const fetchEducationData = async (finNo) => {
  try {
    const response = await axios.get(`http://localhost:3001/education/${finNo}`);
    setEducation(response.data);
  } catch (error) {
    console.error("Error fetching education data:", error);
  }
};

const UploadEducation = async (e) => {
  e.preventDefault();

  if (!formData.FinNo) {
    alert("FinNo is missing. Please check the stored data.");
    return;
  }

  if (!formDataeducation.Education || !selectedFile) {
    alert("Please enter an education level and upload a file.");
    return;
  }

  const formDataToSend = new FormData();
  formDataToSend.append("FinNo", formData.FinNo);
  formDataToSend.append("Education", formDataeducation.Education);
  formDataToSend.append("EducationFile", selectedFile);

  try {
    const response = await axios.post(
      "http://localhost:3001/upload-education",
      formDataToSend,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    alert(response.data.message);
    
    fetchEducationData(formData.FinNo); // Refresh data immediately after upload
    // Clear the select input and file input
    setFormDataeducation((prev) => ({ ...prev, Education: "" })); 
    document.getElementById("educationfileinput").value = ""; // Clear file input
  } catch (error) {
    console.error("Error uploading education data:", error);
    alert("Failed to upload education data.");
  }
};


  // Handle Delete Function
  const handleDeleteEducation = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await axios.delete(`http://localhost:3001/education/${id}`);
      setEducation(education.filter((edu) => edu.Id !== id));
      alert("Education record deleted successfully!");
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Failed to delete record.");
    }
  };
  return (
    <div id="content" className="app-content">
      <div className="container">
        <h1 className="page-header bluetext fw-bold">ADD WORKER</h1>
        <hr className="mb-4 opacity-3" />
        <div className="row">
        <div className="col-xl-6">
        <div className="card">
          <div className="card-header yellowtext fs-6 fw-bold">WORKER DETAILS</div>
          <div className="card-body pb-2">
            <form>
              {/* <div className="mb-3">
                <label className="form-label">FinNo</label>
                <input
                  type="text"
                  className="form-control"
                  name="FinNo"
                  value={formData.FinNo}
                  onChange={handleInputChange}
                  required
                />
              </div> */}

              <div className="row">
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label className="form-label">Certificate</label>
                    <select
                      className="form-select"
                      name="CertificateName"
                      value={formData.CertificateName}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Certificate</option>
                      <option value="BasicSafetyCourse">Basic Safety Course</option>
                      <option value="RopeAccessCourse">Rope Access Course</option>
                      <option value="MetalScaffoldCourse">MetalScaffoldCourse</option>
                      <option value="WorkingAtHeightCourse">WorkingAtHeightCourse</option>
                      <option value="LiftingCourse">LiftingCourse</option>
                      <option value="Gondola">Gondola</option>
                      <option value="ScissorsLift3a(MEWP)">ScissorsLift3a(MEWP)</option>
                      <option value="BoomLift3b(MEWP)">BoomLift3b(MEWP)</option>
                      <option value="AdditionalCourse">AdditionalCourse</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label className="form-label">Upload Certificate</label>
                    <input
                      type="file"
                      id="fileInput"  // Add this ID
                      className="form-control"
                      onChange={handleFileChange}
                      accept="*/*"
                    />
                  </div>
                </div>
              </div>


                  <div className="certificateinputheight">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="mb-3">
                        <label className="form-label">CertNo</label>
                        <input
                          type="text"
                          className="form-control"
                          name="CertNo"
                          value={formData.CertNo}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="mb-3">
                        <label className="form-label">IssueDate</label>
                        <input
                          type="text"
                          className="form-control"
                          name="IssueDate"
                          value={formData.IssueDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="mb-3">
                        <label className="form-label">Expiry</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Expiry"
                          value={formData.Expiry}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  </div>
     

             

              <div className="mx-auto text-center">
                <button type="submit" className="btn btn-primary w-25 fw-bold rounded" onClick={handleUpload}>
                  Upload
                </button>
              </div>

            </form>
<div className="border border-3 mt-3"></div>
            <div className="mt-4">
              <h3>Uploaded Certificates</h3>
              {certificateData.length > 0 ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>FinNo</th>
                      <th>Certificate Name</th>
                      <th>File</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificateData.map((cert) => (
                      <tr key={cert.Id}>
                        <td>{cert.FinNo}</td>
                        <td>{cert.CertificateName}</td>
                        <td>
                          {cert.CertificateFile && (
                            <a
                              href={`http://localhost:3001/uploads/${cert.CertificateFile}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View File
                            </a>
                          )}
                        </td>
                        <td> <span
                          className="btn btn-danger"
                          onClick={() => handleDelete(cert.Id)}
                        >Delete</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No certificates found for this FinNo.</p>
              )}
            </div>

            <div className="d-lg-flex align-items-center mb-n2 py-4 my-3">
              <ul className="pagination pagination-sm mb-0 mx-auto justify-content-center">
                <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li>
                <li className="page-item">
                  <span className="btn bluebg yellowtext border-3 fw-bold btn-sm d-flex button border fs-6 px-5" onClick={handleSubmit}>
                    Submit
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        </div>
   
        <div className="col-xl-6">
        <div className="card">
          <div className="card-header yellowtext fs-6 fw-bold">WORKER DETAILS</div>
          <div className="card-body pb-2">
            <form>

              <div className="row">
                <div className="col-xl-6">
                  <div className="mb-3">
                  <label className="form-label">Highest Qualification</label>
            <select className="form-select" value={formDataeducation.Education} onChange={handleInputChangeeducation} required>
              <option value="">Select Education</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="mb-3">
                  <label className="form-label">Upload Education File</label>
                  <input type="file" id="educationfileinput" className="form-control" onChange={handleFileChangeeducation} accept="*/*" required />
                  </div>
                </div>
              </div>



     

             

              <div className="mx-auto text-center">
                <button type="submit" className="btn btn-primary w-25 fw-bold rounded" onClick={UploadEducation}>
                  Upload
                </button>
              </div>

            </form>
<div className="border border-3 mt-3"></div>
<div className="mt-4">
      <h3>Uploaded Education Files</h3>
      {education.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>FinNo</th>
              <th>Certificate Name</th>
              <th>File</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr key={edu.Id}>
                <td>{edu.FinNo}</td>
                <td>{edu.Education}</td>
                <td>
                  {edu.EducationFile && (
                    <a
                      href={`http://localhost:3001/uploads/${edu.EducationFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View File
                    </a>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteEducation(edu.Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No certificates found for this FinNo.</p>
      )}
    </div>

            <div className="d-lg-flex align-items-center mb-n2 py-4 my-3">
              <ul className="pagination pagination-sm mb-0 mx-auto justify-content-center">
                <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li>
                <li className="page-item">
                  <span className="btn bluebg yellowtext border-3 fw-bold btn-sm d-flex button border fs-6 px-5" onClick={handleSubmit}>
                    Submit
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AddWorkerFormThreeAdmin;
