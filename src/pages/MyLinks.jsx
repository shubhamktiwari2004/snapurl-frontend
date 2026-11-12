
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

function MyLinks() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  // Temporary demonstration data.
  // We will replace this with your Spring Boot API response.
  const [links] = useState([
    {
      id: 1,
      shortCode: "abc12",
      shortUrl: "http://snapurl.com:8081/abc12",
      originalUrl: "https://www.google.com/search?q=spring+boot+tutorial",
      createdAt: "Nov 12, 2026",
      clicks: 24,
    },
    {
      id: 2,
      shortCode: "xy789",
      shortUrl: "http://snapurl.com:8081/xy789",
      originalUrl: "https://github.com/",
      createdAt: "Nov 11, 2026",
      clicks: 12,
    },
    {
      id: 3,
      shortCode: "pq456",
      shortUrl: "http://snapurl.com:8081/pq456",
      originalUrl: "https://docs.spring.io/spring-boot/index.html",
      createdAt: "Nov 10, 2026",
      clicks: 8,
    },
  ]);

  const filteredLinks = links.filter((link) => {
    const matchesSearch =
      link.originalUrl.toLowerCase().includes(search.toLowerCase()) ||
      link.shortUrl.toLowerCase().includes(search.toLowerCase()) ||
      link.shortCode.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "clicked" && link.clicks > 0) ||
      (filter === "unclicked" && link.clicks === 0);

    return matchesSearch && matchesFilter;
  });

  const handleCopy = async (link) => {
    try {
      await navigator.clipboard.writeText(link.shortUrl);
      setCopiedId(link.id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      alert("Unable to copy the link. Please copy it manually.");
    }
  };

  const handleOpen = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <DashboardLayout>
      <div className="dashboard-content my-links-content">

        {/* Header */}
        <div className="my-links-header">
          <div>
            <h1>My Links</h1>
            <p>Manage and organize all your shortened URLs.</p>
          </div>

          <div className="my-links-total">
            <span>{links.length}</span>
            Total Links
          </div>
        </div>

        {/* Search and Controls */}
        <section className="links-toolbar">

          <div className="links-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search by short URL or original URL..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

          <div className="links-controls">
            <div className="filter-wrapper">
              <span>☷</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Links</option>
                <option value="clicked">Clicked</option>
                <option value="unclicked">Not Clicked</option>
              </select>
            </div>
          </div>

        </section>

        {/* Links Heading */}
        <div className="links-list-heading">
          <div>
            <h2>All Links</h2>
            <p>
              Showing {filteredLinks.length} of {links.length} links
            </p>
          </div>
        </div>

        {/* Links List */}
        <section className="links-list">

          {filteredLinks.length > 0 ? (
            filteredLinks.map((link) => (
              <article className="link-card" key={link.id}>

                <div className="link-card-main">

                  <div className="link-card-icon">
                    ↗
                  </div>

                  <div className="link-card-information">

                    <div className="short-url-row">
                      <a
                        href={link.shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-short-url"
                      >
                        {link.shortUrl}
                      </a>

                      <button
                        className="copy-link-button"
                        onClick={() => handleCopy(link)}
                        type="button"
                      >
                        {copiedId === link.id ? "✓ Copied" : "Copy"}
                      </button>
                    </div>

                    <p className="link-original-url" title={link.originalUrl}>
                      {link.originalUrl}
                    </p>

                    <div className="link-card-meta">
                      <span>
                        <span className="meta-icon">◷</span>
                        {link.createdAt}
                      </span>

                      <span>
                        <span className="meta-icon">⌁</span>
                        {link.clicks} clicks
                      </span>
                    </div>

                  </div>

                </div>

                <div className="link-card-actions">

                  <button
                    type="button"
                    className="open-link-button"
                    onClick={() => handleOpen(link.originalUrl)}
                    title="Open original URL"
                  >
                    ↗
                  </button>

                  <Link
                    to={`/links/${link.id}`}
                    className="details-link-button"
                  >
                    Details →
                  </Link>

                </div>

              </article>
            ))
          ) : (
            <div className="my-links-empty">
              <div className="empty-link-icon">↗</div>
              <h3>
                {search || filter !== "all"
                  ? "No matching links found"
                  : "No links created yet"}
              </h3>
              <p>
                {search || filter !== "all"
                  ? "Try changing your search or filter."
                  : "Your shortened URLs will appear here once you create them."}
              </p>

              {(search || filter !== "all") && (
                <button
                  className="reset-filter-button"
                  onClick={() => {
                    setSearch("");
                    setFilter("all");
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

        </section>

      </div>
    </DashboardLayout>
  );
}

export default MyLinks;
