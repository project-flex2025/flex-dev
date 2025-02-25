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
    <div
      className="container-fluid login-variant-8"
      style={{
        backgroundImage: `url(${LoginJson["Login Side Image"].value})`,
      }}
    >
      <div className="container login-main-section">
        <div className="login-container">
          <div className="login-title-block">
            <div className="logo">
              <Image
                src={`/${LoginJson["Company Logo"].value}`}
                alt="logo"
                width={200}
                height={50}
              />{" "}
            </div>
            <h2 className="login-head">Welcome back!</h2>
            <p>Login to your account below.</p>
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="mb-3 mail-section">
              <input
                type="text"
                className="form-control input-field"
                id="email"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 password-section">
              <div className="input-box position-relative">
                <input
                  id="password"
                  className="form-control input-field  input-with-icon"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`fa-regular ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  } password-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
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
            {/* <div className="d-flex justify-content-end mb-3 login-check-section">
              <a
                href="#"
                className="text-decoration-none text-primary login-forgot"
              >
                Forgot Password?
              </a>
            </div> */}
            <button
              type="submit"
              className="btn login-btn pb-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
