import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../public/assets/css/owncss/SignupLogin.css'
// import Logo from '../../../../public/assets/img/Logo/CGR-removebg.png'
function Signup() {
    return (
        <div>
            <div className='Login'>
                
                <div id="app" className="app app-full-height app-without-header">

                    <div className="login">


                        <div className="login-content">
                        {/* <div className=''>
                            <img src={Logo} alt='logo'></img>
                        </div> */}
                            <form action="#" className='' >
                                <h1 className="text-center bluetext">Sign In</h1>
                                <div className="text-body text-opacity-50 text-center mb-5 ">
                                   <span className='yellowtext'> For your protection, please verify your identity.</span>
                                </div>
                                {/* <div className="mb-4">
                                    <label className="form-label">Email Address</label>
                                    <input type="text" className="form-control form-control-lg fs-14px" placeholder="username@address.com" />
                                </div> */}
                                <div className="mb-4">
                                    <label className="form-label">Employ ID</label>
                                    <input type="text" className="form-control form-control-lg fs-14px" placeholder="example #924875" />
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex">
                                        <label className="form-label">Password</label>
                                        {/* <Link to="#" className="ms-auto text-body text-opacity-50" >Forgot password?</Link> */}
                                    </div>
                                    <input type="password" className="form-control form-control-lg fs-14px" placeholder="Enter your password" />
                                </div>
                                {/* <div className="mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value id="customCheck1" />
                                        <label className="form-check-label fw-500" for="customCheck1">Remember me</label>
                                    </div>
                                </div> */}
                                <div className="mb-4">
                                    <p>if already Signup ? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                                </div>
                                <Link to='/login' className="btn btn-lg d-block w-100 mb-3 bluebg yellowtext buttonborder border-light rounded">SIGN IN</Link>
                            </form>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

