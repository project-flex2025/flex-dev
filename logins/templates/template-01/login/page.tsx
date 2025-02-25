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
              <div className="login-left-section elevated-box">
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
                        id="username"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setUsername(e.target.value)
                        }
                        type="text"
                        className="form-control input-box"
                        placeholder="Enter your username"
                        required
                        value={username}
                      />
                    </div>

                    <div className="mb-3 text-start password-section">
                      <label className="form-label">Password</label>
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
                          className="form-check-input"
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

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-login text-center mt-4 w-100"
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
