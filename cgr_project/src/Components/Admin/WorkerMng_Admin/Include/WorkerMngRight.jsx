import React, { useState, useEffect } from "react";
import '../../../../../public/assets/css/owncss/SignupLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
function WorkerMngRight() {

  const [workers, setWorkers] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/workers")
      .then((response) => {
        setWorkers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker data:", error);
      });
  }, []);

  const handleView = (finNo) => {
    axios
      .get(`http://localhost:3001/workers/${finNo}`)
      .then((response) => {
        navigate("/viewworkerdata", { state: { worker: response.data } });
      })
      .catch((error) => {
        console.error("Error fetching worker details:", error);
      });
  };

  // filter empid
  const [empIdFilter, setEmpIdFilter] = useState("");
  const [formData, setFormData] = useState({ EmpPosition: "" });
  const [empNameFilter, setEmpNameFilter] = useState(""); 
  const [genderFilter, setGenderFilter] = useState("");


  const filteredWorkers = workers.filter((worker) => {

      const matchesPosition =
  formData.EmpPosition === "" || 
  worker.EmpPosition.toLowerCase() === formData.EmpPosition.toLowerCase();
  
    const matchesEmpId =
      empIdFilter === "" || worker.EmpId.toLowerCase().includes(empIdFilter.toLowerCase());
  
    const fullName = `${worker.FirstName} ${worker.LastName}`.toLowerCase();
    const matchesName =
      empNameFilter === "" || fullName.includes(empNameFilter.toLowerCase());

      const matchesGender =
      genderFilter === "" || worker.Gender === genderFilter;
  
    return matchesPosition && matchesEmpId && matchesName && matchesGender;
  });
  


  useEffect(() => {
    console.log("Selected Position:", formData.EmpPosition);
  }, [formData.EmpPosition]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <>
      <div>
        <div id="content" class="app-content">
          <div class="">
            <div class="d-lg-flex mb-lg-3 mb-2">
              <h3 class="page-headr mb-6 flex-1" id='data' ><span className="bg-dark text-white px-4 py-1 border-white border rounded-start rounded-5">WORKERS MANAGEMENT</span></h3>
              <div class="row gx-2 pb-lg-3 pb-2"></div>

              <span class="d-none d-lg-flex align-items-center mx-2">
                <Link to="/formdynamic" className="btn yellowtext btn-sm d-flex pe-3 fw-bold buttonborder" >
                  <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                  ADD FORM OPTIONS
                </Link>
              </span>
              <span class="d-none d-lg-flex align-items-center">

                <Link to="/addworkerformadmin" className="btn yellowtext bluebg btn-sm d-flex pe-3 fw-bold buttonborder" >
                  <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                  ADD WORKER +
                </Link>

              </span>
            </div>

            <div className="border border-2 rounded mb-4"></div>


          </div>

          {/* filter */}
          <div className="pb-1">
          <div className="row">
            <div className="col-xl-2">
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlInput1">Filter by Emp ID</label>
                <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Emp ID" value={empIdFilter} onChange={(e) => setEmpIdFilter(e.target.value)} />
              </div>
            </div>

            <div className="col-xl-2">
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlInput1">Filter by Emp Name</label>
                <input
  type="text"
  className="form-control input"
  placeholder="Emp Name"
  value={empNameFilter}
  onChange={(e) => setEmpNameFilter(e.target.value)}
/>
          </div>
          </div>
          <div className="col-xl-2">
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleFormControlInput1">Filter by Emp Position</label>
                <select
                  className="form-select input"
                  name="EmpPosition"
                  value={formData.EmpPosition}
                  onChange={handleChange}
                >
                  <option value="">Select Position</option>
                  {["Supervisor", "ProjectManager", "OfficePersonel", "Worker"].map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>


              </div>
            </div>
            <div className="col-xl-2">
              <div className="mb-3">
              <label className="form-label mb-0 pb-1" htmlFor="exampleFormControlInput1"> Gender</label>
 
<div className="radio-input d-flex gap-2">
  {["All", "Male", "Female"].map((genderOption) => {
    const value = genderOption === "All" ? "" : genderOption;
    const isChecked = genderFilter === value;

    return (
      <label key={genderOption} className={`label ${isChecked ? "active" : ""}`}>
        <input
          type="radio"
          name="gender"
          value={value}
          checked={isChecked}
          onChange={() => setGenderFilter(value)}
        />
        <span className="text">{genderOption}</span>
      </label>
    );
  })}
</div>

              {/* <div className="d-flex gap-2">
  {["All", "Male", "Female"].map((genderOption) => {
    const value = genderOption === "All" ? "" : genderOption;
    const isActive = genderFilter === value;

    return (
      <button
        key={genderOption}
        type="button"
        className={`btn btn rounded ${isActive ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setGenderFilter(value)}
      >
        {genderOption}
      </button>
    );
  })}
</div> */}

          </div>
          </div>
          <div className="col-xl-2 my-auto text-end border-3 border-end rounded">
          <div className="mb-3">
          <label className="form-label d-none" htmlFor="exampleFormControlInput1">Clear All Data</label><br></br>
          <button
  className="btn btn-danger rounded"
  onClick={() => {
    setFormData((prev) => ({ ...prev, EmpPosition: "" }));
    setEmpIdFilter("");
    setEmpNameFilter(""); // assuming you have this state
    setGenderFilter("");
  }}
>
  Clear All Filters
</button>

            </div>
            </div>
            <div className="col-xl-2">

            <div className="mb-3 text-center">
                {/* <label className="form-label " htmlFor="exampleFormControlInput1"><h4 className="my-auto">Total Workers</h4></label> */}
                {/* <h4 className="text-warning"><span className="rounded p-2 border-light border">{filteredWorkers.length}</span></h4> */}
                <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Total Workers</div>
    <div class="notibody"><h4 className="text-dark fw-bold"><span className="">{filteredWorkers.length}</span></h4></div>
  </div>
 
          </div>


            </div>

          </div>
          </div>

          <div class="table-responsive" id="table" style={{ maxHeight: "calc(104vh - 250px)", overflowY: "auto" }}>
            <table class="table table-thead-sticky table-tfoot-sticky table-tbody-bordered table-px-10px table-py-4px table-sm table-striped text-nowrap mb-0 fs-11px">
              <thead className="text-uppercase bg-light" style={{ top: 0, zIndex: 1 }}>
                <tr>
                  <th className="text-dark fw-bold">No.</th>
                  <th className="text-dark fw-bold">Emp ID</th>
                  <th className="text-dark fw-bold">Emp Position</th>
                  <th className="text-dark fw-bold">Name</th>
                  {/* <th className="text-dark fw-bold">Cont Number</th> */}
                  <th className="text-dark fw-bold">FIN No</th>
                  {/* <th className="text-dark fw-bold">Fields</th> */}
                  <th className="text-dark fw-bold">Gender</th>
                  <th className="text-dark fw-bold">View</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkers.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center py-3">
                      <Icon icon="mdi:account-off-outline" className="fs-48px text-muted" /><br></br>
                      No Employee Record
                    </td>
                  </tr>
                ) : (
                  filteredWorkers.map((worker, index) => (
                    <tr key={worker.Id}>
                      <td>{index + 1}</td>
                      <td>{worker.EmpId}</td>
                      <td>{worker.EmpPosition}</td>
                      <td>
                        {worker.FirstName} {worker.LastName}
                      </td>
                      {/* <td>{worker.ContNum}</td> */}
                      <td>{worker.FinNo}</td>
                      {/* <td>{worker.SelectFeilds}</td> */}
                      <td>{worker.Gender}</td>
                      {/* <td> <span
                        className="btn btn-sm border p-0 px-3"
                        onClick={() => handleView(worker.FinNo)}
                        style={{ cursor: "pointer" }}
                      >
                        View
                      </span></td> */}
                      <td> 
                        <span
                        className="btn btn-sm p-0 px-3 button fw-bold"
                        onClick={() => handleView(worker.FinNo)}
                        style={{ cursor: "pointer" }}
                      >
                        View
                      </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default WorkerMngRight