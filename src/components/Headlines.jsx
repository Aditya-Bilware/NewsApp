import { useState } from "react";
import { VscBellDot } from "react-icons/vsc";
import "./Headlines.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useNewsContext } from "../contexts/NewsContext";

const Headlines = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { news, setNews, fetchNews } = useNewsContext();

  const handleClick = async () => {
    setOpen(true);

    const data = await fetchNews("/top-headlines?lang=en&country=in&max=10");

    // console.log(data.articles);
    setNews(data.articles);
  };

  return (
    <>
      {/* Notification Button */}
      <button
        type="button"
        className="btn btn-outline-secondary notification-btn"
        onClick={handleClick}
        aria-label="Notifications"
      >
        <VscBellDot />
      </button>

      {/* Overlay */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar Panel */}
      <div className={`news-sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-white">Top Headllines</h5>
          <NavLink
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setOpen(false)}
          >
            ✕
          </NavLink>
        </div>

        {/* Empty content area */}
        <div className="sidebar-body flex-grow-1 overflow-auto p-3 bg-dark">
          {news.map((heading, index) => (
            <a
              key={index}
              href={heading.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light text-decoration-none
             bg-secondary bg-opacity-25 p-2 mb-2 d-block rounded small"
            >
              {heading.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Headlines;
