import React from "react";
import data from "@/data.json";
import ArticleCard from "@/app/components/ArticleCard";

const Articles = () => {
  return (
    <div className="flex flex-col justify-center gap-14 bg-neutral-veryLightGray px-10 py-10 lg:h-[655px] lg:px-36 lg:py-0">
      <h1 className="text-4xl text-neutral-grayishBlue">Latest Articles</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {data.articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
