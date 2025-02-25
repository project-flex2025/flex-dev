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
    <div className="login-variant-3">
      <div className="logo-section">
        <Image
          src={`/${LoginJson["Company Logo"].value}`}
          width={200}
          height={50}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="container-fluid login-page ">
        <div className="col-lg-5 col-md-12 d-flex align-items-center justify-content-center left-section">
          <div className="login-box">
            <h4 className="login-heading">Login in to your account</h4>
            <p className="login-title">{LoginJson.Caption.value}</p>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter your Password</label>
                <div className="password-input-wrapper position-relative">
                  <input
                    className="form-control"
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

              <div className="d-flex justify-content-between mb-3 ">
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
                {/* <a
                  href="#"
                  className="text-decoration-none forgot-password-link"
                >
                  Forgot Password?
                </a> */}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 right-section">
          <Image
            src={`/${LoginJson["Login Side Image"].value}`}
            className="right-section-img"
            width={200}
            height={200}
            alt="Kids"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
