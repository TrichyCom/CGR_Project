import React,{useState,useEffect} from "react";
import '../../../../../../public/assets/css/owncss/SignupLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
function ProjectMngDashRight(){


    return(
        <>
        <div>
        <div id="content" class="app-content">
                <div class="pb-2">
                    <div class="d-lg-flex mb-lg-3 mb-2">
                        <h1 class="page-header mb-6 flex-1" id='data' >PROJECT MANAGEMENT</h1>
                        <div class="row gx-2 pb-lg-3 pb-2"></div>

                        <span class="d-none d-lg-flex align-items-center mx-2">
                        <Link to="#" className="btn yellowtext btn-sm d-flex pe-3 fw-bold buttonborder" >
                                <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                                ADD FORM OPTIONS
                            </Link>
                            </span>
                        <span class="d-none d-lg-flex align-items-center">
                         
                            <Link to="#" className="btn yellowtext bluebg btn-sm d-flex pe-3 fw-bold buttonborder" >
                                <span class="iconify fs-18px me-2 ms-n1" data-icon="solar:refresh-bold-duotone"></span>
                                ADD WORKER +
                            </Link>
                        
                        </span>
                    </div>


                </div>



                <div className="row gx-2 pb-lg-3 pb-2">
                <div className="col-xl-4">
                    </div>
          <div className="col-xl-4">
                  <div className="mb-3">
                  <div className="input-group">
                  <input type="text" id="educationfileinput" className="form-control" accept="*/*" placeholder="Add Project Details" required />
                  <button type="submit" className="btn btn-primary fw-bold">
                  Add
                </button>
                  </div>
                  </div>
                </div>
                <div className="col-xl-4">
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
              
              </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProjectMngDashRight