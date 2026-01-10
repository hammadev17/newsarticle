import React from "react";
import "../styles/TopMenu.css";

const SideDrawer = ({ open, onClose }) => {
  return (
    <>
      <div
        className={`drawer-overlay ${open ? "open" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`side-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          ×
        </button>
        <ul className="drawer-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/category">Categories</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideDrawer;
