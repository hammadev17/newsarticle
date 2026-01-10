import React from "react";
import AdTop from "../components/AdTop";
import AdLeft from "../components/AdLeft";
import AdRight from "../components/AdRight";
import AdBottom from "../components/AdBottom";
import ArticleContent from "../components/ArticleContent"; // <--- added import
import "../styles/ArticlePage.css";

const ArticlePage = () => {
  return (
    <div className="article-page">
      <AdTop />
      <div className="main-row">
        <AdLeft />
        <ArticleContent />
        <AdRight />
      </div>
      <AdBottom />
    </div>
  );
};

export default ArticlePage;
