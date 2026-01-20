import Wrapper from "./Wrapper";

const NewsFooter = () => {
  return (
    <div className="bg-dark">
      <Wrapper>
        <footer className="news-footer text-light mt-5 d-flex ">
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              {/* Brand */}
              <div className="col-12 col-md-4">
                <h5 className="fw-bold mb-1">DailyNews</h5>
                <p className="text-secondary small mb-0">
                  Trusted news. Updated daily.
                </p>
              </div>

              {/* Links */}
              <div className="col-12 col-md-4">
                <ul className="list-unstyled d-flex gap-4 mb-0 justify-content-md-center">
                  <li>
                    <a href="#" className="news-footer-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="news-footer-link">
                      World
                    </a>
                  </li>
                  <li>
                    <a href="#" className="news-footer-link">
                      Politics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="news-footer-link">
                      Technology
                    </a>
                  </li>
                </ul>
              </div>

              {/* Copyright */}
              <div className="col-12 col-md-4 text-md-end">
                <small className="text-secondary">
                  © {new Date().getFullYear()} DailyNews
                </small>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
};

export default NewsFooter;
