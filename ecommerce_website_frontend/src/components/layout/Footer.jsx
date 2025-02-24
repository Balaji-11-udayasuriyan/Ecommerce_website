import React from "react";

const Footer = () => {
  return (
    <footer className="main">
      <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>
                  <p className="mb-45">
                    Start Your Daily Shopping with{" "}
                    <span className="text-brand">Nest Mart</span>
                  </p>
                  <form className="form-subcriber d-flex">
                    <input type="email" placeholder="Your email address" />
                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <img src="frontend/imgs/banner/banner-9.png" alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-1.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Best prices & offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-2.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Free delivery</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-3.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-4.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-5.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp">
                <div className="banner-icon">
                  <img src="frontend/imgs/theme/icons/icon-6.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding footer-mid">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp">
                <div className="logo mb-30">
                  <a href="index.html" className="mb-15">
                    <img src="frontend/imgs/theme/logo.svg" alt="logo" />
                  </a>
                  <p className="font-lg text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul className="contact-infor">
                  <li>
                    <img
                      src="frontend/imgs/theme/icons/icon-location.svg"
                      alt=""
                    />
                    <strong>Address: </strong>{" "}
                    <span>
                      5171 W Campbell Ave undefined Kent, Utah 53127 United
                      States
                    </span>
                  </li>
                  <li>
                    <img
                      src="frontend/imgs/theme/icons/icon-contact.svg"
                      alt=""
                    />
                    <strong>Call Us:</strong>
                    <span>(+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <img
                      src="frontend/imgs/theme/icons/icon-email-2.svg"
                      alt=""
                    />
                    <strong>Email:</strong>
                    <span>sale@Nest.com</span>
                  </li>
                  <li>
                    <img
                      src="frontend/imgs/theme/icons/icon-clock.svg"
                      alt=""
                    />
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-link-widget col wow animate__animated animate__fadeInUp">
              <h4 className="widget-title">Company</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__animated animate__fadeInUp">
              <h4 className="widget-title">Account</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help Ticket</a>
                </li>
                <li>
                  <a href="#">Shipping Details</a>
                </li>
                <li>
                  <a href="#">Compare products</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__animated animate__fadeInUp">
              <h4 className="widget-title">Corporate</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Become a Vendor</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Farm Business</a>
                </li>
                <li>
                  <a href="#">Farm Careers</a>
                </li>
                <li>
                  <a href="#">Our Suppliers</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Promotions</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col wow animate__animated animate__fadeInUp">
              <h4 className="widget-title">Popular</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <a href="#">Milk & Flavoured Milk</a>
                </li>
                <li>
                  <a href="#">Butter and Margarine</a>
                </li>
                <li>
                  <a href="#">Eggs Substitutes</a>
                </li>
                <li>
                  <a href="#">Marmalades</a>
                </li>
                <li>
                  <a href="#">Sour Cream and Dips</a>
                </li>
                <li>
                  <a href="#">Tea & Kombucha</a>
                </li>
                <li>
                  <a href="#">Cheese</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;