import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "../modules/news";
import Category from "../components/Category";
import NewsPage from "../components/NewsPage";
import "../components/news.scss";
const NewsContainer = ({ match, news, categories, loading, getNews }) => {

  useEffect(() => {
    const category = match.params.category || "all";
    getNews(category);
  }, [match]);

  return (
    <div className="base">
      <Category categories={categories} />
      <NewsPage news={news} loading={loading} />
    </div>
  );
};

export default connect(
  ({ news }) => ({
    news: news.news,
    categories: news.categories,
    loading: news.loading,
  }),
  { getNews }
)(NewsContainer);
