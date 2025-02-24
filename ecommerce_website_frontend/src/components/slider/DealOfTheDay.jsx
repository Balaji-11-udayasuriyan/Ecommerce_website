import React from "react";

const DealOfTheDay = () => {
  return (
    <section className="section-padding pb-5">
      <div className="container">
        <div className="section-title wow animate__animated animate__fadeIn" data-wow-delay="0">
          <h3>Deals Of The Day</h3>
          <a className="show-all" href="shop-grid-right.html">
            All Deals <i className="fi-rs-angle-right"></i>
          </a>
        </div>
        <div className="row">
          {/* Product 1 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay="0">
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="frontend/imgs/banner/banner-5.png" alt="Product 1" />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"></div>
                </div>
                <div className="deals-content">
                  <h2>
                    <a href="shop-product-right.html">
                      Seeds of Change Organic Quinoa, Brown, & Red Rice
                    </a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-small ml-5 text-muted">(4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">NestFood</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5"></i>Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other products */}

          {/* Product 2 */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
              <div className="product-img-action-wrap">
                <div className="product-img">
                  <a href="shop-product-right.html">
                    <img src="frontend/imgs/banner/banner-6.png" alt="Product 2" />
                  </a>
                </div>
              </div>
              <div className="product-content-wrap">
                <div className="deals-countdown-wrap">
                  <div className="deals-countdown" data-countdown="2026/04/25 00:00:00"></div>
                </div>
                <div className="deals-content">
                  <h2>
                    <a href="shop-product-right.html">Perdue Simply Smart Organics Gluten Free</a>
                  </h2>
                  <div className="product-rate-cover">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-small ml-5 text-muted">(4.0)</span>
                  </div>
                  <div>
                    <span className="font-small text-muted">
                      By <a href="vendor-details-1.html">Old El Paso</a>
                    </span>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price">
                      <span>$24.85</span>
                      <span className="old-price">$26.8</span>
                    </div>
                    <div className="add-cart">
                      <a className="add" href="shop-cart.html">
                        <i className="fi-rs-shopping-cart mr-5"></i>Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more products similarly */}
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
