import React from "react";

const AdBottom = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const selector = "ins.adsbygoogle, iframe";

    const applyFixedHeight = (el) => {
      if (!el) return;
      el.style.setProperty("height", "100px", "important"); // desired fixed height
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
      className="ad-bottom"
      ref={containerRef}
      style={{
        background: "#356aa8ff",
        overflow: "hidden",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        aria-hidden="true"
      ></ins>
    </div>
  );
};

export default AdBottom;
