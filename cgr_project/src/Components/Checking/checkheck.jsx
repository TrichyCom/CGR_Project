import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import { FaTrash } from "react-icons/fa"; // Import delete icon

const AddWorkerFormThreeAdmin = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [showCertificateList, setShowCertificateList] = useState(false);
  const [FinNo, setFinNo] = useState("");
  const [certificateFiles, setCertificateFiles] = useState({});

  const certificateOptions = [
    "BasicSafetyCourse",
    "RopeAccessCourse",
    "MetalScaffoldCourse",
    "LiftingCourse",
    "BasicSafetyCourse",
    "RopeAccessCourse",
    "MetalScaffoldCourse",
    "LiftingCourse",
  ];

  // const handleSelectCertificate = () => {
  //   setShowCertificateList(!showCertificateList);
  // };

  // const handleAddCertificate = (certificateName) => {
  //   if (!selectedCertificates.includes(certificateName)) {
  //     setSelectedCertificates([...selectedCertificates, certificateName]);
  //   }
  //   setShowPopup(true); // Close the popup after selection
  // };



  const fileInputRef = useRef(null);

const handleAddCertificate = (certificateName) => {
  if (!selectedCertificates.includes(certificateName)) {
    setSelectedCertificates([...selectedCertificates, certificateName]);
  }
  
  setShowPopup(true); // Ensure popup opens

  // Wait for state update, then trigger file input click
  setTimeout(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, 100);
};




  const handleSelectCertificate = () => {
    console.log("Button clicked! Toggling certificate list.");
    setShowCertificateList(!showCertificateList);
    setShowPopup(true); // Open the popup
  };
  

  const handleFileChange = (certificateName, event) => {
    setCertificateFiles({
      ...certificateFiles,
      [certificateName]: event.target.files[0],
    });
  };

  const [formData, setFormData] = useState({
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
    SelectFields: [], // Corrected spelling
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle navigation to previous form
  const handlePre = () => {
    localStorage.setItem("workerData", JSON.stringify(formData));
    navigate("/addworkerformtwomain");
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

      // Form data for certificate upload
      const certificateFormData = new FormData();
      certificateFormData.append("FinNo", formData.FinNo);

      selectedCertificates.forEach((certificate) => {
        certificateFormData.append(certificate, "Yes");
        if (certificateFiles[certificate]) {
          certificateFormData.append(`${certificate}_file`, certificateFiles[certificate]);
        }
      });

      await axios.post("http://localhost:3001/addcertificate", certificateFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Certificates added successfully!");
      setSelectedCertificates([]);
      setCertificateFiles({});
      setFinNo("");

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };


  // Function to remove a specific certificate
  const handleRemoveCert = (indexToRemove) => {
    setSelectedCertificates((prevCerts) =>
      prevCerts.filter((_, index) => index !== indexToRemove)
    );
  };



  return (
    <>


<div id="content" className="app-content">
      <div className="conainer">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="row">
              <div className="col-xl-12">
             
                <h1 className="page-header bluetext fw-bold">
                 ADD WORKER <small>please enter worker details here...</small>
                </h1>
                <hr className="mb-4 opacity-3" />
                <div id="formControls" className="mb-5">
              {/* page 1     */}
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center yellowtext fs-6 fw-bold">
                      WORKER DETAILS
                   
                    </div>
                    <div className="card-body pb-2">
                      <form>
                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlSelect1">Category</label>
                              <select className="form-select" id="exampleFormControlSelect1" name="Category" value={formData.Category} onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlSelect1">Level</label>
                              <select className="form-select" id="exampleFormControlSelect1" name="Levels" value={formData.Levels} onChange={handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            </div>
                   
                            </div>



                            
                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">Cert No.</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Cert No" name="Cert_No" value={formData.Cert_No} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">D.O.I</label>
                              <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.I" onFocus={(e) => e.target.showPicker()} name="DOI_Two" value={formData.DOI_Two} onChange={handleChange}/>
                            </div>
                            </div>
                            </div>



                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">D.O.E</label>
                              <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.E" onFocus={(e) => e.target.showPicker()} name="DOE" value={formData.DOE} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">Balance Days</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Balance Days" onFocus={(e) => e.target.showPicker()} name="BalanceDays" value={formData.BalanceDays} onChange={handleChange}/>
                            </div>
                            </div>
                            </div>



                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">SMSE</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="SMSE" name="SMSE" value={formData.SMSE} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">WAHA/M</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="WAHA/M" onFocus={(e) => e.target.showPicker()} name="WAHA_M" value={formData.WAHA_M} onChange={handleChange}/>
                            </div>
                            </div>
                            </div>



                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">Rigger</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rigger" name="Rigger" value={formData.Rigger} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">Singnel Man</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="singnel Man" onFocus={(e) => e.target.showPicker()} name="Singnel_Man" value={formData.Singnel_Man} onChange={handleChange}/>
                            </div>
                            </div>
                            </div>
                        <div className="row">
                        <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">SSRC/SSSRC</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ssrc/sssrc" name="ssrc_sssrc" value={formData.ssrc_sssrc} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">Upload Certificate</label>
                                    {/* <div className="mb-3">
        <label className="form-label">FinNo</label>
        <input
          type="text"
          className="form-control"
          value={formData.FinNo}
          onChange={(e) => setFinNo(e.target.value)}
          placeholder="Enter FinNo"
        />
      </div> */}
{/* 
      <div className="mb-3">
      <button 
  type="button" 
  className="btn btn-primary" 
  onClick={handleSelectCertificate}
>
  Select Certificate
</button>
<span>{formData.FinNo}</span>

      </div>

      {showCertificateList && (
        <div className="certificate-list">
          {certificateOptions.map((certificate, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <span className="me-3">{certificate}</span>
              <button
              type="button" 
                className="btn btn-success me-2"
                onClick={() => handleAddCertificate(certificate)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}

      <h4 className="mt-4">Selected Certificates</h4>
      {selectedCertificates.map((cert, index) => (
        <div key={index} className="mb-3">
          <span>{cert}</span>
          <input
            type="file"
            className="form-control mt-2"
            onChange={(e) => handleFileChange(cert, e)}
          />
        </div>
      ))} */}



        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={handleSelectCertificate}>
            Upload Certificate
          </button>
          <span className="ms-3">{formData.FinNo}</span>
        </div>




      {/* Custom Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content border border-5 p-4 bg-white" onClick={(e) => e.stopPropagation()}>

<div className="row">
  <div className="col-5 leftborder">
  <h4 className="bluebg yellowtext py-2">Select a Certificate</h4>
            <div className="certificate-list">
              {certificateOptions.map((certificate, index) => (
                <div key={index} className="certificate-item  border-2 border-light border-bottom pb-1">
                  <Icon icon="mdi:certificate" className="certificate-icon text-warning" />
                  <span>{certificate}</span>
                  <button type="button" className="btn btn-success " onClick={() => handleAddCertificate(certificate)}>
                    Add
                  </button>
                </div>
              ))}
            </div>
    </div>
  <div className="col-7">
           
  <h4 className="bluebg yellowtext py-2">Selected Certificates</h4>

<table className="border-collapse mt-2 mx-auto">
  <thead className="text-center mx-auto">
    <tr className="bg-gray-100">
      <th className="border border-gray-300 px-4 py-2">S.No</th>
      <th className="border border-gray-300 px-4 py-2 w-50">Certificate Name</th>
      <th className="border border-gray-300 px-4 py-2 w-50">Upload File</th>
      <th className="border border-gray-300 px-4 py-2">Delete</th>
    </tr>
  </thead>
  <tbody>
     {selectedCertificates.length === 0 ? (
    <tr className="">
      <td colSpan="4" className="text-center py-4 my-auto">
        <Icon icon="mdi:certificate" className="text-gray-400 cericon" />
        <p className="text-gray-500 mt-2">No certificates selected</p>
      </td>
    </tr>
  ) : 
    selectedCertificates.map((cert, index) => (
      <tr key={index} className="border border-gray-300">
        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
        <td className="border border-gray-300 px-4 py-2">{cert}</td>
        <td className="border border-gray-300 px-4 py-2">
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={(e) => handleFileChange(cert, e)}
          />
          {/* <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => fileInputRef.current.click()}
          >
            Upload
          </button> */}
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <FaTrash
            className="text-danger"
            onClick={() => handleRemoveCert(index)}
          />
        </td>
      </tr>
    ))}

  </tbody>
</table>
    </div>
  </div>



            <button className="popup-close" onClick={handleClosePopup}>
              Back
            </button>
          </div>
        </div>
      )}






                            </div>
                            </div>
                            </div>





                      </form>


                      <div class="d-lg-flex align-items-center mb-n2 py-4 my-3">
                       
                    
                        <ul class="pagination pagination-sm mb-0 mx-auto justify-content-center">
                            {/* <li class="page-item "><Link to='/addworkerformadmin' class="page-link buttonborder border-2 fs-6 px-5">Previous</Link></li> */}
                            <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li>
                            
                            <li class="page-item"><span class="btn bluebg yellowtext border-3 fw-bold btn-sm d-flex button border fs-6 px-5" onClick={handleSubmit}>Submit</span></li>
                        </ul>
                    </div>



                    </div>
                  </div>




                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddWorkerFormThreeAdmin;

