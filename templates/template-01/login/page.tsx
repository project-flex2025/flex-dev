import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'

const Login = () => {
    return (
        <div className="container-fluid login-variant-1">
            <div className="container-fluid">
                <div className="logo-section">
                    <Image src="/logo.png" alt="Logo" width={200} height={50} title="Logo" className="logo-img" />
                </div>
            </div>
            <div className="login-main-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-left-section">
                                <div className="login-text-heading-block">
                                    <h5>Welcome !</h5>
                                    <h2 className="mt-4 mb-2">Sign in to</h2>
                                    <p>{LoginJson.companyName}</p>

                                    <form className="login-form mt-4">
                                        <div className="mb-4 text-start">
                                            <label className="form-label">User name</label>
                                            <input type="text" className="form-control input-box"
                                                placeholder="Enter your user name" />
                                        </div>

                                        <div className="mb-3 text-start password-section">
                                            <label className="form-label">Password</label>
                                            <div className="password-input-wrapper">
                                                <input type="password" className="form-control input-box"
                                                    placeholder="Enter your password" />
                                                <i className="fa-regular fa-eye-slash eye-icon"></i>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="remember-check-box">
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember" className="remember">Remember me</label>
                                            </div>
                                            <a href="#" className="forgot-password-link">Forgot Password?</a>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-login text-center mt-4 w-100">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0 right-image-container">
                            <div className="">
                                <Image src={`/${LoginJson.imgURL}`} alt="Right Side Image" width={200} height={50} className="right-imge" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
