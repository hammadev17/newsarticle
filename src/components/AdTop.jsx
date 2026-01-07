import React from "react";

const AdTop = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const selector = "ins.adsbygoogle, iframe";

    const applyFixedHeight = (el) => {
      if (!el) return;
      // set inline styles with !important so they beat existing element.style values
      el.style.setProperty("height", "100px", "important"); // change 100px to desired fixed height
      el.style.setProperty("max-height", "100px", "important");
      el.style.setProperty("display", "block", "important");
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
    return () => mo.disconnect();
  }, []);

  return (
    <div
      className="ad-top"
      ref={containerRef}
      style={{
        background: "#b2c714ff",
        overflow: "hidden",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6774309999174226"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        aria-hidden="true"
      ></ins>
    </div>
  );
};

export default AdTop;
