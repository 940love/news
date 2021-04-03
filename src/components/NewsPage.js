import React from "react";
import "./news.scss";

const NewsPage = ({ news, loading }) => {
  return (
    <>
      {loading && <div className="loading">loading...</div>}
      <ul>
        {!loading &&
          news &&
          news.map((article) => (
            <div className="newsItem" key={article.url}>
                <div className="thumbnail">
                {article.urlToImage && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={article.urlToImage} alt="thumbnail" />
                  </a>
                  )}
                </div>
              <div className="contents">
                <strong className="title">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </strong>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
};
export default NewsPage;
