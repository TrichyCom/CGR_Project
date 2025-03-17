import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../../public/assets/css/owncss/SignupLogin.css';
import Logo from '../../../../public/assets/img/Logo/CGR-removebg-signup.png';

function Login() {
    const [finNo, setFinNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Fetch worker details by FinNo
            const response = await axios.get(`http://localhost:3001/addworker?FinNo=${finNo}`);
            const worker = response.data;

            if (!worker) {
                setError("Invalid FIN Number");
                return;
            }

            // Generate expected password
            // const expectedPassword = worker.FirstName.charAt(0) + worker.LastName.charAt(0) + worker.DOB;

            const dobParts = worker.DOB.split("-"); // Split YYYY-MM-DD
            const formattedDOB = dobParts[2] + dobParts[1] + dobParts[0]; // Rearrange to DDMMYYYY
            const expectedPassword = worker.FirstName.charAt(0) + worker.LastName.charAt(0) + formattedDOB;
            


            if (password !== expectedPassword) {
                setError("Incorrect Password");
                return;
            }

            // Navigate to TaskMngRight and pass FinNo
            navigate('/workertaskmng', { state: { FinNo: finNo } });

        } catch (error) {
            console.error("Error fetching worker details:", error);
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className='Login'>
            <div id="app" className="app app-full-height app-without-header">
                <div className="login">
                    <div className="login-content border p-5 py-1 border-4 border-dark rounded-4">
                        <form onSubmit={handleLogin}>
                            <div className='w-50 h-50 mx-auto my-4 p-0 bg-light rounded-5'>
                                <img src={Logo} alt='logo' className='w-100 h-100 ' />
                            </div>
                            <h1 className="text-center bluetext">Log In</h1>
                            <div className="text-body text-opacity-50 text-center mb-5">
                                <span className='yellowtext'>For your protection, please verify your identity.</span>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">FIN ID</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg fs-14px"
                                    placeholder="Enter FIN No"
                                    value={finNo}
                                    onChange={(e) => setFinNo(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg fs-14px"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="btn btn-lg d-block w-100 my-3 bluebg yellowtext buttonborder border-light rounded">
                                LOG IN
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
