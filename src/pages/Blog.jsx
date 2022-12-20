import React from "react";

const Blog = () => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/background/pattern-16.png)" }}
      >
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: "url(images/main-slider/pattern-1.png)" }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: "url(images/background/pattern-17.png)" }}
        ></div>
        <div
          className="pattern-layer-three"
          style={{ backgroundImage: "url(images/background/pattern-18.png)" }}
        ></div>
        <div
          className="pattern-layer-four"
          style={{ backgroundImage: "url(images/icons/cross-icon.png)" }}
        ></div>
        <div className="auto-container">
          <h2>Blog</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>Blogs</li>
          </ul>
        </div>
      </section>

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar sticky-top">
                <div className="sidebar-widget search-box">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        value=""
                        placeholder="Search Here"
                        required
                      />
                      <button type="submit">
                        <span className="icon fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="sidebar-widget categories-widget">
                  <div className="sidebar-title">
                    <h4>Categories</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="blog-cat">
                      <li>
                        <a href="#">
                          Content Marketing <span>( 01 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Social Marketing <span>( 25 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          App Development <span>( 66 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          SEO Optimization <span>( 12 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Web Development <span>( 11 )</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          PPC Advertising <span>( 02 )</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div className="widget-content">
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-1.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div className="text">
                        <a href="news-detail.html">
                          Google now disregards overlooks all links.
                        </a>
                      </div>
                      <div className="post-info">November 21, 2021</div>
                    </article>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-2.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div className="text">
                        <a href="news-detail.html">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </div>
                      <div className="post-info">November 28, 2021</div>
                    </article>
                    <article className="post">
                      <figure className="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div className="text">
                        <a href="news-detail.html">
                          A Guide to Google SEO <br /> Algorithm Updates
                        </a>
                      </div>
                      <div className="post-info">December 04, 2021</div>
                    </article>
                  </div>
                </div>

                <div className="sidebar-widget author-widget">
                  <div
                    className="widget-content"
                    style={{
                      backgroundImage: "url(images/background/author-bg.jpg)",
                    }}
                  >
                    <div className="image">
                      <img src="images/resource/author-7.jpg" alt="" />
                    </div>
                    <div className="name">Pablo Villalpando</div>
                    <div className="text">
                      I got lucky because I never gave up the search. Are you
                      quitting too soon? Or, are you willing to pursue luck with
                      a vengeance?
                    </div>
                    <ul className="social-box">
                      <li>
                        <a href="#" className="fab fa-facebook-f"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-linkedin-in"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-twitter"></a>
                      </li>
                      <li>
                        <a href="#" className="fab fa-google"></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget instagram-widget">
                  <div className="sidebar-title">
                    <h4>Instagram</h4>
                  </div>
                  <div className="widget-content">
                    <div className="clearfix">
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-1.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-2.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-3.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-4.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-5.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <figure className="post-thumb">
                        <img src="images/resource/instagram-6.jpg" alt="" />
                        <a href="news-detail.html" className="overlay-box">
                          <span className="icon fa fa-link"></span>
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget popular-tags">
                  <div className="sidebar-title">
                    <h4>Tags</h4>
                  </div>
                  <div className="widget-content">
                    <a href="#">Business</a>
                    <a href="#">Marketing</a>
                    <a href="#">SEO</a>
                    <a href="#">SEO</a>
                    <a href="#">SMM</a>
                    <a href="#">Solution</a>
                    <a href="#">Tips</a>
                    <a href="#">Startup</a>
                    <a href="#">Strategy</a>
                  </div>
                </div>
              </aside>
            </div>

            <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-1.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Google now disregards or overlooks all reciprocal
                          links
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-2.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Absolute Links vs. Relative Links – SEO Intrinsic
                          Value
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-3.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-1.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Google now disregards or overlooks all reciprocal
                          links
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-2.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Absolute Links vs. Relative Links – SEO Intrinsic
                          Value
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-3.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-1.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Google now disregards or overlooks all reciprocal
                          links
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-2.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Absolute Links vs. Relative Links – SEO Intrinsic
                          Value
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-3.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-1.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Google now disregards or overlooks all reciprocal
                          links
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-2.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          Absolute Links vs. Relative Links – SEO Intrinsic
                          Value
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="news-block col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="images/resource/news-3.jpg" alt="" />
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="news-detail.html"
                              className="icon flaticon-unlink"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-user"></span> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="news-detail.html">
                            <span className="icon fa fa-calendar"></span>{" "}
                            November 21, 2021
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="news-detail.html">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="styled-pagination text-center">
                <ul className="clearfix">
                  <li className="prev">
                    <a href="#">
                      <span className="fa fa-angle-left"></span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li className="active">
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">03</a>
                  </li>
                  <li className="next">
                    <a href="#">
                      <span className="fa fa-angle-right"></span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
