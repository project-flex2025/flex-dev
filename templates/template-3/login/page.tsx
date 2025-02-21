import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'

const Login = () => {
    return (
        <div className="login-variant-3">
            <div className="logo-section">
                <Image src={`/${LoginJson.imgURL}`} width={200} height={50} alt="Logo" className="logo" />
            </div>
            <div className="container-fluid login-page ">

                <div className="col-lg-5 col-md-12 d-flex align-items-center justify-content-center left-section">

                    <div className="login-box">
                        <h4 className="login-heading">Login in to your account</h4>
                        <p className="login-title">{LoginJson.caption}
                        </p>

                        <form className="login-form">
                            <div className="mb-4">
                                <label className="form-label">User name</label>
                                <input type="text" className="form-control" value="Lorem lorem" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Enter your Password</label>
                                <input type="password" className="form-control" placeholder="Type your password here" />
                            </div>

                            <div className="d-flex justify-content-between mb-3 ">
                                <div className="remember-check-box">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <a href="#" className="text-decoration-none forgot-password-link">Forgot Password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>

                </div>

                <div className="col-lg-7 col-md-12 right-section">
                    <Image src={`/${LoginJson.imgURL}`} className='right-section-img' width={200} height={200} alt="Kids" />
                </div>
            </div>
        </div>
    )
}

export default Login
