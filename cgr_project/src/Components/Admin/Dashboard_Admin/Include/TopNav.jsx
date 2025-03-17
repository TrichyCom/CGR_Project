import React from 'react'
import { MdSystemUpdateAlt } from "react-icons/md"; 

import { AiOutlineCheckSquare } from "react-icons/ai"; 
import { BiCalendar } from "react-icons/bi"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { BsGear } from "react-icons/bs"; 
import { AiOutlineWarning } from "react-icons/ai"; 
import { BiCategory } from "react-icons/bi"; 
import { BiChat } from "react-icons/bi"; 
import { AiOutlineGlobal } from "react-icons/ai"; 
import { BiSearch } from "react-icons/bi"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import { GiProgression } from "react-icons/gi"; 
import { Link } from 'react-router-dom'

import Logo from '../../../../../public/assets/img/Logo/CGR-removebg.png'
function TopNav() {
    return (
        <div>
            <div id="header" className="app-header">

                {/* <div className="desktop-toggler">
                    <button type="button" className="menu-toggler" data-toggle-classname="app-sidebar-collapsed" data-dismiss-classname="app-sidebar-toggled" data-toggle-target=".app">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div> */}


                <div className="mobile-toggler">
                    <button type="button" className="menu-toggler" data-toggle-classname="app-sidebar-mobile-toggled" data-toggle-target=".app">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>


                <div className="brand">
                    <img src={Logo} alt='logo' className='w-75'></img>
                </div>

                    
                {/* <div className="menu">
                    <div className="menu-item dropdown d-lg-flex d-none">
                        <a href="#" className="menu-link">
                         
                        </a>
                    </div>
                    <div className="menu-item dropdown d-lg-flex d-none me-3">
                        <div className="menu-search-inline">
                            <AiOutlineSearch className="menu-icon"/>
                            <input className="form-control" placeholder="Search something..." />
                        </div>
                    </div>
                    <div className="menu-item dropdown d-lg-none d-flex">
                        <a href="#" className="menu-link menu-link-icon" data-toggle-classname="app-header-menu-search-toggled" data-toggle-target=".app">
                            <BiSearch className="menu-icon"/>
                        </a>
                    </div>
                    <div className='menu-item dropdown mr-0' >
                        <Link to="#" className="menu-link dropdown"  >
                            <AiOutlineGlobal className="menu-icon"/>
                            <span className=" ">EN</span>
                        </Link>
                        <div className=" dropdown-content   text-uppercase show" id='language'> 
                            <a href="#" className="lang d-flex align-items-center text-white">English <span className="ms-auto fw-semibold text-white  text-center"  >EN</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">Spanish <span className="ms-auto fw-semibold text-white  text-center" >ES</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">French <span className="ms-auto fw-semibold text-white  text-center">FR</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">German <span className="ms-auto fw-semibold text-white  text-center">DE</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">Italian <span className="ms-auto fw-semibold text-white  text-center">IT</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">Japanese <span className="ms-auto fw-semibold text-white  text-center">JA</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">Chinese <span className="ms-auto fw-semibold text-white  text-center">ZH</span></a>
                            <a href="#" className="lang mt-2 d-flex align-items-center text-white">Russian <span className="ms-auto fw-semibold text-white  text-center">RU</span></a>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a href="#"  className="menu-link menu-link-icon">
                            <BiCalendar className="menu-icon"/>
                        </a>
                        <div className="dropdown-content  p-0 w-300px" id='calender-drop'>
                            <div className="card">
                                <div className="card-header">TODAY, NOV 4</div>
                                <div className="card-body p-0 widget-reminder">
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">09:00<br />12:00</div>
                                        <div className="widget-reminder-divider bg-success"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-semibold text-white">Meeting with HR</div>
                                            <div> - Conference Room</div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">20:00<br />23:00</div>
                                        <div className="widget-reminder-divider bg-primary"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-semibold text-white">Dinner with Richard</div>
                                            <div> - Tom's Too Restaurant</div>
                                            <div className="d-flex align-items-center mt-2">
                                               
                                                <a href="#" className="ms-auto">Contact</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">TOMORROW, NOV 5</div>
                                <div className="card-body p-0 widget-reminder">
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">All day</div>
                                        <div className="widget-reminder-divider bg-gray-300"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-semibold text-white">Terry Birthday</div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">08:00</div>
                                        <div className="widget-reminder-divider bg-gray-300"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-semibold text-white">Meeting</div>
                                        </div>
                                    </div>
                                    <div className="widget-reminder-item">
                                        <div className="widget-reminder-time">00:00<br />00:30</div>
                                        <div className="widget-reminder-divider bg-gray-300"></div>
                                        <div className="widget-reminder-content">
                                            <div className="fw-semibold text-white">Server Maintenance</div>
                                            <div> - Data Centre</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="dropdown-item fs-10px text-center py-2 d-block" href="calendar.html">VIEW ALL</a>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a href="#" className="menu-link menu-link-icon">
                            <BiChat className="menu-icon"/>
                        </a>
                        <div className="dropdown-content p-0 w-300px" id='message-drop'>
                            <div className="card card-item">
                                <div className="card-header with-btn">
                                    DISCUSSION GROUP
                                </div>
                                <div className="dropdown-content mt-96 h-400px  fs-10px" >
                                    <div className="widget-chat">
                                        <div className="widget-chat-item">
                                            <div className="widget-chat-media"></div>
                                            <div className="widget-chat-content">
                                                <div className="widget-chat-name">Roberto Lambert</div>
                                                <div className="widget-chat-message last">
                                                    Hey, I'm testing out group messaging.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-chat-item reply">
                                            <div className="widget-chat-content">
                                                <div className="widget-chat-message last">
                                                    Cool
                                                </div>
                                                <div className="widget-chat-status">Read 16:26</div>
                                            </div>
                                        </div>
                                        <div className="widget-chat-date">Today 14:21</div>
                                        <div className="widget-chat-item">
                                            <div className="widget-chat-media"></div>
                                            <div className="widget-chat-content">
                                                <div className="widget-chat-name">Rick Powell</div>
                                                <div className="widget-chat-message last">
                                                    Awesome! What's new?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-chat-item">
                                            <div className="widget-chat-media"></div>
                                            <div className="widget-chat-content">
                                                <div className="widget-chat-name">Roberto Lambert</div>
                                                <div className="widget-chat-message">
                                                    Not much, It's got a new look, contact pics show up in group messaging, some other small stuff.
                                                </div>
                                                <div className="widget-chat-message last">
                                                    How's crusty old iOS 6 treating you?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-chat-item reply">
                                            <div className="widget-chat-content">
                                                <div className="widget-chat-message last">
                                                    Sucks
                                                </div>
                                                <div className="widget-chat-status">Read 16:30</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="dropdown-item fs-10px text-center py-2 d-block" href="messenger.html">VIEW ALL</a>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link menu-link-icon">
                            <BiCategory className="menu-icon"/>
                        </a>
                        <div className="dropdown-content dropdown-content-end p-0 w-300px text-center" id='system-drop'>
                            <div className="row row-grid gx-0">
                                <div className="col-4">
                                    <a href="email_inbox.html" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div className="position-relative">
                                            <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                                            <i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                                        </div>
                                        <div className="fw-500 fs-10px text-white">INBOX</div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="pos_customer_order.html" target="_blank" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
                                        <div className="fw-500 fs-10px text-white">POS SYSTEM</div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="calendar.html" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
                                        <div className="fw-500 fs-10px text-white">CALENDAR</div>
                                    </a>
                                </div>
                            </div>
                            <div className="row row-grid gx-0">
                                <div className="col-4">
                                    <a href="helper.html" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i className="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
                                        <div className="fw-500 fs-10px text-white">HELPER</div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="settings.html" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div className="position-relative">
                                            <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                                            <i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                                        </div>
                                        <div className="fw-500 fs-10px text-white">SETTINGS</div>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="widgets.html" className="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
                                        <div className="fw-500 fs-10px text-white">WIDGETS</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link menu-link-icon">
                            <AiOutlineWarning className="menu-icon"/>
                        </a>
                        <div className=" dropdown-content w-300px p-3" id='notice-drop'>
                            <h6 className="dropdown-header fw-semibold py-2">NOTIFICATIONS</h6>
                            <a className="dropdown-item d-flex align-items-center fs-10px" href="#">
                                <div>
                                    <div className="w-40px h-40px bg-white bg-opacity-10 text-white fs-30px d-flex align-items-center justify-content-center">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                                <div className="flex-1 ps-3 text-truncate">
                                    <div className="text-white fw-semibold">New email received</div>
                                    <div className="text-white text-opacity-75">You have a new email from John Doe.</div>
                                    <div className="text-white text-opacity-50 small">2 minutes ago</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center fs-10px" href="#">
                                <div>
                                    <div className="w-40px h-40px bg-white bg-opacity-10 text-white fs-30px d-flex align-items-center justify-content-center">
                                        <BiCalendar />
                                    </div>
                                </div>
                                <div className="flex-1 ps-3 text-truncate">
                                    <div className="text-white fw-semibold">Meeting reminder: Tomorrow at 9:00 AM</div>
                                    <div className="text-white text-opacity-75">Don't forget your meeting with the client.</div>
                                    <div className="text-white text-opacity-50 small">1 hour ago</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center fs-10px" href="#">
                                <div>
                                    <div className="w-40px h-40px bg-white bg-opacity-10 text-white fs-30px d-flex align-items-center justify-content-center">
                                        <AiOutlineCheckSquare />
                                    </div>
                                </div>
                                <div className="flex-1 ps-3 text-truncate">
                                    <div className="text-white fw-semibold">Task completed</div>
                                    <div className="text-white text-opacity-75">The task assigned to you has been completed.</div>
                                    <div className="text-white text-opacity-50 small">4 hours ago</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center fs-10px" href="#">
                                <div>
                                    <div className="w-40px h-40px bg-white bg-opacity-10 text-white fs-30px d-flex align-items-center justify-content-center">
                                        
                                    </div>
                                </div>
                                <div className="flex-1 ps-3 text-truncate">
                                    <div className="text-white fw-semibold">New comment on your post</div>
                                    <div className="text-white text-opacity-75">Someone commented on your recent post.</div>
                                    <div className="text-white text-opacity-50 small">10 hours ago</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center fs-10px" href="#">
                                <div>
                                    <div className="w-40px h-40px bg-white bg-opacity-10 text-white fs-30px d-flex align-items-center justify-content-center">
                                        <MdSystemUpdateAlt />
                                    </div>
                                </div>
                                <div className="flex-1 ps-3 text-truncate">
                                    <div className="text-white fw-semibold">System update scheduled</div>
                                    <div className="text-white text-opacity-75">There will be a system update tomorrow.</div>
                                    <div className="text-white text-opacity-50 small">Yesterday at 6:00 PM</div>
                                </div>
                            </a>
                            <a className="dropdown-item fs-10px text-center py-2 d-block" href="messenger.html">VIEW ALL</a>
                        </div>
                    </div>
                    <div className="menu-item dropdown">
                        <a href="#" data-toggle="theme-panel-expand" className="menu-link menu-link-icon">
                            <BsGear className="menu-icon"/>
                        </a>
                        <div className="dropdown-content ">
                            <h6 className="lang dropdown-header">Settings</h6>
                            <a className="lang dropdown-item" href="#">General Settings</a>
                            <a className="lang dropdown-item" href="#">System Preferences</a>
                            <a className="lang dropdown-item" href="#">Security Settings</a>
                            <a className="lang dropdown-item" href="#">Application Settings</a>
                            <div className="dropdown-divider"></div>
                            <a className="lang dropdown-item" href="#">About</a>
                            <a className="lang dropdown-item" href="#">Feedback</a>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link d-flex align-items-center">
                            <div className="menu-img online me-sm-2 ms-lg-0 ms-n2">
                                
                            </div>
                            <div className="menu-text d-sm-block d-none">
                                <span className="d-block"><span><span className="__cf_email__" data-cfemail="580d0b1d0a1619151d181f15191114761b1715">[email&#160;protected]</span></span></span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-10px fade">
                            <h6 className="dropdown-header">USER OPTIONS</h6>
                            <a className="dropdown-item" href="profile.html">VIEW PROFILE</a>
                            <a className="dropdown-item" href="settings.html">ACCOUNT SETTINGS</a>
                            <a className="dropdown-item" href="calendar.html">CALENDER SETTINGS</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="helper.html">HELP & SUPPORT</a>
                            <a className="dropdown-item" href="page_login.html">LOG OUT</a>
                        </div>
                    </div>
                </div> */}
                <form className="menu-search-float"  name="header_search_form">
                    <div className="menu-search-container">
                        <div className="menu-search-icon"><i className="bi bi-search"></i></div>
                        <div className="menu-search-input">
                            <input type="text" className="form-control" placeholder="Search something..." />
                        </div>
                        <div className="menu-search-icon">
                            <a href="#" data-toggle-classname="app-header-menu-search-toggled" data-toggle-target=".app"><i className="bi bi-x-lg"></i></a>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default TopNav
