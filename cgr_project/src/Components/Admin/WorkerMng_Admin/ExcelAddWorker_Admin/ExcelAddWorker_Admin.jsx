import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import { FaExclamationCircle } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa'; // Graduation cap from FontAwesome

const ExcelAddWorker_Admin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FinNo: "",
    CertificateName: "",
    Category: "",
    CertNo: "",
    Expiry: "",
    BalanceDays: "0",
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
  const handleFocus = (e) => {
    // Optional: You can execute additional logic when the input is focused
    console.log('Date Picker Focused');
  };
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

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
  
// If both Expiry and current date are set, calculate BalanceDays
if (newData.Expiry) {
  const currentDate = new Date(); // Get today's date
  const expiryDate = new Date(newData.Expiry);

  // Ensure expiry date is valid
  if (!isNaN(expiryDate)) {
    // Calculate the difference in time (in milliseconds)
    const timeDifference = expiryDate - currentDate;

    // Convert time difference to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Set the BalanceDays value (ensure it's a positive value)
    newData.BalanceDays = daysDifference >= 0 ? daysDifference : 0; // Prevent negative days

  } else {
    newData.BalanceDays = '0'; // Reset BalanceDays if Expiry is invalid
  }
}


          // If either date is missing, keep BalanceDays as "0"
    // if (!newData.IssueDate || !newData.Expiry) {
    //   newData.BalanceDays = '0';
    // }
  
      return newData;
    });
  };
  





  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setCertificateFile(e.target.files[0]);
    }
  };




  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/certificates/${id}`);
      setCertificateData(certificateData.filter((cert) => cert.Id !== id));
    } catch (error) {
      console.error("Error deleting certificate:", error);
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
    if (!formData.FinNo) {
      alert("FinNo is missing. Please check the stored data.");
      return;
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
        BalanceDays: "0",
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

  const [certificates, setCertificates] = useState([]);

useEffect(() => {
  fetchCertificates();
}, []);

const fetchCertificates = async () => {
  try {
    const response = await axios.get("http://localhost:3001/getcertificates");
    setCertificates(response.data); // Store fetched data in state
  } catch (error) {
    console.error("Error fetching certificates:", error);
  }
};











// worker records


 const [selectedInputNames, setSelectedInputNames] = useState([]); // Store selected input names

  // Load selected input names from localStorage when the component is mounted
  // useEffect(() => {
  //   const storedInputNames = JSON.parse(localStorage.getItem("selectedInputNames"));
  //   if (storedInputNames) {
  //     setSelectedInputNames(storedInputNames); // Set the state with the stored names
  //   }
  // }, []);

  const [files, setFiles] = useState({});
//  const [selectedFile, setSelectedFile] = useState(null);
 const fileInputRef = useRef(null); // Reference for file input

const handlerecordFileChange = (e) => {
  const { name } = e.target;
  const file = e.target.files[0]; // Get the selected file
  setFiles((prevFiles) => ({
    ...prevFiles,
    [name]: file,
  }));
  setSelectedFile(e.target.files[0]);
  setSelectedFile(file);

  if (file) {
    // Store input name if a file is selected
    const inputName = e.target.name;
    setSelectedInputNames((prevNames) => {
      const updatedNames = [...prevNames, inputName];
      localStorage.setItem("selectedInputNames", JSON.stringify(updatedNames)); 
      return updatedNames;
    });
  }
};



  // Handle form submission
  const handlerecordSubmit = async (e) => {
    e.preventDefault();

    if (!formData.FinNo.trim()) {
      alert("Please enter FinNo.");
      return;
    }
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("FinNo", formData.FinNo); // Include FinNo

    Object.keys(files).forEach((key) => {
        formDataToSend.append(key, files[key]); // Append files
    });

    try {
        const response = await axios.post(
            "http://localhost:3001/workerreportfiles",
            formDataToSend,
            { headers: { "Content-Type": "multipart/form-data" } }
        );

        console.log("Data saved:", response.data);
        alert("Worker Report Files Uploaded Successfully");

        // Store in localStorage
        localStorage.setItem("workerData", JSON.stringify(response.data));
        
              // Reset input fields
    setSelectedFile(null);
    
 
  
  if (fileInputRef.current) {
    fileInputRef.current.value = ""; // Clears file input field
  }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};



const [excelData, setExcelData] = useState([]);

// Handle File Upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Get first sheet
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON

      setExcelData(jsonData); // Store Excel data in state
    };
    reader.readAsArrayBuffer(file);
  }
};

// Handle Submit Data to Backend
const handleworkerSubmit = async () => {
  if (excelData.length === 0) {
    alert("No data to upload.");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3001/upload-excel", { data: excelData });
    alert(response.data.message);
    setExcelData([]); // Clear state after upload
  } catch (error) {
    console.error("Error uploading Excel data:", error);
    alert("Error uploading data. Check console for details.");
  }
};


  return (
    <div id="contet" className="app-content">
      <div className="containe">
        <h1 className="page-header bluetext fw-bold">ADD WORKER</h1>
        <hr className="mb-4 opacity-3" />
        {/* worker data */}
        <h1>Add Worker Data</h1>
        <div className="input-group my-4">
      <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} className="form-control w-50" />
      <button className="btn btn-warning" onClick={handleworkerSubmit} disabled={excelData.length === 0}>
        Upload Excel
      </button> 
      </div>
{/* reports */}
        <div className="row">
        <div className="col-xl-4">
                        
                        <div className="row">
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">IPA File</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="IPA" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Passport File</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="Passport" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Bond File</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="Bond" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Onboard File</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="Onboard" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Medical Report</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="Medical" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Issuance File</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="Issuance" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">MOM Thumb Print Form</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="MOMThumbPrint" onChange={handlerecordFileChange} ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">IC Copy</label>
                        <div className="input-group">
                        <input type="file" className="form-control" accept="*/*" name="IC" onChange={handlerecordFileChange}  ref={fileInputRef}/>
                        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-6">
                        <div className="mb-3">
                        <label className="form-label">Contract File</label>
                        <div className="input-group">
        <input
          type="file"
          className="form-control"
          accept="*/*"
          name="Contract"
          onChange={handlerecordFileChange}
          ref={fileInputRef}
        />
        {/* <button className="btn btn-primary" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
          Upload
        </button> */}
      </div>
                        </div>
                        </div>
  
                        </div>

                        <div className="row mt-4">
                        
                        <div className=" mx-auto text-center p-3">
                                <button className="btn btn-primary w-50 rounded fw-bold" type="button" onClick={handlerecordSubmit} disabled={!formData.FinNo.trim() || !selectedFile}>
        Upload
      </button>
                        </div>
                      </div>
  
   {/* Display all selected input names */}
   {selectedInputNames.length > 0 && (
          <p className="mt-2 text-success">
            <strong className="">Selected Inputs:</strong>
            <ol style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
    {selectedInputNames.map((name, index) => (
      <li
        key={index} 
        className="text-dark"
        style={{
          marginRight: '10px',  // Space between items
          marginTop:'5px',
          marginBottom: '5px',  // Space below items
          backgroundColor: '#f0f0f0', // Optional background color
          padding: '5px 10px', // Optional padding for better spacing
          borderRadius: '5px', // Optional rounded corners
        }}
      >
        {name}
      </li>
    ))}
  </ol>
  
          </p>
        )}
  
  
                        </div>
        <div className="col-xl-4">
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
              <div className="col-xl-4">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">FIN No</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="FIN No" name="FinNo" value={formData.FinNo} onChange={handleInputChange} />
                      </div>
                      </div>
                <div className="col-xl-4">
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
  
  {certificates.map((cert) => (
    <option key={cert.id} value={cert.CertificateList}>
      {cert.CertificateList}
    </option>
  ))}
                    </select>

                  </div>
                </div>
                <div className="col-xl-4">
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


                  <div className="">
                  <div className="row">
                    <div className="col-xl-3">
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
                    <div className="col-xl-3">
                      <div className="mb-3">
                        <label className="form-label">IssueDate</label>
                        <input
                          type="date"
                          className="form-control"
                          name="IssueDate"
                          value={formData.IssueDate}
                          onChange={handleInputChange}
                          onFocus={(e) => e.target.showPicker()}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="mb-3">
                        <label className="form-label">Expiry</label>
                        <input
                          type="date"
                          className="form-control"
                          name="Expiry"
                          value={formData.Expiry}
                          onChange={handleInputChange}
                          onFocus={(e) => e.target.showPicker()}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="mb-3">
                        <label className="form-label">Balance Days</label>
                        <input
                          type="text"
                          className="form-control text-warning"
                          name="BalanceDays"
                          value={formData.BalanceDays || '0'}
                          onChange={handleInputChange}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  </div>
     

             

              <div className="mx-auto text-center mt-3">
                <button type="submit" className="btn btn-primary w-25 fw-bold rounded" onClick={handleUpload}>
                  Upload
                </button>
              </div>

            </form>
<div className="border border-3 mt-3"></div>
            <div className="mt-4">
              <h3>Uploaded Certificates</h3>
              {certificateData.length > 0 ? (
                <div id="certificateTableWrapper">
                <table className="table table-bordered " >
                  <thead className="">
                    <tr className="bg-dark">
                      <th>FinNo</th>
                      <th>Certificate Name</th>
                      <th>File</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody >
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
                </div>
              ) : (
              
                <p className="py-1 mx-auto text-center" style={{height:'195px'}}>
          <FaExclamationCircle  className="w-50 h-50 p-3"/>
          <p> No certificates found for this FinNo.</p>
         
        </p>
              )}
            </div>

            {/* <div className="d-lg-flex align-items-center mb-n2 py-4 my-3">
              <ul className="pagination pagination-sm mb-0 mx-auto justify-content-center">
                <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li>
                <li className="page-item">
                  <span className="btn bluebg yellowtext border-3 fw-bold btn-sm d-flex button border fs-6 px-5" onClick={handleSubmit}>
                    Submit
                  </span>
                </li>
              </ul>
            </div> */}

          </div>
        </div>
        </div>
   
        <div className="col-xl-4">
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
                  <div className="input-group">
                  <input type="file" id="educationfileinput" className="form-control" onChange={handleFileChangeeducation} accept="*/*" required />
                  <button type="submit" className="btn btn-primary" onClick={UploadEducation}>
                  Upload
                </button>
                  </div>
                  </div>
                </div>
              </div>


            </form>
<div className="border border-3 mt-3"></div>
<div className="mt-4">
      <h3>Uploaded Education Files</h3>
      {education.length > 0 ? (
        <div id="educationtable">
        <table className="table table-bordered">
          <thead>
            <tr className="bg-dark">
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
        </div>
      ) : (
        <div className="text-center" style={{height:'310px'}}>
          <FaGraduationCap className="h-25 w-25 mt-5"/>
        <p className="py-3">No certificates found for this FinNo.</p>
        </div>
      )}
    </div>



          </div>
        </div>
      </div>
      </div>

      <div className="d-lg-flex align-items-center mb-n2 py-4 my-3">
              <ul className="pagination pagination-sm mb-0 mx-auto justify-content-center">
                {/* <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li> */}
                <li className="page-item">
                  {/* <span className="btn bluebg yellowtext border-3 fw-bold btn-sm d-flex button border fs-6 px-5" onClick={handleSubmit}>
                    Submit
                  </span> */}
                </li>
              </ul>
            </div>


      </div>
    </div>
  );
};

export default ExcelAddWorker_Admin;
