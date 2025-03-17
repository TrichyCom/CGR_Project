import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddWorkerFormTwoAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FinNo: "",
    DOA: "",  
    DOB: "",
    DOI: "",
    DO_ThumbPrint: "",
    DO_Onboard: "",
    DO_Renewal: "",
    WP_No: "",
    WP_Expiry: "",
    PP_No: "",
    PP_Expiry: "",
  });



  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // Excluding 'I' and 'O'

  // Function to generate Fin No
  const generateFinNo = () => {
    const firstLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    const numbers = Math.floor(1000000 + Math.random() * 9000000); // 7-digit number
    const lastLetter = letters.charAt(Math.floor(Math.random() * letters.length));
    return `${firstLetter}${numbers}${lastLetter}`;
  };




  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    if (!formData.FinNo) {
      formData.FinNo = generateFinNo();
    }
    setFormData((prevData) => ({
      ...prevData,
      ...storedData,
      FinNo: storedData.FinNo || generateFinNo(), // Set FinNo only if not already stored
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handleNext = () => {
    // Auto-generate FinNo if it's empty
    // if (!formData.FinNo) {
    //   formData.FinNo = generateFinNo();
    // }
    localStorage.setItem("workerData", JSON.stringify(formData));
    navigate("/addworkerformthreemain");
  };
  const handlePre = () => {
    // Auto-generate FinNo if it's empty
    // if (!formData.FinNo) {
    //   formData.FinNo = generateFinNo();
    // }
    localStorage.setItem("workerData", JSON.stringify(formData));
    navigate("/addworkerformadmin");
  };

  return (
    <>
    {/* <div>
      <h1>Add Worker - Page 2</h1>
      <input
        type="text"
        name="finNo"
        value={formData.finNo}
        onChange={handleChange}
        placeholder="FIN No"
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        placeholder="D.O.B"
      />
     
      <button onClick={handleNext}>Next</button>
    </div> */}


















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
                        <label className="form-label" htmlFor="exampleFormControlInput1">FIN No</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="FIN No" name="FinNo" value={formData.FinNo} onChange={handleChange} readOnly />
                      </div>
                      </div>
                      <div className="col-xl-6">
                      <div className="mb-3">
                    
                      </div>
                      </div>
                      {/* <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlFile1">File input</label>
                        <input type="file" className="form-control" id="exampleFormControlFile1" />
                      </div> */}
                   
                    
                  </div>


                  <div className="row">
                    <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.A</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.A" onFocus={(e) => e.target.showPicker()}  name="DOA" value={formData.DOA} onChange={handleChange}/>
                      </div>
                      </div>
                    <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.B</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.B" onFocus={(e) => e.target.showPicker()} name="DOB" value={formData.DOB} onChange={handleChange} />
                      </div>
                      </div>
             
                      </div>



                      
                  <div className="row">
                  <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.I</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.I" onFocus={(e) => e.target.showPicker()} name="DOI" value={formData.DOI} onChange={handleChange}/>
                      </div>
                      </div>
                      <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.Thumb Print</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.Thumb Print" onFocus={(e) => e.target.showPicker()} name="DO_ThumbPrint" value={formData.DO_ThumbPrint} onChange={handleChange}/>
                      </div>
                      </div>
                      </div>



                  <div className="row">
                  <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.onboard</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.onboard" onFocus={(e) => e.target.showPicker()} name="DO_Onboard" value={formData.DO_Onboard} onChange={handleChange}/>
                      </div>
                      </div>
                      <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">D.O.Renewal</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.Renewal" onFocus={(e) => e.target.showPicker()} name="DO_Renewal" value={formData.DO_Renewal} onChange={handleChange}/>
                      </div>
                      </div>
                      </div>



                  <div className="row">
                  <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">WP No</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="WP No" name="WP_No" value={formData.WP_No} onChange={handleChange} />
                      </div>
                      </div>
                      <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">WP EXPIRY</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="WP EXPIRY" onFocus={(e) => e.target.showPicker()} name="WP_Expiry" value={formData.WP_Expiry} onChange={handleChange}/>
                      </div>
                      </div>
                      </div>



                  <div className="row">
                  <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">PP No</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="PP No" name="PP_No" value={formData.PP_No} onChange={handleChange}/>
                      </div>
                      </div>
                      <div className="col-xl-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="exampleFormControlInput1">PP EXPIRY</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="PP EXPIRY" onFocus={(e) => e.target.showPicker()} name="PP_Expiry" value={formData.PP_Expiry} onChange={handleChange}/>
                      </div>
                      </div>
                      </div>





                </form>


                <div class="d-lg-flex align-items-center mb-n2 py-4 my-3">
                 
              
                  <ul class="pagination pagination-sm mb-0 mx-auto justify-content-center">
                      {/* <li class="page-item "><Link to='/addworkerformadmin' class="page-link buttonborder border-2 fs-6 px-5">Previous</Link></li> */}
                      <li class="page-item "><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4" onClick={handlePre}>Previous</span></li>
                      
                      <li class="page-item"><span class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-5" onClick={handleNext}>Next</span></li>
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

export default AddWorkerFormTwoAdmin;
