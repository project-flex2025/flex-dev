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
    <div className="container login-variant-9">
      <div className="login-main-block">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="login-left-section">
              <div className="logo-section">
                <Image
                  src={`/${LoginJson["Company Logo"].value}`}
                  width={200}
                  height={50}
                  alt="Logo"
                  title="Logo"
                />
              </div>
              <div className="login-box">
                <h2 className="mt-3 mb-2">Welcome back !</h2>
                <p>Please enter your details.</p>

                <form className="login-form mt-2" onSubmit={handleLogin}>
                  <div className="mb-3 text-start">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3 text-start password-section">
                    <label className="form-label">Password</label>
                    <div className="password-input-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control me-2"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        // className="input-group-text"
                      >
                        <i
                          className={
                            showPassword
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }
                        ></i>
                      </span>

                      {/* <i className="fa-solid fa-eye eye-icon"></i> */}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="remember-check-box">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="remember" className="remember">
                        Remember me
                      </label>
                    </div>
                    {/* <a href="#" className="forgot-password-link">
                      Forgot Password?
                    </a> */}
                  </div>

                  <div className="d-flex justify-content-center my-2">
                    <button
                      type="submit"
                      className="btn btn-login text-center mt-3 w-100"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
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
                width={150}
                height={50}
                className="right-imge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
