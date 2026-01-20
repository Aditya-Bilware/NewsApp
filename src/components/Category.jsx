import Wrapper from "./Wrapper";
import { useNewsContext } from "../contexts/NewsContext";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  const [selCategory, setSelCategory] = useState("");

  const categories = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  useEffect(() => {
    if (!selCategory) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const loadNews = async () => {
      const data = await fetchNews(`/search?q=${selCategory}&lang=en&max=20`);

      setNews(data.articles);
    };

    loadNews();
  }, [selCategory]);

  return (
    <div className={`${className} bg-base`}>
      <Wrapper>
        <div
          className={`d-flex justify-content-center overflow-auto px-4 gap-5 no-scrollbar `}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="btn btn-primary mt-3"
              onClick={() => setSelCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
