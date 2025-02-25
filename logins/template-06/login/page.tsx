"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoginJson from "./login-settings.json";
import "./login.css";

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
    <div className="login-variant-6">
      <div className="hero-section">
        <div className="container-fluid">
          <div className="logo-section">
            <Image
              src={`/${LoginJson["Company Logo"].value}`}
              alt="Logo"
              width={150}
              height={50}
              title="Logo"
            />
          </div>
        </div>
        <div className="container">
          <div className="left-side-block">
            <div className="signin-text-block">
              <h2>Sign in to</h2>
              <h5>{LoginJson["Company Name"].value}</h5>
              <p>{LoginJson.Caption.value}</p>
            </div>
            <div className="bg-image">
              <Image src="/login.png" width={150} height={520} alt="" />
            </div>

            <div className="signin-form">
              <h5 className="signin-sub-title">
                Welcome to <span>{LoginJson["Company Name"].value}</span>
              </h5>
              <h2 className="signin-heading">Sign in</h2>

              <form className="form-login" onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="form-label">
                    Enter your username or email address
                  </label>
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
                <div className="mb-2">
                  <label className="form-label">Enter your password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="input-group-text"
                    >
                      <i
                        className={
                          showPassword
                            ? "fa-regular fa-eye"
                            : "fa-regular fa-eye-slash"
                        }
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="remember-check-box">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input me-2"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember" className="remember">
                    Remember me
                  </label>
                </div>
                {/* <div className="text-end">
                  <a href="#" className="forgot-pass" title="Forgot Password">
                    Forgot Password?
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="btn mt-4 signin-btn w-100"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Signin"}
                </button>
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
                <button className="close-btn">
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                <Image
                  src="/user.png"
                  width={100}
                  height={100}
                  alt="User Image"
                  className="user-image"
                />
                <div className="user-name">Travis Head</div>
                <div className="user-status">Active 1 days ago</div>
              </div>
            </div>
            <div className="col-6">
              <div className="user-card">
                <button className="close-btn">
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
                <Image
                  src="/user.png"
                  width={100}
                  height={100}
                  alt="User Image"
                  className="user-image"
                />
                <div className="user-name">Steave Smith</div>
                <div className="user-status">Active 2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
