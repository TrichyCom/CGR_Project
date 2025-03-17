import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../public/assets/css/owncss/SignupLogin.css'
import Logo from '../../../../public/assets/img/Logo/CGR-removebg-signup.png'
function Signup() {
    return (
        <div>
            <div className='Login'>
                
                <div id="app" className="app app-full-height app-without-header">

                    <div className="login">


                        <div className="login-content">
                   
                            <form action="#" className='border border-3 rounded-4 px-5 pb-5' >
                            <div className='w-50 h-50 mx-auto my-4 p-0 bg-light rounded-5'>
                            <img src={Logo} alt='logo' className='w-100 h-100 '></img>
                        </div>
                                <h1 className="text-center bluetext">Sign In</h1>
                                <div className="text-body text-opacity-50 text-center mb-5 ">
                                   <span className='yellowtext'> For your protection, please verify your identity.</span>
                                </div>
                             

             

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

