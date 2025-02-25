"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoginJson from "./login-settings.json";
import "./login.css";
import Cookies from "js-cookie";

// Store username & password securely in cookies
const setUserCredentials = (username: string, password: string): void => {
  Cookies.set("username", username, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  });
  Cookies.set("password", password, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  });
};

// Retrieve stored credentials
const getUserCredentials = () => {
  return {
    username: Cookies.get("username") || "",
    password: Cookies.get("password") || "",
  };
};

// Clear credentials
const removeUserCredentials = () => {
  Cookies.remove("username");
  Cookies.remove("password");
};

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  console.log(showPassword, "password..");

  // Load credentials if Remember Me was checked
  useEffect(() => {
    const savedCredentials = getUserCredentials();
    if (savedCredentials.username && savedCredentials.password) {
      setUsername(savedCredentials.username);
      setPassword(savedCredentials.password);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username, // Ensure backend expects "username"
        password,
      });

      if (result?.ok) {
        toast.success("Login successful! Redirecting...");
        if (rememberMe) {
          setUserCredentials(username, password);
        } else {
          removeUserCredentials();
        }
        router.push("/dashboard");
      } else {
        toast.error(result?.error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container login-variant-5">
      <div className="login-main-block">
        <div className="row">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="left-image-container">
              <Image
                src={`/${LoginJson["Login Side Image"].value}`}
                alt="Left Side Image"
                width={250}
                height={50}
                className="left-imge"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="login-right-section">
              <div className="logo-section">
                <div className="logo-section d-flex justify-content-center">
                  <Image
                    src={`/${LoginJson["Company Logo"].value}`}
                    alt="logo"
                    width={200}
                    height={50}
                  />{" "}
                </div>
              </div>
              <div className="login-box">
                <h3 className="my-4">
                  Login to {LoginJson["Company Name"].value}..!
                </h3>
                <p>{LoginJson["Caption"].value}</p>

                <form className="login-form mt-3" onSubmit={handleLogin}>
                  <div className="mb-4 text-start">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control input-box"
                      id="email"
                      placeholder="Enter your Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-2 text-start password-section">
                    <label className="form-label">Password</label>
                    <div className="password-input-wrapper position-relative">
                      <input
                        className="form-control input-box"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span onClick={() => setShowPassword(!showPassword)}>
                        <i
                          className={`fa-regular ${
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          } password-icon`}
                        ></i>
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="remember-check-box">
                      <input
                        type="checkbox"
                        id="remember"
                        className="form-check-input"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="remember">Remember me</label>
                    </div>
                    {/* <a href="#" className="forgot-password-link">
                      Forgot Password?
                    </a> */}
                  </div>

                  <div className="d-flex justify-content-center my-4">
                    <button
                      type="submit"
                      className="btn btn-login text-center mt-3"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
