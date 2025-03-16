import React from "react";
import { Link } from "react-router-dom";

function WorkerAttaMngRight() {

    return (
        <>
            <div className="p-0 m-0">
                <div id="content" class="app-content">

                    <div class="pb-3">
                        <div class="d-lg-flex mb-lg-3 mb-2">
                            <h1 class="page-header mb-6 flex-1" id='data' >ATTANANCE MANAGEMENT</h1>
                            <div class="row gx-2 pb-lg-3 pb-2"></div>
                        </div>

                    </div>

                    <div className="border">

                        <div className="row">
                            <div className="col-4">

                            </div>
                            <div className="col-4">
                                <div className="text-center">
                                    <i className="bi bi-person-check" style={{ fontSize: '50px' }}></i>
                                </div>

                            </div>
                            <div className="col-4">

                            </div>
                        </div>

                        <div className="border mx-5 py-5">
                            <div className="row">
                                <div className="col-3">
                                    
                                </div>
                                <div className="col-3">
                                 <p className="text-center fw-bold">Today's Status : </p>
                                </div>
                                <div className="col-3 text-center">
                                <p>Present</p>
                                </div>
                                <div className="col-3">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    
                                </div>
                                <div className="col-3">
                                 <p className="text-center fw-bold">Check-in : </p>
                                </div>
                                <div className="col-3">
                                <p className="text-center">8.00 AM</p>
                                </div>
                                <div className="col-3">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    
                                </div>
                                <div className="col-3">
                                 <p className="text-center fw-bold">Check-out : </p>
                                </div>
                                <div className="col-3">
                                <p className="text-center">___</p>
                                </div>
                                <div className="col-3">

                                </div>
                            </div>
                        </div>


<div className="text-center my-5">
               <Link to="/login" className="btn btn-success btn-sm fw-bold border border-2 m-3" >
                                    Check In
                                </Link>
               <Link to="/login" className="btn btn-danger btn-sm fw-bold border border-2 m-3" >
                                    Check Out
                                </Link>
</div>



                    </div>






                </div>
            </div>
        </>
    );
}

export default WorkerAttaMngRight;