import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../../../../public/assets/css/owncss/LeftNav.css';

function LeftNav() {
    const location = useLocation();
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [activeMenu, setActiveMenu] = useState("WORKERSMANAGEMENT");



    useEffect(() => {
        // Automatically set active menu based on route
        const path = location.pathname;
        if (path.includes("/workermngadmin")) {
            setActiveMenu("WORKERSMANAGEMENT");
        } 
        else if (path.includes("/dashboardadmin")) {
            setActiveMenu("TOOLSMANAGEMENT");
        }
        else if (path.includes("/viewprojectlist")) {
            setActiveMenu("PROJECTMANAGEMENT");
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
        <div>
            <div id="sideba" className="app-sidebar border-end border-3">
                <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">

                    {/* admin panel */}
                    <div className="menu">
                        <div className="menu-header">ADMIN PANEL</div>

                        {/* WORKERSMANAGEMENT */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "WORKERSMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("WORKERSMANAGEMENT")}
                        >
                            <Link to="/workermngadmin" className="menu-link">
    <span
        className={`menu-icon ${activeMenu === "WORKERSMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
        style={activeMenu === "WORKERSMANAGEMENT" 
            ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } 
            : {}
        }
    >
        <i className="bi bi-person-gear"></i>
    </span>

    <span className={`menu-text ${activeMenu === "WORKERSMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
        WORKERS <br /> MANAGEMENT
    </span>
</Link>

                        </div>
                        {/* TOOLSMANAGEMENT */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "TOOLSMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("TOOLSMANAGEMENT")}
                        >
                            <Link to="/dashboardadmin" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "TOOLSMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu == "TOOLSMANAGEMENT" ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } : {}}
                                >
                                   <i className="bi bi-wrench"></i>



                                </span>

                                <span className={`menu-text ${activeMenu === "TOOLSMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                    TOOLS <br></br>MANAGEMENT
                                </span>
                            </Link>
                        </div>

                        {/* materials management */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "MATERIALSMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("MATERIALSMANAGEMENT")}
                        >
                            <Link to="#" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "MATERIALSMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu == "MATERIALSMANAGEMENT" ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } : {}}
                                >
                                    <i className="bi bi-stack"></i>

                                </span>

                                <span className={`menu-text ${activeMenu === "MATERIALSMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                    MATERIALS <br></br> MANAGEMENT
                                </span>
                            </Link>
                        </div>

                        {/* quotation management */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "QUOTATIONMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("QUOTATIONMANAGEMENT")}
                        >
                            <Link to="#" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "QUOTATIONMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu == "QUOTATIONMANAGEMENT" ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } : {}}
                                >
                                 <i className="bi bi-file-text"></i>



                                </span>

                                <span className={`menu-text ${activeMenu === "QUOTATIONMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                QUOTATION <br></br> MANAGEMENT
                                </span>
                            </Link>
                        </div>


                        {/* project management */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "PROJECTMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("PROJECTMANAGEMENT")}
                        >
                            <Link to="/viewprojectlist" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "PROJECTMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu == "PROJECTMANAGEMENT" ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } : {}}
                                >
                               <i className="bi bi-clipboard-check"></i>




                                </span>

                                <span className={`menu-text ${activeMenu === "PROJECTMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                PROJECT <br></br> MANAGEMENT
                                </span>
                            </Link>
                        </div>


                        {/* user management */}
                        <div
                            className={`menu-item py-1 rounded-end rounded-5 my-1 ${activeMenu === "USERMANAGEMENT" ? "leftnavmenubg" : "bg-light"}`}
                            onClick={() => handleMenuClick("USERMANAGEMENT")}
                        >
                            <Link to="#" className="menu-link">
                                <span
                                    className={`menu-icon ${activeMenu === "USERMANAGEMENT" ? "fw-bold rounded" : "text-dark rounded border border-dark border-2"}`}
                                    style={activeMenu == "USERMANAGEMENT" ? { background: 'rgb(255, 255, 255)', color: '#1A5D99', border: '2px solid #C9D931' } : {}}
                                >
                                  <i className="bi bi-person"></i>
                                  
                                </span>

                                <span className={`menu-text ${activeMenu === "USERMANAGEMENT" ? "leftnavmenutext" : "text-dark fw-bold"}`}>
                                USER <br></br> MANAGEMENT
                                </span>
                            </Link>
                        </div>















                        {/* EMAIL */}
                        {/* <div
                            ref={menuRefs.propMenu}
                            className={`menu-item ${openDropdowns.propMenu ? "expand" : ""} has-sub`}
                        >
                            <Link to="#" className="menu-link" onClick={() => toggleDropdown("propMenu")}>
                                <span className="menu-icon">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <span className="menu-text">EMAIL</span>
                                <span className="menu-caret">
                                    <b className="caret"></b>
                                </span>
                            </Link>
                            <div className="menu-submenu">
                                <div
                                    className={`menu-item ${activeMenu === "inbox" ? "bg-warning" : ""}`}
                                    onClick={() => setActiveMenu("inbox")}
                                >
                                    <Link to="#" className="menu-link">
                                        <span className="menu-text">INBOX</span>
                                    </Link>
                                </div>
                                <div
                                    className={`menu-item ${activeMenu === "compose" ? "bg-warning" : ""}`}
                                    onClick={() => setActiveMenu("compose")}
                                >
                                    <Link to="#" className="menu-link">
                                        <span className="menu-text">COMPOSE</span>
                                    </Link>
                                </div>
                                <div
                                    className={`menu-item ${activeMenu === "detail" ? "bg-warning" : ""}`}
                                    onClick={() => setActiveMenu("detail")}
                                >
                                    <Link to="#" className="menu-link">
                                        <span className="menu-text">DETAIL</span>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

  

                    </div>

<div className="border mt-4 mx-4"></div>

                    {/* user panel */}

                    <div className="menu">
                    <div className="menu-header">PROFILE PORTAL</div>
                        <div className="menu-item "  >
                            <Link to='/Datamanagement' className="menu-link" >
                                <span className="menu-icon">
                                <i class="bi bi-filter-square"></i>
                                </span>
                                <span className="menu-text"> DATA MANAGMENT </span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-folder2-open"></i>
                                </span>
                                <span className="menu-text">FILE MANAGER</span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-chat-left-text"></i>
                                </span>
                                <span className="menu-text">MESSENGER</span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-person-bounding-box"></i>
                                </span>
                                <span className="menu-text">PROFILE</span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' href="calendar.html" className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-calendar-week"></i>
                                </span>
                                <span className="menu-text">CALENDAR</span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-gear"></i>
                                </span>
                                <span className="menu-text">SETTINGS</span>
                            </Link>
                        </div>
                        <div className="menu-item ">
                            <Link to='#' className="menu-link">
                                <span className="menu-icon">
                                <i class="bi bi-question-octagon"></i>
                                </span>
                                <span className="menu-text">HELPER</span>
                            </Link>
                        </div>

                    </div>


                    <div className="mt-auto p-15px w-100">
                        <Link to="#" className="btn d-block btn-secondary btn-sm py-6px w-100">
                            DOCUMENTATION
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftNav;
