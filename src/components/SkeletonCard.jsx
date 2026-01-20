import "./Skeleton.css";

const NewsSkeletonCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex">
      {" "}
      {/* col-12 col-sm-6 col-lg-4 d-flex */}
      <div className="news-card d-flex flex-column p-3 rounded-4 w-100">
        {/* Image skeleton */}
        <div className="ratio ratio-16x9 mb-3 rounded-3 skeleton"></div>

        {/* Title skeleton (2 lines) */}
        <div className="skeleton skeleton-title mb-2"></div>
        <div className="skeleton skeleton-title w-75 mb-3"></div>

        {/* Description skeleton (3 lines) */}
        <div className="skeleton skeleton-text mb-2"></div>
        <div className="skeleton skeleton-text mb-2"></div>
        <div className="skeleton skeleton-text w-50 mb-3"></div>

        {/* Button skeleton */}
        <div className="skeleton skeleton-button mt-auto"></div>
      </div>
    </div>
  );
};

export default NewsSkeletonCard;
