import React from "react";
import Title from "../components/Title";

const About = () => {
  return (
    <>
      {/* title start */}
      <Title title="About Us" />
      {/* title end */}

      {/* why us start */}
      <section className="services-section-three style-two">
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: "url(images/icons/icon-8.png)" }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
        ></div>
        <div
          className="pattern-layer-three"
          style={{ backgroundImage: "url(images/icons/icon-10.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="row clearfix">
                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-badge"></span>
                      </div>
                      <h5>
                        <a href="content-marketing.html">
                          Specialist Of Scalable Apps
                        </a>
                      </h5>
                      <div className="text">
                        Managed 500,000 concurrent users.
                      </div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="150ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-chat-3"></span>
                      </div>
                      <h5>
                        <a href="content-marketing.html">
                          Your Journey Partner
                        </a>
                      </h5>
                      <div className="text">
                        Help build technology & businesses.
                      </div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-growth"></span>
                      </div>
                      <h5>
                        <a href="content-marketing.html">Deliver On Time</a>
                      </h5>
                      <div className="text">We promise. We deliver.</div>
                    </div>
                  </div>

                  <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="150ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="icon-box">
                        <span className="icon flaticon-management"></span>
                      </div>
                      <h5>
                        <a href="content-marketing.html">Humanize Designs</a>
                      </h5>
                      <div className="text">
                        Focus on user acquisition and retention.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">WHY US CHOOSE NOW</div>
                  <h2>
                    We Provide the Best <br /> Facilites For Business
                  </h2>
                </div>
                <div className="bold-text">
                  From keyword research to technical auditing to site migration,
                  our team of technical SEOs are true experts in their field.
                </div>
                <ul className="list-style-three">
                  <li>We've been supporting WordPress since the beginning.</li>
                  <li>
                    Perfect for large sites or agencies managing multiple
                    clients.
                  </li>
                  <li>Our easy-to-use control panel and API let you spend</li>
                </ul>
                <a href="contact.html" className="theme-btn btn-style-five">
                  <span className="txt">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why us end */}

      {/* counter start */}
      <section className="counter-section-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="fact-counter-two">
              <div className="row clearfix">
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-in-love"></div>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="2500"
                          data-stop="230"
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">ACTIVE CLIENTS</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-mentor"></div>
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="95"
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">TEAM ADVISORS</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-target"></div>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="4000"
                          data-stop="820"
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">PROJECTS DONE</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="900ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon flaticon-united"></div>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="25"
                        >
                          0
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">GLORIOUS YEARS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter end */}

      {/* who we are start */}
      <section className="mission-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div
                  className="image wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img src="images/resource/mission.png" alt="" />
                </div>
              </div>
            </div>

            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">WHO WE ARE</div>
                  <h2>
                    To Change Your View For <br /> SEO Our Mission
                  </h2>
                </div>
                <div className="bold-text">
                  In 2016, we started OneAD - a gaming platform. In the very
                  first month, we got more than half a million registered users.
                  It was assured that we were moving in the right direction. In
                  due course, we started to realize that with a growing user
                  base, users’ expectations were also growing. We were a small
                  team of 12 guys, who stuck together and rose to the occasion,
                  and kept delivering.
                </div>
                <ul className="mission-list">
                  <li>
                    <span className="icon">
                      <img src="images/icons/mission-1.png" alt="" />
                    </span>
                    If Google can’t crawl your site, it’s not going to rank –
                    but that doesn’t mean avoiding Javascript.
                  </li>
                  <li>
                    <span className="icon">
                      <img src="images/icons/mission-2.png" alt="" />
                    </span>
                    For businesses which sell products online & and improve
                    their product listings in the search results..
                  </li>
                  <li>
                    <span className="icon">
                      <img src="images/icons/mission-3.png" alt="" />
                    </span>
                    If you’re investing in a new website it’s important to
                    ensure it’s built to succeed in the search results too.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* who we are end */}

      {/* news letter start */}
      <section
        className="steps-section"
        style={{ backgroundImage: "url(images/background/pattern-14.png)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt data-tilt-max="3">
                  <img src="images/resource/newsletter.png" alt="" />
                </div>
              </div>
            </div>

            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Newsletter</div>
                  <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit donec
                  tempus pellentesque dui vel tristique purus justo{" "}
                </div>
                <div className="newsletter-form">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Enter Your Email"
                        required=""
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-three"
                      >
                        <span className="txt">Subscribe Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news letter end */}

      {/* our team start */}
      <section className="team-page-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="sec-title">
              <div className="title">Team</div>
              <h2>Our Team</h2>
            </div>
            <div className="team-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/team-6.jpg" alt="" />
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
                <div className="lower-content">
                  <div className="content">
                    <h4>
                      <a href="team-detail.html">Gina Bano</a>
                    </h4>
                    <div className="designation">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/team-7.jpg" alt="" />
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
                <div className="lower-content">
                  <div className="content">
                    <h4>
                      <a href="team-detail.html">Gina Bano</a>
                    </h4>
                    <div className="designation">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-block style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/team-8.jpg" alt="" />
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
                <div className="lower-content">
                  <div className="content">
                    <h4>
                      <a href="team-detail.html">Gina Bano</a>
                    </h4>
                    <div className="designation">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our team end */}

      {/* FAQ start */}
      <section className="faq-page-section pt-2">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Some Faq’s</div>
            <h2>Work with a Dedicated SEO Company</h2>
            <div className="text">
              Our approach to SEO is uniquely built around what we know
              works…and what we know <br /> doesn’t work. With over 200 verified
              factors in play.
            </div>
          </div>
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                <li className="accordion block">
                  <div className="acc-btn">
                    Best Practices for Keyword Density?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    Best SEO Practices for Page Layouts?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block active-block">
                  <div className="acc-btn active">
                    What is off page SEO link building?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content current">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    Best SEO Practices for High Quality Content?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="accordion-box">
                <li className="accordion block">
                  <div className="acc-btn">
                    What is domain authority?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    Which SEO techniques are popular?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    What is broken link building?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    Are SEO meta tags important?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    How do I conduct keyword research?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>

                <li className="accordion block">
                  <div className="acc-btn">
                    Where do I start my SEO strategy?{" "}
                    <div className="icon flaticon-right-arrow-1"></div>
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ end */}

      {/* FAQ your ques start */}
      <section className="faq-form-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Your Quesiton</div>
                  <h2>Tell Us Any Question</h2>
                  <div className="text">
                    We provide best service for our customer check the list now.
                  </div>
                </div>

                <div className="faq-form">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        value=""
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value=""
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="theme-btn btn-style-three"
                      >
                        <span className="txt">Send Question</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt data-tilt-max="3">
                  <img src="images/resource/faq.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ your ques end */}

      {/* awards start */}

      {/* awards end */}
    </>
  );
};

export default About;
