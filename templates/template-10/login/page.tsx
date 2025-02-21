import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'


const Login = () => {
    return (
        <div className="container-fluid login-variant-10">

            <div className="logo-section">
                <Image src={`/${LoginJson.imgURL}`} width={200} height={50} alt="Logo" title="Logo" className="logo-img" />
            </div>

            <div className="container login-main-section">
                <div className="login-container">
                    <div className="login-title-block">
                        <Image src="/user.webp" alt="Pesron" title="Pesron" width={100} height={100} className="user-img" />
                        <h2 className="login-head">Welcome</h2>
                        <p>Sign in up by entering following details</p>
                    </div>
                    <form className="login-form mt-4">
                        <div className="mb-4 position-relative">
                            <span className="input-group-text"><i className="fa fa-user user-profile-icons"></i></span>
                            <input type="text" className="form-control input-field" placeholder="Username" />
                        </div>

                        <div className="mb-4 position-relative">
                            <span className="input-group-text"><i className="fa fa-lock user-profile-icons"></i></span>
                            <input type="password" className="form-control input-field" placeholder="Password" />
                        </div>
                        <div className="d-flex justify-content-end mb-3 login-check-section">
                            <a href="#" className="text-decoration-none text-primary login-forgot">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn login-btn  w-100">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
