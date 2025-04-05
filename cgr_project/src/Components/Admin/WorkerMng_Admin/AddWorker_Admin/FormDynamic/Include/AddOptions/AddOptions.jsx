import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddOptions = () => {
  const [fields, setFields] = useState([]); // Stores table data
  const [newField, setNewField] = useState(""); // Input value

  // Fetch fields from database
  useEffect(() => {
    fetchFields();
  }, []);

  const fetchFields = async () => {
    try {
      const response = await axios.get("http://localhost:3001/feilds"); // Replace with your API URL
      setFields(response.data);
    } catch (error) {
      console.error("Error fetching fields:", error);
    }
  };

  // Add new field
  const handleAddField = async () => {
    if (newField.trim() === "") return; // Prevent empty values

    try {
      const response = await axios.post("http://localhost:3001/feilds", {
        Feilds: newField,
      });

      setFields([...fields, response.data]); // Add new field to state
      setNewField(""); // Clear input
    } catch (error) {
      console.error("Error adding field:", error);
    }
  };

  // Delete field
  const handleDeleteField = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/feilds/${id}`);
      setFields(fields.filter((field) => field.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting field:", error);
    }
  };





// roles

  // const [roles, setRoles] = useState([]); // Store roles from DB
  // const [newRole, setNewRole] = useState(""); // Input value

  // useEffect(() => {
  //   fetchRoles(); // Fetch roles on component load
  // }, []);

  // Fetch roles from the database
  // const fetchRoles = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/roles"); // Replace with your API URL
  //     setRoles(response.data);
  //   } catch (error) {
  //     console.error("Error fetching roles:", error);
  //   }
  // };

  // Add a new role
  // const handleAddRole = async () => {
  //   if (!newRole.trim()) return alert("Please enter a role!");
  //   try {
  //     await axios.post("http://localhost:3001/roles", { Roles: newRole });
  //     setNewRole(""); // Clear input field
  //     fetchRoles(); // Refresh roles list
  //   } catch (error) {
  //     console.error("Error adding role:", error);
  //   }
  // };

  // Delete a role
  // const handleDeleteRole = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/roles/${id}`);
  //     fetchRoles(); // Refresh roles list
  //   } catch (error) {
  //     console.error("Error deleting role:", error);
  //   }
  // };





//   add department

const [departments, setDepartments] = useState([]); // Stores department data
const [newDepartment, setNewDepartment] = useState(""); // Stores new department input

useEffect(() => {
  fetchDepartments(); // Fetch departments on component load
}, []);

// Fetch department data from backend
const fetchDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:3001/departments");
    setDepartments(response.data);
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
};

// Add new department
const handleAddDepartment = async () => {
  if (!newDepartment.trim()) return; // Prevent empty input submission

  try {
    await axios.post("http://localhost:3001/departments", {
      Department: newDepartment,
    });
    setNewDepartment(""); // Clear input field
    fetchDepartments(); // Refresh table
  } catch (error) {
    console.error("Error adding department:", error);
  }
};

// Delete department
const handleDeleteDepartment = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/departments/${id}`);
    fetchDepartments(); // Refresh table
  } catch (error) {
    console.error("Error deleting department:", error);
  }
};




// certificate
const [certificateName, setCertificateName] = useState("");
const [certificateList, setCertificateList] = useState([]);

// Fetch the certificate list from the database
useEffect(() => {
  fetchCertificates();
}, []);

const fetchCertificates = async () => {
  try {
    const response = await axios.get("http://localhost:3001/getcertificates");
    setCertificateList(response.data);
  } catch (error) {
    console.error("Error fetching certificates:", error);
  }
};

// Add a new certificate
// const handleAddCertificate = async () => {
//   if (!certificateName.trim()) {
//     alert("Certificate name cannot be empty");
//     return;
//   }

//   try {
//     await axios.post("http://localhost:3001/postcertificates", {
//       CertificateList: certificateName, // Match backend column name
//     });
//     setCertificateName(""); // Clear input field after adding
//     fetchCertificates(); // Refresh list
//   } catch (error) {
//     console.error("Error adding certificate:", error);
//   }
// };


const handleAddCertificate = async () => {
  const trimmedName = certificateName.trim(); // Trim spaces

  if (!trimmedName) {
    alert("Certificate name cannot be empty or just spaces!");
    return;
  }

  try {
    await axios.post("http://localhost:3001/postcertificates", {
      CertificateList: trimmedName, // Send trimmed value
    });
    setCertificateName(""); // Clear input field after adding
    fetchCertificates(); // Refresh list
  } catch (error) {
    console.error("Error adding certificate:", error);
  }
};


// Delete a certificate
const handleDeleteCertificate = async (id) => {
  if (!id) {
    console.error("Error: Invalid certificate ID");
    return;
  }

  try {
    await axios.delete(`http://localhost:3001/dropcertificates/${id}`);
    fetchCertificates(); // Refresh the list
  } catch (error) {
    console.error("Error deleting certificate:", error);
  }
};







