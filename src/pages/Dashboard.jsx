import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

function Dashboard() {
  const [url, setUrl] = useState("");

  const handleShorten = (e) => {
    e.preventDefault();

    if (!url.trim()) {
      return;
    }

    alert("URL shortening API integration will be added next.");
  };

  return (
    <DashboardLayout>
      <div className="dashboard-content">

        {/* Page Heading */}
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's an overview of your SnapURL activity.</p>
          </div>

          <div className="dashboard-date">
            <span>◷</span>
            Your workspace
          </div>
        </div>

        {/* Statistics */}
        <section className="dashboard-stats">

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-label">Total Links</span>
              <span className="stat-icon green">↗</span>
            </div>

            <h2>--</h2>
            <p>Your shortened URLs</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-label">Total Clicks</span>
              <span className="stat-icon blue">⌁</span>
            </div>

            <h2>--</h2>
            <p>Total link visits</p>
          </div>

        </section>

        {/* Quick Shorten */}
        <section className="quick-shorten-section">

          <div className="section-heading">
            <div>
              <h2>Shorten a URL</h2>
              <p>Turn your long URL into a short, shareable link.</p>
            </div>

            <span className="quick-shorten-badge">Quick Action</span>
          </div>

          <form className="quick-shorten-form" onSubmit={handleShorten}>
            <div className="url-input-wrapper">
              <span className="url-input-icon">↗</span>

              <input
                type="url"
                placeholder="Paste your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="shorten-button">
              Shorten URL
              <span>→</span>
            </button>
          </form>

          <p className="quick-shorten-hint">
            Simple, fast and easy to share.
          </p>

        </section>

        {/* Recent Links */}
        <section className="recent-links-section">

          <div className="section-heading">
            <div>
              <h2>Recent Links</h2>
              <p>Your recently created shortened URLs.</p>
            </div>

            <Link to="/links" className="view-all-link">
              View all links →
            </Link>
          </div>

          <div className="recent-links-empty">

            <div className="empty-link-icon">↗</div>

            <h3>No links created yet</h3>

            <p>
              Your recently shortened URLs will appear here.
              Create your first short link to get started.
            </p>

          </div>

        </section>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;