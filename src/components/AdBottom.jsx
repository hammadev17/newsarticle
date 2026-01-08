import React from "react";

const AdBottom = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const selector = "ins.adsbygoogle, iframe";

    const applyFixedHeight = (el) => {
      if (!el) return;
      // ensure the ad element reserves enough space for Adsense to render
      el.style.setProperty("display", "block", "important");
      el.style.setProperty("width", "100%", "important");
      el.style.setProperty("min-height", "90px", "important"); // adjust if you need taller ad
      el.style.setProperty("height", "auto", "important");
      el.removeAttribute("height");
    };

    const fixAll = () => {
      if (!containerRef.current) return;
      const found = containerRef.current.querySelectorAll(selector);
      found.forEach((el) => applyFixedHeight(el));
    };

    fixAll();
    const mo = new MutationObserver(fixAll);
    if (containerRef.current)
      mo.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });

    // Insert AdSense script if not present and push the ad slot
    const adsScriptSelector =
      'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';
    if (!document.querySelector(adsScriptSelector)) {
      const s = document.createElement("script");
      s.async = true;
      s.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6774309999174226";
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
      s.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          /* ignore push errors */
        }
      };
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        /* ignore push errors */
      }
    }

    return () => mo.disconnect();
  }, []);

  return (
    <div
      className="ad-bottom"
      ref={containerRef}
      style={{
        background: "#b2c714ff",
        overflow: "hidden",
        minHeight: "90px", // ensure container itself reserves space
        width: "100%",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: "90px" }}
        data-ad-client="ca-pub-6774309999174226"
        data-ad-slot="2149232098"
        data-ad-format="auto"
        data-full-width-responsive="true"
        aria-hidden="true"
      ></ins>
    </div>
  );
};

export default AdBottom;
