
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside
      className={`dashboard-sidebar ${isOpen ? "sidebar-open" : ""}`}
    >
      <div className="sidebar-brand">
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
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </span>
        <span>SnapURL</span>
      </div>

      <div className="sidebar-workspace">
        <div className="workspace-avatar">S</div>
        <div>
          <h4>My Workspace</h4>
          <p>Personal Account</p>
        </div>
      </div>

      <nav className="sidebar-navigation">
        <NavLink
          to="/dashboard"
          onClick={onNavigate}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">▦</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/links"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">↗</span>
          My Links
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-user-avatar">ST</div>

        <div className="sidebar-user-info">
          <h4>My Account</h4>
          <p>SnapURL User</p>
        </div>

        <span className="sidebar-user-menu">⋯</span>
      </div>
    </aside>
  );
}

export default Sidebar;
