import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../../../public/assets/css/owncss/Worker/WorkerLeftNav.css";

function WorkerLeftNav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };




    const location = useLocation();
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [activeMenu, setActiveMenu] = useState("TASKMANAGEMENT");



    useEffect(() => {
        // Automatically set active menu based on route
        const path = location.pathname;
        if (path.includes("/taskmngworker")) {
            setActiveMenu("TASKMANAGEMENT");
        } else if (path.includes("/attanancemngworker")) {
            setActiveMenu("ATTENDANCEMANAGEMENT");
        }
    }, [location]);

    const handleMenuClick = (menuName) => {
        if (activeMenu !== menuName) {
            setActiveMenu('');
        }
    };



    const menuRefs = {
        propMenu: useRef(null),
    };

    useEffect(() => {
        function handleClickOutside(event) {
            for (const refKey in menuRefs) {
                if (
                    menuRefs[refKey].current &&
                    !menuRefs[refKey].current.contains(event.target)
                ) {
                    setOpenDropdowns((prevState) => ({ ...prevState, [refKey]: false }));
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRefs]);

    const toggleDropdown = (menuKey) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey],
        }));
    };
    return (
        <div className="sidebar-container">
            {/* Toggle Button */}
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isSidebarOpen ? "⏪" : "☰"}
            </button>

            {/* Sidebar */}
            <div id="sidebar" className={`app-sidebar border-end border-3 ${isSidebarOpen ? "open" : "collapsed"}`}>
                <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
                    <div className="menu">
                        <div className="menu-header">ADMIN PANEL</div>



 {/* TASK MANAGEMENT */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "TASKMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("TASKMANAGEMENT")}
                        >
                            <Link to="/workertaskmng" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "TASKMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu === "TASKMANAGEMENT"
                                        ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' }
                                        : {}
                                    }
                                >
                                    <i className="bi bi-person-gear"></i>
                                </span>

                                <span className={`menu-text ${activeMenu === "TASKMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                    TASK <br /> MANAGEMENT
                                </span>
                            </Link>

                        </div>








 {/* ATTENDANCE MANAGEMENT */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "ATTENDANCEMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("ATTENDANCEMANAGEMENT")}
                        >
                            <Link to="/workerattanancemng" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "ATTENDANCEMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu === "ATTENDANCEMANAGEMENT"
                                        ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' }
                                        : {}
                                    }
                                >
                                    <i className="bi bi-person-gear"></i>
                                </span>

                                <span className={`menu-text ${activeMenu === "ATTENDANCEMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                ATTENDANCE <br /> MANAGEMENT
                                </span>
                            </Link>

                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerLeftNav;