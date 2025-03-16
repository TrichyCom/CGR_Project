import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../../public/assets/css/owncss/SignupLogin.css';

function Login() {
    const [employeeId, setEmployeeId] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (employeeId.toLowerCase() === 'worker') {
            navigate('/workertaskmng');
        } else {
            navigate('/');
        }
    };

    return (
        <div className='Login'>
            <div id="app" className="app app-full-height app-without-header">
                <div className="login">
                    <div className="login-content">
                        <form onSubmit={handleLogin}>
                            <h1 className="text-center bluetext">Log In</h1>
                            <div className="text-body text-opacity-50 text-center mb-5">
                                <span className='yellowtext'>For your protection, please verify your identity.</span>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Employ ID</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg fs-14px"
                                    placeholder="example #924875"
                                    value={employeeId}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg fs-14px" placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="btn btn-lg d-block w-100 my-3 bluebg yellowtext buttonborder border-light rounded">
                                LOG IN
                            </button>
                            <Link to='/workertaskmng'>Worker Mng</Link><br></br>
                            <Link to='/dashboardadmin'>Admin Mng</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