const [companyName, setCompanyName] = useState("");
const [companies, setCompanies] = useState([]);

// Fetch existing companies
useEffect(() => {
  axios.get("http://localhost:3001/getCompanies")
    .then((res) => setCompanies(res.data))
    .catch((err) => console.error(err));
}, []);

// Handle input change
const handleInputChange = (e) => {
  setCompanyName(e.target.value);
};

// Handle add company
const handleAddCompany = () => {
  if (!companyName.trim()) return;

  axios.post("http://localhost:3001/addCompany", { companyName })
    .then((res) => {
      setCompanies([...companies, res.data]); // Add new row to UI
      setCompanyName(""); // Clear input
    })
    .catch((err) => console.error(err));
};

const handleDelete = (id) => {
  axios
    .delete(`http://localhost:3001/deleteCompany/${id}`)
    .then(() => {
      setCompanies(companies.filter((company) => company.id !== id));
    })
    .catch((err) => console.error(err));
};

  return (
    <div>
      <div id="content" className="app-content">
        
      {/* <h1 className="page-header mb-6" style={{  position: "fixed", top: 0, zIndex: 1000 }}>
  ADD OPTIONS
</h1> */}
 <div className="container">
      <div class="d-lg-flex mb-lg-3 mb-2">
                        <h1 class="page-header mb-6 flex-1" id='data' >ADD OPTIONS</h1>
                        <div class="row gx-2 pb-lg-3 pb-2"></div>

                        <span class="d-none d-lg-flex align-items-center mx-2">
                        <Link to="/workermngadmin" className="btn yellowtext btn-sm d-flex pe-3 fw-bold buttonborder" >
                                <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                               Back
                            </Link>
                            </span>
                    </div>



        <div className="row gx-2 pb-lg-3 pb-2 pt-4">
          <div className="col-lg-3">
            <h1 className="page-header mb-6 yellowtext">Fields</h1>
          </div>
          <div className="col-lg-4">
            <div className="position-relative">
              <input
                type="text"
                className="form-control ps-50px"
                placeholder="Add Fields"
                value={newField}
                onChange={(e) => setNewField(e.target.value)}
              />
              <button
                className="btn btn-primary position-absolute start-2 top-0 shadow-none"
                onClick={handleAddField}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped text-nowrap mb-0 fs-11px">
            <thead className="text-uppercase bg-light">
              <tr className="">
                <th className="fw-bold text-dark">No.</th>
                <th className="fw-bold text-dark w-50">Fields</th>
                <th className="fw-bold text-dark">Action</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id} className="">
                  <td>{index + 1}</td>
                  <td className="">{field.Feilds}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm px-3 py-1"
                      onClick={() => handleDeleteField(field.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

{/* Roles */}
{/* <div className="border border-3 my-4"></div> */}


{/* <div className="row gx-2 pb-lg-3 pb-2">
        <div className="col-lg-3">
          <h1 className="page-header mb-6 yellowtext">Roles</h1>
        </div>
        <div className="col-lg-4">
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-50px"
              placeholder="Add Role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
            />
            <button
              className="btn btn-primary position-absolute start-2 top-0 shadow-none"
              onClick={handleAddRole}
            >
              Add
            </button>
          </div>
        </div>
      </div> */}

      {/* Table */}
      {/* <div className="table-responsive">
        <table className="table table-striped text-nowrap mb-0 fs-11px">
          <thead className="text-uppercase bg-light">
            <tr>
            <th className="fw-bold text-dark">No.</th>
            <th className="fw-bold text-dark w-50 ">Roles  </th>
            <th className="fw-bold text-dark">Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={role.id}>
                <td>{index + 1}</td>
                <td>{role.Roles}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm px-3 py-1"
                    onClick={() => handleDeleteRole(role.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

{/* Department */}
<div className="border border-3 my-4"></div>


<div className="row gx-2 pb-lg-3 pb-2">
        <div className="col-lg-3">
          <h1 className="page-header mb-6 yellowtext">Department</h1>
        </div>
        <div className="col-lg-4">
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-50px"
              placeholder="Add Department"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
            />
            <button
              className="btn btn-primary position-absolute start-2 top-0 shadow-none"
              onClick={handleAddDepartment}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped text-nowrap mb-0 fs-11px">
          <thead className="text-uppercase bg-light">
            <tr>
              <th className="fw-bold text-dark">No.</th>
              <th className="fw-bold text-dark">Department</th>
              <th className="fw-bold text-dark">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={department.id}>
                <td>{index + 1}</td>
                <td>{department.Department}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm px-3 py-1"
                    onClick={() => handleDeleteDepartment(department.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Certificates */}
<div className="border border-3 my-4"></div>


<div className="row gx-2 pb-lg-3 pb-2">
        <div className="col-lg-3">
          <h1 className="page-header mb-6 yellowtext">Certificates</h1>
        </div>
        <div className="col-lg-4">
          <div className="position-relative">
            <input
              type="text"
              className="form-control ps-50px"
              placeholder="Add Certificates"
              value={certificateName}
              onChange={(e) => setCertificateName(e.target.value.replace(/^\s+/, ""))} // Prevent leading spaces
            />
            <button
              className="btn btn-primary position-absolute start-2 top-0 shadow-none"
              onClick={handleAddCertificate}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped text-nowrap mb-0 fs-11px">
          <thead className="text-uppercase bg-light">
            <tr>
              <th className="fw-bold text-dark">No.</th>
              <th className="fw-bold text-dark">Certificates</th>
              <th className="fw-bold text-dark">Action</th>
            </tr>
          </thead>
          <tbody>
          {certificateList.map((cert, index) => (
              <tr key={cert.id}>
                <td>{index + 1}</td>
                <td>{cert.CertificateList}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteCertificate(cert.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



        {/* Company List */}
        <div className="border border-3 my-4"></div>

<div className="row gx-2 pb-lg-3 pb-2">
  <div className="col-lg-3">
    <h1 className="page-header mb-6 yellowtext">Company List</h1>
  </div>
  <div className="col-lg-4">
    <div className="position-relative">
      <input
        type="text"
        className="form-control ps-50px"
        placeholder="Add Company"
        value={companyName}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-primary position-absolute start-2 top-0 shadow-none"
        onClick={handleAddCompany}
      >
        Add
      </button>
    </div>
  </div>
</div>

{/* Table */}
<div className="table-responsive">
  <table className="table table-striped text-nowrap mb-0 fs-11px">
    <thead className="text-uppercase bg-light">
      <tr>
        <th className="fw-bold text-dark">No.</th>
        <th className="fw-bold text-dark">Company</th>
        <th className="fw-bold text-dark">Action</th>
      </tr>
    </thead>
    <tbody>
      {companies.map((company, index) => (
        <tr key={company.id}>
          <td>{index + 1}</td>
          <td>{company.CompanyList}</td>
          <td>
  <button
    className="btn btn-sm btn-danger"
    onClick={() => handleDelete(company.id)}
  >
    Delete
  </button>
</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
      </div>
    </div>
  );
};

export default AddOptions;
