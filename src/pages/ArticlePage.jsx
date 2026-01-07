import React from "react";
import AdTop from "../components/AdTop";
import AdLeft from "../components/AdLeft";
import AdRight from "../components/AdRight";
import AdBottom from "../components/AdBottom";
import "../styles/ArticlePage.css";

const ArticlePage = () => {
  return (
    <div className="article-page">
      <AdTop />
      <div className="main-row">
        <AdLeft />
        <main className="content">
          <h1>News Article Title</h1>
          <p>
            This is the content of the news article. It provides information
            about current events, updates, and other relevant news topics. The
            article can be as long as necessary to convey the information
            effectively.
          </p>
          <p>
            Additional paragraphs keep the content area centered while the ads
            stay around the edges (top, left, right, bottom).
          </p>
          <p>
            Additional paragraphs keep the content area centered while the ads
            stay around the edges (top, left, right, bottom).
          </p>
        </main>
        <AdRight />
      </div>
      <AdBottom />
    </div>
  );
};

export default ArticlePage;
