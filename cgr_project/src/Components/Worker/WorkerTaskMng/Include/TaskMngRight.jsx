import React from "react";
import { Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
function TaskMngRight() {
    const location = useLocation();
    const finNo = location.state?.FinNo || "No FinNo provided"; // Fix: Match the key name

    return (
       <>
               <div className="p-0 m-0">
               <div id="content" class="app-content">
             
                       <div class="pb-3">
                           <div class="d-lg-flex mb-lg-3 mb-2">
                               <h1 class="page-header mb-6 flex-1" id='data' >TASK MANAGEMENT</h1>
                               <p>Welcome, Worker with Fin No: {finNo}</p>
                               <div class="row gx-2 pb-lg-3 pb-2"></div>
       

                           </div>
                           {/* <div className="row">
                           <div className="col-9">
                            <div class="">
                                   <div class="position-relative">
                                       <input type="text" class="form-control ps-35px" placeholder="Search by products title or ID..." />
                                       <button class="btn position-absolute start-2 top-0 shadow-none"><iconify-icon icon="ph:magnifying-glass-duotone" class="menu-icon"></iconify-icon></button>
                                   </div>
                               </div>
                            </div>
                            <div className="col-3 m-0 p-0 text-end pe-2">
                            <span class="">
                                
                                <Link to="/addworkerformadmin" className="btn yellowtext bluebg btn-sm fw-bold buttonborder m-0" >
                                    
                                    BACK
                                </Link>
                            </span>
                            </div>

                           </div> */}
                           <div class="row gx-2 pb-lg-3 pb-2">
                               <div class="col-lg-6">
                                   <div class="position-relative">
                                       <input type="text" class="form-control ps-35px" placeholder="Search by products title or ID..." />
                                       <button class="btn position-absolute start-2 top-0 shadow-none"><iconify-icon icon="ph:magnifying-glass-duotone" class="menu-icon"></iconify-icon></button>
                                   </div>
                               </div>
                               <div class="col-lg-2 d-lg-block d-none">
                                   <Link to="#" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                       <span class="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:calendar-search-linear"></span>
                                       Date Range
                                   </Link>
                                   <ul class="dropdown-menu">
                                       <li><Link class="dropdown-item d-flex align-items-center" ><span class="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last 7 Days</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><span class="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last 30 Days</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><span class="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> This Month</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><span class="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Last Month</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><span class="iconify fs-20px my-n1 me-2 ms-n1 text-body text-opacity-50" data-icon="solar:calendar-line-duotone"></span> Custom Range</Link></li>
                                   </ul>
                               </div>
                               <div class="col-lg-2 d-lg-block d-none">
                                   <Link to="#" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                       <span class="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:tag-linear"></span>
                                       Status
                                       <i class="fa ms-auto fa-chevron-down"></i>
                                   </Link>
                                   <ul class="dropdown-menu">
                                       <li><Link class="dropdown-item d-flex align-items-center" ><i class="fa fa-circle fs-7px me-2 ms-n1 text-success"></i> Active</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><i class="fa fa-circle fs-7px me-2 ms-n1 text-body text-opacity-25"></i> Inactive</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><i class="fa fa-circle fs-7px me-2 ms-n1 text-danger"></i> Removed</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><i class="fa fa-circle fs-7px me-2 ms-n1 text-warning"></i> Pending</Link></li>
                                       <li><Link class="dropdown-item d-flex align-items-center" ><i class="fa fa-circle fs-7px me-2 ms-n1 text-primary"></i> Archived</Link></li>
                                   </ul>
                               </div>
       
                               <div class="col-lg-2 d-lg-block d-none">
                                   <Link to="#" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="dropdown">
                                       <span class="iconify fs-20px my-n1 me-2 ms-n1 text-theme" data-icon="solar:tuning-linear"></span>
                                       More filters
                                       <i class="fa ms-auto fa-chevron-down"></i>
                                   </Link>
                                   <ul class="dropdown-menu">
                                       <li><Link class="dropdown-item" >High Priority</Link></li>
                                       <li><Link class="dropdown-item" >Low Priority</Link></li>
                                       <li><Link class="dropdown-item" >Overdue</Link></li>
                                       <li><Link class="dropdown-item" >Completed</Link></li>
                                       <li><hr class="dropdown-divider" /></li>
                                       <li><Link class="dropdown-item" >Custom Filter 1</Link></li>
                                       <li><Link class="dropdown-item" >Custom Filter 2</Link></li>
                                   </ul>
                               </div>
                           </div>
       
                       </div>
                       <div class="table-responsive" id="table">
                           <table class="table table-thead-sticky table-tfoot-sticky table-tbody-bordered table-px-10px table-py-4px table-sm table-striped text-nowrap mb-0 fs-11px">
                               <thead class="text-uppercase">
                                   <tr>
       
                                       <th class="text-white">No.</th>
                                       <th class="text-white">Name</th>
                                       <th class="text-white">Category</th>
                                       <th class="text-white">Item Name</th>
                                       <th class="text-white">Status</th>
                                    
       
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                        
                                       <td>1.</td>
                                       <td>Tan Wei Ming</td>
                                       <td>Structural Work</td>
                                       <td>Concrete, Steel, Wood Framing</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                   
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>2.</td>
                                       <td>Lim Jia Hui</td>
                                       <td>Masonry</td>
                                       <td>Brickwork, Stonework, Blockwork</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                     
                        
                                   </tr>
                                   <tr>
                                        
                                       <td>3.</td>
                                       <td>Ng Wei Ling</td>
                                       <td>Electrical</td>
                                       <td>Wiring, Lighting, Panels</td>
                                       <td> <span className="bg-danger px-3 py-1">Inactive</span></td>
                                     
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>4.</td>
                                       <td>Chong Kai Wen</td>
                                       <td>Plumbing</td>
                                       <td>Pipes, Fixtures, Drainage</td>
                                       <td> <span className="bg-danger px-3 py-1">Inactive</span></td>
                                       
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>5.</td>
                                       <td>Lee Zhi Hao</td>
                                       <td>HVAC</td>
                                       <td>Heating, Ventilation, Air Conditioning</td>
                                       <td> <span className="bg-danger px-3 py-1">Inactive</span></td>
                                      
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>6.</td>
                                       <td>Goh Mei Xin</td>
                                       <td>Finishing Works</td>
                                       <td>Painting, Plastering, Flooring</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                       
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>7.</td>
                                       <td>Toh Jun Hao</td>
                                       <td>Roofing</td>
                                       <td>Shingles, Metal Roofing, Waterproofing</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                       
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>8.</td>
                                       <td>Teo Yi Xuan</td>
                                       <td>Site Preparation</td>
                                       <td>Excavation, Land Grading, Demolition</td>
                                       <td> <span className="bg-danger px-3 py-1">Inactive</span></td>
                                      
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>9.</td>
                                       <td>Wong Sheng Yi</td>
                                       <td>Carpentry & Joinery</td>
                                       <td>Doors, Windows, Cabinets</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                       
                                       
                                   </tr>
                                   <tr>
                                        
                                       <td>10.</td>
                                       <td>Ho Xin Rui</td>
                                       <td>Safety & Compliance</td>
                                       <td>Scaffolding, PPE, Inspections</td>
                                       <td> <span className="bg-successs px-4 py-1">Active</span></td>
                                     
                                       
                                   </tr>
       
                               </tbody>
                               <tfoot>
                             
                               </tfoot>
                           </table>
                       </div>
                   </div>
               </div>
       </>
    );
}

export default TaskMngRight;