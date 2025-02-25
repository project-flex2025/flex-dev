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
  console.log(Cookies.get("password"));

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

  console.log(showPassword, "password..", username, password);

  // Load credentials if Remember Me was checked
  useEffect(() => {
    const savedCredentials = getUserCredentials();

    console.log(savedCredentials, "saved cred");

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
    <div
      className="container-fluid login-variant-4"
      style={{
        backgroundImage: `url(${LoginJson["Login Side Image"].value})`,
      }}
    >
      <div className="logo-section">
        {/* <Image  src="" alt="Login Logo"> */}
        <Image
          src={`/${LoginJson["Company Logo"].value}`}
          alt="logo"
          width={150}
          height={50}
        />
      </div>

      <div className="container login-main-section">
        <div className="login-container">
          <h6 className="text-muted">
            Welcome to{" "}
            <span className="brand-name">
              {LoginJson["Company Name"].value}
            </span>
          </h6>
          <h2 className="login-head">Sign in</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="mb-3 text-start mail-section">
              <label htmlFor="email" className="form-label ">
                Enter your username
              </label>
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
            <div className="mb-2 text-start pass-section">
              <label htmlFor="password" className="form-label">
                Enter your password
              </label>
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
            <div className="d-flex justify-content-between align-items-center">
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
              {/* <div className="d-flex justify-content-end mb-3 login-check-section">
              <a
                href="#"
                className="text-decoration-none text-primary login-forgot"
              >
                Forgot Password?
              </a>
            </div> */}
            </div>

            <button type="submit" className="btn login-btn py-2">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
