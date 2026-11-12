import React, { useState } from "react";
import "../App.css";

function Landing() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    if (!url.trim()) {
      setError("Please enter a URL first.");
      return;
    }

    let formattedUrl = url.trim();

    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    try {
      new URL(formattedUrl);
      setError("Frontend is ready! Backend API integration is coming next.");
    } catch {
      setError("Please enter a valid URL.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      alert("Short URL copied!");
    } catch {
      setError("Unable to copy the URL.");
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">
            <svg
              viewBox="0 0 24 24"
              width="23"
              height="23"
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
        </a>

        <div className="nav-actions">
          <a href="/login" className="login-link">
            Login
          </a>

          <a href="/register" className="get-started">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            Simple. Fast. Reliable.
          </div>

          <h1>Short links. Big possibilities.</h1>

          <p className="hero-description">
            Make your long URLs short, clean and easy to share.
          </p>

          {/* URL Shortener */}
          <form className="shortener-card" onSubmit={handleShorten}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                  setShortUrl("");
                }}
                aria-label="Long URL"
              />
            </div>

            <button type="submit" className="shorten-button">
              Shorten URL
              <span>→</span>
            </button>

            {error && (
              <p className="feedback-message">{error}</p>
            )}

            {shortUrl && (
              <div className="result-box">
                <span>{shortUrl}</span>
                <button type="button" onClick={handleCopy}>
                  Copy
                </button>
              </div>
            )}
          </form>

          <p className="helper-text">
            No complicated setup. Just paste and shorten.
          </p>
        </div>

        {/* Features */}
        <section className="features">
          <div className="feature-item">
            <div className="feature-icon">
              <span>ϟ</span>
            </div>
            <h3>Fast</h3>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <span>✓</span>
            </div>
            <h3>Reliable</h3>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <span>▥</span>
            </div>
            <h3>Trackable</h3>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SnapURL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Landing;