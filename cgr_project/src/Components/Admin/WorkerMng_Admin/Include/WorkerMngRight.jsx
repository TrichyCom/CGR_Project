import React,{useState,useEffect} from "react";
import '../../../../../public/assets/css/owncss/SignupLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
function WorkerMngRight(){

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
    return(
        <>
        <div>
        <div id="content" class="app-content">
                <div class="pb-3">
                    <div class="d-lg-flex mb-lg-3 mb-2">
                        <h1 class="page-header mb-6 flex-1" id='data' >WORKERS MANAGEMENT</h1>
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


                </div>
                <div class="table-responsive" id="table">
                    <table class="table table-thead-sticky table-tfoot-sticky table-tbody-bordered table-px-10px table-py-4px table-sm table-striped text-nowrap mb-0 fs-11px">
                         <thead className="text-uppercase bg-light">
                <tr>
                  <th className="text-dark fw-bold">No.</th>
                  <th className="text-dark fw-bold">Emp ID</th>
                  <th className="text-dark fw-bold">Emp Position</th>
                  <th className="text-dark fw-bold">Name</th>
                  <th className="text-dark fw-bold">Cont Number</th>
                  <th className="text-dark fw-bold">FIN No</th>
                  <th className="text-dark fw-bold">Fields</th>
                  <th className="text-dark fw-bold">Gender</th>
                  <th className="text-dark fw-bold">View</th>
                </tr>
              </thead>
              <tbody>
              {workers.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-3">
                    <Icon icon="mdi:account-off-outline" className="fs-48px text-muted" /><br></br>
                      No Employee Record
                    </td>
                  </tr>
                ) : (
                  workers.map((worker, index) => (
                    <tr key={worker.Id}>
                      <td>{index + 1}</td>
                      <td>{worker.EmpId}</td>
                      <td>{worker.EmpPosition}</td>
                      <td>
                        {worker.FirstName} {worker.LastName}
                      </td>
                      <td>{worker.ContNum}</td>
                      <td>{worker.FinNo}</td>
                      <td>{worker.SelectFeilds}</td>
                      <td>{worker.Gender}</td>
                      <td> <span 
                      className="btn btn-sm border p-0 px-3"
                      onClick={() => handleView(worker.FinNo)}
                      style={{ cursor: "pointer" }}
                    >
                      View
                    </span></td>
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