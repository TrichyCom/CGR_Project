import React from 'react';


const ViewWorkerForm = () => {
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
                                    <div id="formControls" className="mb-2">
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
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Employee ID</label>
                                                                <input type="text" className="form-control" name="EmpId" id="exampleFormControlInput1" placeholder="Employee ID" onChange={handleChange} value={formData.EmpId} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Employee Position</label>


                                                                <select
                                                                    className="form-select"
                                                                    name="EmpPosition"
                                                                    value={formData.EmpPosition}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value="">Select Position</option>


                                                                </select>

                                                            </div>
                                                        </div>


                                                    </div>


                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Company</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Company" name="CompanyName" onChange={handleChange} value={formData.CompanyName} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Department</label>

                                                            </div>
                                                        </div>
                                                    </div>




                                                    <div className="row">
                                                        <div className="col-xl-6">


                                                            <div className="row">
                                                                <div className="col-xl-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label" htmlFor="exampleFormControlInput1"> First Name</label>
                                                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" name="FirstName" onChange={handleChange} value={formData.First} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label" htmlFor="exampleFormControlInput1"> Last Name</label>
                                                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" name="LastName" onChange={handleChange} value={formData.LastName} />
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Age</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Age" name="Age" onChange={handleChange} value={formData.Age} />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Experience in Year</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Experience in Year" name="ExpYear" onChange={handleChange} value={formData.ExpYear} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlSelect1">Gender</label>
                                                                <select className="form-select" id="exampleFormControlSelect1" name="Gender" onChange={handleChange} value={formData.Gender}>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Contact Number</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Contact Number" name="ContNum" onChange={handleChange} value={formData.ContNum} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Emergency Contact Number</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Emergency Contact Number" name="EmergencyContNum" onChange={handleChange} value={formData.EmergencyContNum} />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">Bank Account Number</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Bank Account Number" name="BankAccNum" onChange={handleChange} value={formData.BankAccNum} />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlInput1">PAN/TAX ID</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="PAN/TAX ID" name="PanTaxId" onChange={handleChange} value={formData.PanTaxId} />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row">
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlSelect1">Select Feilds</label>


                                                                {/* <div className="checkbox-container"> */}




                                                                {/* </div> */}




                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="exampleFormControlSelect1">Select Role</label>
                                                                <select className="form-select" id="exampleFormControlSelect1" name="SelectRole" onChange={handleChange} value={formData.SelectRole}>

                                                                </select>
                                                            </div>
                                                        </div>


                                                    </div>



                                                </form>


                                                <div class="d-lg-flex align-items-center mb-n2 py-4 my-3">


                                                    <ul class="pagination pagination-sm mb-0 mx-auto justify-content-center">
                                                        {/* <li class="page-item disabled"><Link class="page-link">Previous</Link></li> */}

                                                        <li class="page-item"><span class=" page-link btn yellowtext border-2 btn-sm d-flex buttonborder fs-6 px-5" onClick={handleNext} >Next</span></li>
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

export default ViewWorkerForm;
