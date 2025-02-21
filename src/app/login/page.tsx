import React from "react";
import Image from "next/image";
import "./login.css";
import LoginJson from "./login-settings.json";

const Login = () => {
  return (
    <div className="container-fluid login-variant-1">
      <div className="container-fluid">
        <div className="logo-section">
          <Image
            src={`/${LoginJson["Company Logo"].value}`}
            alt="Logo"
            width={200}
            height={50}
            title="Logo"
            className="logo-img"
          />
        </div>
      </div>
      <div className="login-main-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 ">
              <div
                className="login-left-section elevated-box"
                // style={{ border: "1px solid red" }}
              >
                <h6
                  style={{
                    border: "1px solid gray",
                    padding: 6,
                    borderRadius: "6px",
                    backgroundColor: "#2e2c28",
                    color: "white",
                  }}
                >
                  Sign in to unlock The Flex.
                </h6>
                <div
                  className="login-text-heading-block"
                  style={{ marginTop: "30px" }}
                >
                  <h6 className="m-0">Welcome,</h6>
                  <p style={{ fontSize: "24px", marginBottom: 18, padding: 0 }}>
                    {LoginJson["Company Name"].value}!
                  </p>

                  <div style={{ marginTop: "6px" }}></div>

                  <form className="login-form " style={{ marginTop: "40px" }}>
                    <div className="mb-4 text-start">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control input-box"
                        placeholder="Enter your username"
                      />
                    </div>

                    <div className="mb-3 text-start password-section">
                      <label className="form-label">Password</label>
                      <div className="password-input-wrapper">
                        <input
                          type="password"
                          className="form-control input-box"
                          placeholder="Enter your password"
                        />
                        <i className="fa-regular fa-eye-slash eye-icon"></i>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="remember-check-box">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="remember">
                          Remember me
                        </label>
                      </div>
                      {/* <a href="#" className="forgot-password-link">
                        Forgot Password?
                      </a> */}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-login text-center mt-4 w-100"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 p-0 right-image-container"
              style={{ border: "1px solid red" }}
            >
              <div className="">
                <Image
                  src={`/${LoginJson["Login Side Image"].value}`}
                  alt="Right Side Image"
                  width={200}
                  height={50}
                  className="right-imge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
