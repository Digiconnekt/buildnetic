import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header header-style-two">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="top-left pull-left">
                <div className="text">Welcome to Best IT Company Solution.</div>
              </div>

              <div className="top-right pull-right">
                <ul className="info-list">
                  <li>
                    <span className="icon flaticon-maps-and-flags"></span> 16122
                    Collins Street West, Melbourne
                  </li>
                  <li>
                    <span className="icon flaticon-big-envelope"></span>
                    <a href="mailto:Merix_itcompany@gmail.com">
                      {" "}
                      Merix_itcompany@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <NavLink to="/">
                  <img src="images/logo-2.png" alt="" title="" />
                </NavLink>
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
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="dropdown">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="dropdown">
                      <NavLink to="/services">Services</NavLink>
                      <ul>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="content-marketing.html">Content Marketing</a>
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
                    </li>
                    <li className="dropdown">
                      <NavLink to="/">Success Stories</NavLink>
                    </li>
                    <li className="dropdown">
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="outer-box clearfix">
                <div className="cart-box">
                  <div className="dropdown">
                    <button
                      className="cart-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="flaticon-cart"></span>
                      <span className="total-cart">2</span>
                    </button>
                    <div
                      className="dropdown-menu pull-right cart-panel"
                      aria-labelledby="dropdownMenu1"
                    >
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <span className="icon fa fa-remove"></span>
                          </div>
                          <div className="image">
                            <img
                              src="images/resource/post-thumb-1.jpg"
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="shop-single.html">Product 01</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <span className="icon fa fa-remove"></span>
                          </div>
                          <div className="image">
                            <img
                              src="images/resource/post-thumb-2.jpg"
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="shop-single.html">Product 02</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-total">
                        Sub Total: <span>$198</span>
                      </div>
                      <ul className="btns-boxed">
                        <li>
                          <a href="shoping-cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">CheckOut</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="search-box-btn search-box-outer">
                  <span className="icon fa fa-search"></span>
                </div>

                <div className="btn-box">
                  <a href="contact.html" className="theme-btn btn-style-one">
                    <span className="txt">Get A Quote</span>
                  </a>
                </div>

                <div className="nav-btn navSidebar-button">
                  <span className="icon flaticon-menu"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <a href="index.html" title="">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>
            <div className="pull-right">
              <nav className="main-menu"></nav>

              <div className="outer-box clearfix">
                <div className="cart-box">
                  <div className="dropdown">
                    <button
                      className="cart-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="flaticon-cart"></span>
                      <span className="total-cart">2</span>
                    </button>
                    <div
                      className="dropdown-menu pull-right cart-panel"
                      aria-labelledby="dropdownMenu1"
                    >
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <span className="icon fa fa-remove"></span>
                          </div>
                          <div className="image">
                            <img
                              src="images/resource/post-thumb-1.jpg"
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="shop-single.html">Product 01</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <span className="icon fa fa-remove"></span>
                          </div>
                          <div className="image">
                            <img
                              src="images/resource/post-thumb-2.jpg"
                              alt=""
                            />
                          </div>
                          <h3>
                            <a href="shop-single.html">Product 02</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-total">
                        Sub Total: <span>$198</span>
                      </div>
                      <ul className="btns-boxed">
                        <li>
                          <a href="shoping-cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">CheckOut</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="search-box-btn search-box-outer">
                  <span className="icon fa fa-search"></span>
                </div>

                <div className="btn-box">
                  <a href="contact.html" className="theme-btn btn-style-two">
                    <span className="txt">Get A Quote</span>
                  </a>
                </div>

                <div className="nav-btn navSidebar-button">
                  <span className="icon flaticon-menu"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-multiply"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/logo-3.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer"></div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
