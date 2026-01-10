import React from "react";
import "../styles/TopMenu.css";

const TopMenu = ({ onMenuClick }) => {
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const ticking = React.useRef(false);
  const THRESHOLD = 10;

  React.useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        // ignore tiny moves
        if (Math.abs(y - lastY.current) > THRESHOLD) {
          // hide when scrolling down past 100px, show when scrolling up
          if (y > lastY.current && y > 100) setHidden(true);
          else setHidden(false);
          lastY.current = y;
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`top-menu ${hidden ? "hidden" : ""}`}>
      <button className="menu-btn" onClick={onMenuClick} aria-label="Open menu">
        ☰
      </button>

      <nav className="top-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default TopMenu;
