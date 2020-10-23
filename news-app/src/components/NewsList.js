import React from "react";
import NewsItem from "./NewsItem";

//샘플데이터
const sampleArticle = {
  title: "제목입니다.",
  description: "내용입니다.",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  return (
    <div className="NewsList">
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </div>
  );
};

export default NewsList;
