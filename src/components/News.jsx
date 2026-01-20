import { useEffect } from "react";
import Wrapper from "./Wrapper";

import { useNewsContext } from "../contexts/NewsContext";
import SkeletonCard from "./SkeletonCard";
const News = ({ search }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  // console.log(news);
  // loads data on initial render
  useEffect(() => {
    const loadNews = async () => {
      let endpoint;

      if (search === null) {
        endpoint = "/top-headlines?lang=en&country=in&max=20";
      } else {
        endpoint = `/search?q=${search}&lang=en&max=20`;
      }

      const data = await fetchNews(endpoint);
      setNews(Array.isArray(data?.articles) ? data.articles : []);
    };

    loadNews();
  }, [search]);

  if (loading) {
    return (
      <div className="row g-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!loading && news.length === 0) {
    return <p className="text-center text-muted">No results found</p>;
  }

  return (
    <Wrapper>
      <div className="container py-5">
        <div className="row g-4">
          {news.map((newsDetails, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex">
              <NewsCard details={newsDetails} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {
  // console.log(details);
  return (
    <div className="news-card d-flex flex-column p-3 rounded-4 text-light w-100">
      <div className="ratio ratio-16x9 mb-3 rounded-3 overflow-hidden bg-dark">
        {details.image && (
          <img
            src={details.image}
            alt="news"
            className="w-100 h-100 object-fit-cover"
          />
        )}
      </div>

      <h6 className="news-title mb-2 line-clamp-2">{details?.title}</h6>

      <p className="news-desc text-secondary mb-3 line-clamp-3">
        {details.description}
      </p>

      <button
        onClick={() => window.open(details.url)}
        className="btn text-white btn-outline-secondary mt-auto align-self-start"
      >
        Read more
      </button>
    </div>
  );
};

export default News;
