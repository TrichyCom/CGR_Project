import React from "react";
import WorkerLeftNav from '../Common/WorkerLeftNav';
import { Link } from "react-router-dom";
import WorkerAttaMngRight from "./Include/WorkerAttaMngRight";

function WorkerAttananceMng() {
    return (
        <>
        <div className="row p-0 m-0">
            <div className="col-9">
            <WorkerLeftNav /><br /><br />
            </div>
            <div className="col-3 text-end py-3">
                            <Link to="/login" className="btn yellowtext bluebg btn-sm fw-bold buttonborder border-2 " >
                                BACK
                            </Link>
            </div>
        </div>
            
            <WorkerAttaMngRight />
        </>
    )
}
export default WorkerAttananceMng