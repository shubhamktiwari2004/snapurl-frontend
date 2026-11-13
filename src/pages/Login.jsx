
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { loginUser } from "../api/authService";
import "../Auth.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(email.trim(), password);

      if (!response?.token || !response?.user) {
        throw new Error("Invalid response received from server.");
      }

      // Clear any previous authentication
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");

      // Store authentication based on Remember Me
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("token", response.token);
      storage.setItem("user", JSON.stringify(response.user));

      // Redirect to dashboard
      navigate("/dashboard");

    }  catch (error) {
      setMessage(
          error.message === "Request failed: 401"
              ? "Invalid email or password. Please try again."
              : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout subtitle="Welcome back!">

      <div className="auth-card">

        <div className="auth-card-heading">
          <h2>Login to your account</h2>
          <p>Enter your credentials to access SnapURL.</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">

          <div className="form-group">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>

              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setMessage("");
                }}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <label className="remember-option">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          {message && (
            <div className="auth-message" role="alert">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login to SnapURL"}
            {!loading && <span>→</span>}
          </button>

        </form>

        <div className="auth-divider">
          <span>New to SnapURL?</span>
        </div>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Create an account</Link>
        </p>

      </div>

      <div className="auth-trust">
        <span>✓</span>
        Your links, simplified.
      </div>

    </AuthLayout>
  );
}

export default Login;
