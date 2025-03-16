import React, { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";

const AddWorkerFormThreeAdmin = () => {
  const navigate = useNavigate();
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
    Singnel_Man: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    setFormData((prevData) => ({ ...prevData, ...storedData }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async () => {
  //   localStorage.setItem("workerData", JSON.stringify(formData));
  //   const finalData = JSON.parse(localStorage.getItem("workerData"));

  //   try {
  //     await axios.post("http://localhost:3001/addworker", finalData);
  //     alert("Worker added successfully!");
  //     localStorage.removeItem("workerData");
  //     // navigate("/successpage");
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert SelectFields array to a string before sending to the backend
    const formattedData = {
      ...formData,
      SelectFeilds: JSON.stringify(formData.SelectFeilds),
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <>
    {/* <div>
      <h1>Add Worker - Page 3</h1>
      <input
        type="text"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="Select Course"
      />
     
      <button onClick={handleSubmit}>Submit</button>
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
                              <label className="form-label" htmlFor="exampleFormControlSelect1">Select Course</label>
                              <select className="form-select" id="exampleFormControlSelect1" name="SelectCourse" value={formData.SelectCourse} onChange={handleChange}>
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
                              <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="D.O.I" onFocus={(e) => e.target.showPicker()} name="DOI" value={formData.DOI} onChange={handleChange}/>
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
                            {/* <div className="mb-3">
                              <label className="form-label" htmlFor="exampleFormControlInput1">singnel Man</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="singnel Man" onFocus={(e) => e.target.showPicker()} />
                            </div> */}
                            </div>
                            </div>





                      </form>


                      <div class="d-lg-flex align-items-center mb-n2 py-4 my-3">
                       
                    
                        <ul class="pagination pagination-sm mb-0 mx-auto justify-content-center">
                            {/* <li class="page-item "><Link to='/addworkerformadmin' class="page-link buttonborder border-2 fs-6 px-5">Previous</Link></li> */}
                            <li class="page-item "><Link to='/addworkerformtwomain' class="page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-4">Previous</Link></li>
                            
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
