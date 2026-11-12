
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import "../Auth.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setMessage("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage(
      "Registration form is ready. Backend integration is pending."
    );
  };

  return (
    <AuthLayout subtitle="Create your account">

      <div className="auth-card register-card">

        <div className="auth-card-heading">
          <h2>Get started with SnapURL</h2>
          <p>Create an account and start shortening your links.</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">

          <div className="form-group">
            <label htmlFor="fullName">Full name</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerEmail">Email address</label>

            <input
              id="registerEmail"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>

            <div className="password-input-wrapper">
              <input
                id="registerPassword"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                autoComplete="new-password"
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

            <span className="input-hint">
              Use at least 8 characters.
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>

            <div className="password-input-wrapper">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {message && (
            <div className="auth-message">{message}</div>
          )}

          <button type="submit" className="auth-submit">
            Create Account
            <span>→</span>
          </button>

        </form>

        <div className="auth-divider">
          <span>Already a member?</span>
        </div>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login instead</Link>
        </p>

      </div>

      <div className="auth-trust">
        <span>✓</span>
        Simple. Fast. Reliable.
      </div>

    </AuthLayout>
  );
}

export default Register;
