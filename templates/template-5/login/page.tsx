import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'


const Login = () => {
    return (
        <div className="container login-variant-5">
            <div className="login-main-block">
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="left-image-container">
                            <Image src={`/${LoginJson.imgURL}`} alt="Left Side Image" width={250} height={50} className="left-imge" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="login-right-section">
                            <div className="logo-section">
                                <div className='logo-section d-flex justify-content-center'><Image src='/logo.png' alt='logo' width={200} height={50} /> </div>
                            </div>
                            <div className="login-box">
                                <h3 className="my-4">Login to lorem..!</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                <form className="login-form mt-3">
                                    <div className="mb-4 text-start">
                                        <label className="form-label">User name</label>
                                        <input type="text" className="form-control input-box"
                                            placeholder="Enter your User name" />
                                    </div>

                                    <div className="mb-2 text-start password-section">
                                        <label className="form-label">Password</label>
                                        <div className="password-input-wrapper">
                                            <input type="password" className="form-control input-box"
                                                placeholder="Enter your password" />
                                            <i className="fa fa-eye-slash eye-icon" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="remember-check-box">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember me</label>
                                        </div>
                                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                                    </div>

                                    <div className="d-flex justify-content-center my-4">
                                        <button type="submit" className="btn btn-login text-center mt-3">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
