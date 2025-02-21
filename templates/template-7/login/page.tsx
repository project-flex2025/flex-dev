import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'


const Login = () => {
    return (
        <div className="container login-variant-7">

            <div className="login-container">
                <div className="row login-main-section w-100">
                    <div className="col-lg-6 col-md-12 left-section">
                        <div className="img-section">
                            <Image src="/login.png" alt="Login Image" width={200} height={50} />
                            <Image src="/logo.png" alt="Login Logo" width={200} height={50} className="login-img-logo" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 login-form-section">
                        <div className="right-section">
                            <div className="logo-section">
                                <Image src={`/${LoginJson.imgURL}`} width={200} height={50} alt="login logo" />
                            </div>
                            <h2 className="login-head">Sign in</h2>
                            <p className="login-title">{LoginJson.companyName}</p>
                            <form className="login-form">
                                <div className="mail-section">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                        <input type="email" className="form-control" id="email"
                                            placeholder="Enter your email address" />
                                    </div>
                                </div>
                                <div className="pass-section">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                                        <input type="password" className="form-control" id="password"
                                            placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3 login-check-section">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                                    </div>
                                    <a href="#" className="forgot-password">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn login-btn py-2">Login</button>
                            </form>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Login
