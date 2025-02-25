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
    <div
      className="container-fluid login-variant-10"
      style={{
        backgroundImage: `url(${LoginJson["Login Side Image"].value})`,
      }}
    >
      <div className="logo-section">
        <Image
          src={`/${LoginJson["Company Logo"].value}`}
          width={200}
          height={50}
          alt="Logo"
          title="Logo"
          className="logo-img"
        />
      </div>

      <div className="container login-main-section">
        <div className="login-container">
          <div className="login-title-block">
            <Image
              src="/user.webp"
              alt="Pesron"
              title="Pesron"
              width={100}
              height={100}
              className="user-img"
            />
            <h2 className="login-head">Welcome</h2>
            <p>Sign in up by entering following details</p>
          </div>
          <form className="login-form mt-4" onSubmit={handleLogin}>
            <div className="mb-4 position-relative">
              <span className="input-group-text">
                <i className="fa fa-user user-profile-icons"></i>
              </span>
              <input
                type="text"
                className="form-control input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 position-relative">
              <span className="input-group-text">
                <i className="fa fa-lock user-profile-icons"></i>
              </span>
              <input
                className="form-control input-field"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-end mb-3 login-check-section">
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
              {/* <a
                href="#"
                className="text-decoration-none text-primary login-forgot"
              >
                Forgot Password
              </a> */}
            </div>
            <button type="submit" className="btn login-btn  w-100">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
