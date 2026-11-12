
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../Dashboard.css";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onNavigate={closeSidebar}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <main className="dashboard-main">
        <div className="mobile-dashboard-header">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>

          <span className="mobile-brand">SnapURL</span>
        </div>

        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
