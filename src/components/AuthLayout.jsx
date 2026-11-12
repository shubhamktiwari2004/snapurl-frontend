
import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

function AuthLayout({ children, subtitle }) {
  return (
    <div className="auth-page">

      <nav className="auth-navbar">
        <Link to="/" className="auth-brand">
          <span className="auth-brand-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </span>

          <span>SnapURL</span>
        </Link>

        <Link to="/" className="back-home">
          <span>←</span> Back to home
        </Link>
      </nav>

      <main className="auth-main">

        <div className="auth-heading">
          <div className="auth-badge">
            <span className="auth-dot"></span>
            Simple. Fast. Reliable.
          </div>

          <h1>{subtitle}</h1>
        </div>

        {children}

        <p className="auth-footer-text">
          © {new Date().getFullYear()} SnapURL. All rights reserved.
        </p>

      </main>
    </div>
  );
}

export default AuthLayout;
