import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../../../../../../public/assets/css/owncss/SignupLogin.css';
import '../../../../../../public/assets/css/owncss/Admin/ViewWorkerForm.css';

const ViewWorkerForm = () => {
  const { state } = useLocation();
  const worker = state?.worker || {};
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (worker.FinNo) {
      axios
        .get(`http://localhost:3001/workerreportfiles/${worker.FinNo}`)
        .then((res) => setReportData(res.data))
        .catch((err) => console.error("Error fetching worker report data:", err));
    }
  }, [worker.FinNo]);

  const fileFields = [
    "IPA",
    "Passport",
    "Bond",
    "Onboard",
    "Medical",
    "Issuance",
    "MOMThumbPrint",
    "IC",
    "Contract"
  ];



  const handleView = (filename) => {
    window.open(`http://localhost:3001/view/workerreportfile/${filename}`, '_blank');
  };
  

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `http://localhost:3001/download/workerreportfile/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="content" className="app-content">
      <h3 className="page-headr mb-4 flex-1" id="data">
        <span className="bg-dark text-white px-4 py-1 border-white border rounded-start rounded-5">
          VIEW DETAILS
        </span>
      </h3>

      <div className="card mb-4">
        <div className="card-header yellowtext fs-6 fw-bold">WORKER DETAILS</div>
        <div className="card-body">
          {reportData ? (
            <>
              <div className="mb-3">
                <strong>FinNo:</strong> {reportData.FinNo}
              </div>
              <div className="row">
                {fileFields.map((field) => (
                  reportData[field] && (
                    <div className="col-md-4 mb-4" key={field}>
                      <div className="card h-100 shadow-sm border-primary border-2">
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="card-title text-primary">{field}</h5>
                          <p className="card-text text-truncate">
                            {reportData[field]}
                          </p>
                          <div className="mt-auto">
                            <button
                              className="btn btn-sm btn-outline-primary me-2"
                              onClick={() => handleView(reportData[field])}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-sm btn-outline-success"
                              onClick={() => handleDownload(reportData[field])}
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </>
          ) : (
            <p>Loading report data or no data found for this worker.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewWorkerForm;
