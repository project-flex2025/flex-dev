import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'

const Login = () => {
    return (
        <div className="container login-variant-9">
            <div className="login-main-block">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="login-left-section">
                            <div className="logo-section">
                                <Image src={`/${LoginJson.imgURL}`} width={200} height={50} alt="Logo" title="Logo" />
                            </div>
                            <div className="login-box">
                                <h2 className="mt-3 mb-2">Welcome back !</h2>
                                <p>Please enter your details.</p>

                                <form className="login-form mt-2">
                                    <div className="mb-3 text-start">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control input-box" placeholder="Enter your mail" />
                                    </div>

                                    <div className="mb-3 text-start password-section">
                                        <label className="form-label">Password</label>
                                        <div className="password-input-wrapper">
                                            <input type="password" className="form-control input-box"
                                                placeholder="Enter your password" />
                                            <i className="fa-solid fa-eye eye-icon"></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="remember-check-box">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember" className="remember">Remember me</label>
                                        </div>
                                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                                    </div>

                                    <div className="d-flex justify-content-center my-2">
                                        <button type="submit" className="btn btn-login text-center mt-3 w-100">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0 right-image-container">
                        <div className="">
                            <Image src={`/${LoginJson.imgURL}`} alt="Right Side Image" width={150} height={50} className="right-imge" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
