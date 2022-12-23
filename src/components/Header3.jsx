import React from "react";

const Header3 = () => {
  return (
    <>
      <header className="main-header header-style-three">
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="/">
                  <img src="../images/logo.png" alt="" title="" />
                </a>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="/about">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="/services">Services</a>
                      <ul>
                        <li>
                          <a href="/services/product-engineering-services">
                            Product Engineering
                          </a>
                        </li>
                        <li>
                          <a href="/services/mobility-services">Mobility</a>
                        </li>
                        <li>
                          <a href="/services/cloud-and-devops-services">
                            Cloud & DevOps
                          </a>
                        </li>
                        <li>
                          <a href="/services/product-reengineering-services">
                            Product Re-engineering
                          </a>
                        </li>
                        <li>
                          <a href="/services/analytics-services">Analytics</a>
                        </li>
                        <li>
                          <a href="/services/testing-services">Testing</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fa fa-angle-down"></span>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="/success-stories">Success Stories</a>
                    </li>
                    <li className="dropdown has-mega-menu">
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <a href="/" title="">
                <img src="../images/logo-small.png" alt="" title="" />
              </a>
            </div>
            <div className="pull-right">
              <nav className="main-menu">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="/about">About</a>
                    </li>
                    <li className="dropdown">
                      <a href="/services">Services</a>
                      <ul>
                        <li>
                          <a href="services.html">Product Engineering</a>
                        </li>
                        <li>
                          <a href="content-marketing.html">Mobility</a>
                        </li>
                        <li>
                          <a href="social-marketing.html">Cloud & DevOps</a>
                        </li>
                        <li>
                          <a href="app-development.html">
                            Product Re-engineering
                          </a>
                        </li>
                        <li>
                          <a href="seo.html">Analytics</a>
                        </li>
                        <li>
                          <a href="web-development.html">Testing</a>
                        </li>
                      </ul>
                      <div className="dropdown-btn">
                        <span className="fa fa-angle-down"></span>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="/success-stories">Success Stories</a>
                    </li>
                    <li className="dropdown">
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-multiply"></span>
          </div>

          <nav className="menu-box mCustomScrollbar _mCS_1 mCS_no_scrollbar">
            <div
              id="mCSB_1"
              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
              tabIndex="0"
              style={{ maxHeight: "459px" }}
            >
              <div
                id="mCSB_1_container"
                className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                style={{ position: "relative", top: "0px", left: "0px" }}
                dir="ltr"
              >
                <div className="nav-logo">
                  <a href="index.html">
                    <img
                      src="images/logo-3.png"
                      alt=""
                      title=""
                      className="mCS_img_loaded"
                    />
                  </a>
                </div>
                <div className="menu-outer">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Homepage One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Homepage Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Homepage Three</a>
                          </li>
                          <li>
                            <a href="index-4.html">Homepage Four</a>
                          </li>
                          <li>
                            <a href="index-5.html">Homepage Five</a>
                          </li>
                          <li>
                            <a href="index-6.html">Homepage Six</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">Header Styles</a>
                            <ul>
                              <li>
                                <a href="index.html">Header Style One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Header Style Two</a>
                              </li>
                              <li>
                                <a href="index-3.html">Header Style Three</a>
                              </li>
                              <li>
                                <a href="index-4.html">Header Style Four</a>
                              </li>
                              <li>
                                <a href="index-5.html">Header Style Five</a>
                              </li>
                              <li>
                                <a href="index-6.html">Header Style Six</a>
                              </li>
                            </ul>
                            <div className="dropdown-btn">
                              <span className="fa fa-angle-down"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">About</a>
                        <ul>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="price.html">Price</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-detail.html">Team Detail</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="comming-soon.html">Comming Soon</a>
                          </li>
                          <li>
                            <a href="terms.html">Terms &amp; Condition</a>
                          </li>
                          <li>
                            <a href="privacy.html">Privacy &amp; Policy</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="content-marketing.html">
                              Content Marketing
                            </a>
                          </li>
                          <li>
                            <a href="social-marketing.html">Social Marketing</a>
                          </li>
                          <li>
                            <a href="app-development.html">App Development</a>
                          </li>
                          <li>
                            <a href="seo.html">SEO Optimization</a>
                          </li>
                          <li>
                            <a href="web-development.html">Web Development</a>
                          </li>
                          <li>
                            <a href="advertising.html">PPC Advertising</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Projects</a>
                        <ul>
                          <li>
                            <a href="projects.html">Projects</a>
                          </li>
                          <li>
                            <a href="projects-left-sidebar.html">
                              Projects Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="projects-right-sidebar.html">
                              Projects Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="projects-detail.html">Projects Detail</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown has-mega-menu">
                        <a href="#">Pages</a>
                        <div className="mega-menu">
                          <div className="mega-menu-bar row clearfix">
                            <div className="column col-lg-3 col-md-4 col-sm-12">
                              <h3>About Us</h3>
                              <ul>
                                <li>
                                  <a href="about.html">About Us</a>
                                </li>
                                <li>
                                  <a href="faq.html">Faq</a>
                                </li>
                                <li>
                                  <a href="price.html">Price</a>
                                </li>
                                <li>
                                  <a href="team.html">Team</a>
                                </li>
                                <li>
                                  <a href="team-detail.html">Team Detail</a>
                                </li>
                                <li>
                                  <a href="testimonial.html">Testimonial</a>
                                </li>
                                <li>
                                  <a href="comming-soon.html">Comming Soon</a>
                                </li>
                                <li>
                                  <a href="terms.html">Terms &amp; Condition</a>
                                </li>
                                <li>
                                  <a href="privacy.html">
                                    Privacy &amp; Policy
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="column col-lg-3 col-md-4 col-sm-12">
                              <h3>Services</h3>
                              <ul>
                                <li>
                                  <a href="content-marketing.html">
                                    Content Marketing
                                  </a>
                                </li>
                                <li>
                                  <a href="social-marketing.html">
                                    Social Marketing
                                  </a>
                                </li>
                                <li>
                                  <a href="app-development.html">
                                    App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="seo.html">SEO Optimization</a>
                                </li>
                                <li>
                                  <a href="web-development.html">
                                    Web Development
                                  </a>
                                </li>
                                <li>
                                  <a href="advertising.html">PPC Advertising</a>
                                </li>
                              </ul>
                            </div>
                            <div className="column col-lg-3 col-md-4 col-sm-12">
                              <h3>Blog</h3>
                              <ul>
                                <li>
                                  <a href="blog.html">Our Blog</a>
                                </li>
                                <li>
                                  <a href="blog-classic.html">Blog Classic</a>
                                </li>
                                <li>
                                  <a href="blog-left-sidebar.html">
                                    Blog Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="news-detail.html">Blog Single</a>
                                </li>
                                <li>
                                  <a href="not-found.html">Not Found</a>
                                </li>
                              </ul>
                            </div>
                            <div className="column col-lg-3 col-md-4 col-sm-12">
                              <h3>Our Shop</h3>
                              <ul>
                                <li>
                                  <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                  <a href="shop-single.html">Shop Details</a>
                                </li>
                                <li>
                                  <a href="shoping-cart.html">Cart Page</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout Page</a>
                                </li>
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Shop</a>
                        <ul>
                          <li>
                            <a href="shop.html">Our Products</a>
                          </li>
                          <li>
                            <a href="shop-single.html">Product Single</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="account.html">Account</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Our Blog</a>
                          </li>
                          <li>
                            <a href="blog-classic.html">Blog Classic</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">
                              Blog Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="news-detail.html">Blog Single</a>
                          </li>
                          <li>
                            <a href="not-found.html">Not Found</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fa fa-angle-down"></span>
                        </div>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="mCSB_1_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                style={{ display: "none" }}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_1_dragger_vertical"
                    className="mCSB_dragger"
                    style={{
                      position: "absolute",
                      minHeight: "30px",
                      height: "0px",
                      top: "0px",
                    }}
                    onContextMenu="return false"
                  >
                    <div
                      className="mCSB_dragger_bar"
                      style={{ lineHeight: "30px" }}
                    ></div>
                  </div>
                  <div className="mCSB_draggerRail"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header3;
