import React from 'react'
import Image from 'next/image'
import './login.css'
import LoginJson from './login-setting.json'


const Login = () => {
    return (
        <div className="login-variant-6">
            <div className="hero-section">
                <div className="container-fluid">
                    <div className="logo-section">
                        <Image src={`/${LoginJson.imgURL}`} alt="Logo" width={150} height={50} title="Logo" />
                    </div>
                </div>
                <div className="container">
                    <div className="left-side-block">
                        <div className="signin-text-block">
                            <h2>Sign in to</h2>
                            <h5>{LoginJson.companyName}</h5>
                            <p>{LoginJson.caption}</p>
                        </div>
                        <div className="bg-image">
                            <Image src="/login.png" width={150} height={520} alt="" />
                        </div>

                        <div className="signin-form">
                            <h5 className="signin-sub-title">Welcome to <span>{LoginJson.companyName}</span></h5>
                            <h2 className="signin-heading">Sign in</h2>

                            <form className="form-login">
                                <div className="mb-4">
                                    <label className="form-label">Enter your username or email address</label>
                                    <input type="text" className="form-control input-field"
                                        placeholder="Username or email address" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Enter your password</label>
                                    <input type="password" className="form-control input-field" placeholder="Password" />
                                </div>
                                <div className="text-end">
                                    <a href="#" className="forgot-pass" title="Forgot Password">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn mt-4 signin-btn w-100">Sign in</button>
                            </form>
                        </div>
                    </div>

                </div>
                {/* <div className='logged-users'>
                    <p>Login as</p>
                    <div className='user-list'>
                        <div className='user-card'>

                        </div>
                    </div>
                </div> */}

                <div className="logged-users">
                    <p className="mb-4">Login as</p>
                    <div className="row g-3">
                        <div className="col-6">
                            <div className="user-card">
                                <button className="close-btn"><i className="fa-regular fa-circle-xmark"></i></button>
                                <Image src="/user.png" width={100} height={100} alt="User Image" className="user-image" />
                                <div className="user-name">Travis Head</div>
                                <div className="user-status">Active 1 days ago</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="user-card">
                                <button className="close-btn"><i className="fa-regular fa-circle-xmark"></i></button>
                                <Image src="/user.png" width={100} height={100} alt="User Image" className="user-image" />
                                <div className="user-name">Steave Smith</div>
                                <div className="user-status">Active 2 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
