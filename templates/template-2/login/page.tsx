import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'

const Login = () => {
    return (
        <div className="container login-variant-2">
            <div className="login-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <div className="login-section">
                            <div className="logo-section">
                                <Image src="/logo.png" alt="login logo" width={200} height={50} />
                            </div>
                            <h3 className="login-head">Sign in</h3>
                            <p className="login-title text-muted">{LoginJson.caption}</p>
                            <form className="login-form">
                                <div className="mb-3 mail-section text-start">
                                    <label htmlFor="email" className="form-label mb-2">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                        <input type="email" className="form-control" id="email"
                                            placeholder="Enter your email address" />
                                    </div>
                                </div>
                                <div className="mb-3 pass-section text-start">
                                    <label htmlFor="password" className="form-label mb-2">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                                        <input type="password" className="form-control" id="password"
                                            placeholder="Enter your password" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mb-3 login-check-section">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                                    </div>
                                    <a href="#" className="text-decoration-none login-forgot">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn login-btn w-100 py-2">Login</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 login-right-section">
                        <div className="login-img-section">
                            <Image src={`/${LoginJson.imgURL}`} className="login-img" alt="login-img" width={200} height={50} />
                            <div className='login-right-content'>
                                <h4>Sign in to {LoginJson.companyName}</h4>
                                <p>{LoginJson.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
