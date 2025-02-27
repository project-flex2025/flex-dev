"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./login.css";
import LoginJson from "./login-settings.json";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showpassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("login button..");
    console.log(username, password, "credass");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      if (result?.ok) {
        toast.success("Login successful! Redirecting to dashboard");
        router.push("/dashboard");
      } else {
        toast.error("Login Error:" + result?.error);
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                className="login-left-section elevated-box">
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

                  <form
                    className="login-form "
                    style={{ marginTop: "40px" }}
                    onSubmit={handleLogin}
                  >
                    <div className="mb-4 text-start">
                      <label className="form-label">Username</label>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUsername(e.target.value)
                        }
                        type="text"
                        className="form-control input-box"
                        placeholder="Enter your username"
                        required
                      />
                    </div>

                    <div className="mb-3 text-start password-section">
                      <label className="form-label">Password</label>
                      <div className="password-input-wrapper">
                        <input
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                          }
                          type={showpassword ? "text" : "password"}
                          className="form-control input-box"
                          placeholder="Enter your password"
                          value={password}
                          required
                        />
                        {showpassword ? (
                          <span
                            onClick={() => setShowPassword(false)}
                            className="input-group-text"
                          >
                            <i className="fa-regular fa-eye"></i>
                          </span>
                        ) : (
                          <span
                            onClick={() => setShowPassword(true)}
                            className="input-group-text"
                          >
                            <i className="fa-regular fa-eye-slash"></i>
                          </span>
                        )}
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
            <div className="col-lg-6 col-md-12 p-0 right-image-container">
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
