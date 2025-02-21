import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'


const Login = () => {
    return (
        <div className="container-fluid login-variant-8">

            <div className="container login-main-section">
                <div className="login-container">
                    <div className="login-title-block">
                        <div className="logo"><Image src='/logo.png' alt='logo' width={200} height={50} /> </div>
                        <h2 className="login-head">Welcome back!</h2>
                        <p>Login to your account below.</p>
                    </div>
                    <form className="login-form">
                        <div className="mb-3 mail-section">
                            <input type="email" className="form-control input-field" id="email" placeholder="Enter Email" />
                        </div>
                        <div className="mb-3 password-section">
                            <div className="input-box">
                                <input type="password" id="password" className="form-control input-field"
                                    placeholder="Enter Password" />
                                <i className="fa-regular fa-eye-slash eye-icon"></i>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mb-3 login-check-section">

                            <a href="#" className="text-decoration-none text-primary login-forgot">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn login-btn pb-2">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
