import React from "react";
import TaskMngRight from "./Include/TaskMngRight";
import WorkerLeftNav from '../Common/WorkerLeftNav';
import { Link } from "react-router-dom";

function WorkerTaskMng() {
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
            
            <TaskMngRight />
        </>
    )
}
export default WorkerTaskMng