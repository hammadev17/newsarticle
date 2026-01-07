import React from "react";

const AdRight = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const fixAd = () => {
      if (!containerRef.current) return;
      const ins = containerRef.current.querySelector("ins.adsbygoogle");
      const iframe = containerRef.current.querySelector("iframe");
      [ins, iframe].forEach((el) => {
        if (!el) return;
        el.style.setProperty("height", "600px", "important");
        el.style.setProperty("max-height", "600px", "important");
        el.style.setProperty("display", "block", "important");
        el.removeAttribute("height");
      });
    };

    fixAd();
    const mo = new MutationObserver(fixAd);
    if (containerRef.current)
      mo.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    return () => mo.disconnect();
  }, []);

  return (
    <aside
      ref={containerRef}
      className="ad-right"
      style={{ boxSizing: "border-box" }}
    >
      <div
        style={{
          width: "100%",
          height: 600,
          minHeight: 600,
          boxSizing: "border-box",
          borderRadius: 4,
          background: "#bf3b32",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6774309999174226"
          data-ad-slot="REPLACE_WITH_YOUR_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="false"
        />
      </div>
    </aside>
  );
};

export default AdRight;
