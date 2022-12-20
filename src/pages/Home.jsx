import React from "react";

const Home = () => {
  return (
    <>
      {/* banner start */}
      <section className="banner-section-two">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/banner-1.png" alt="" />
                  <div className="play-box">
                    <a
                      href="#"
                      className="lightbox-image play-icon wow bounceIn"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <span className="flaticon-play"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="pattern-layer-one"
                style={{ backgroundImage: "url(images/icons/icon-11.png)" }}
              ></div>
              <div
                className="pattern-layer-two"
                style={{ backgroundImage: "url(images/icons/icon-12.png)" }}
              ></div>
              <div
                className="pattern-layer-three"
                style={{ backgroundImage: "url(images/icons/icon-13.png)" }}
              ></div>
              <div
                className="pattern-layer-four"
                style={{ backgroundImage: "url(images/icons/icon-15.png)" }}
              ></div>
              <div
                className="pattern-layer-five"
                style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
              ></div>
              <div className="inner-column">
                <div className="title">Your focus:</div>
                <h1>Building the solution</h1>
              </div>
              <div className="mt-4">
                <div className="title">Our focus:</div>
                <h1 className="mb-4">Building your tech team</h1>
                <div className="clearfix">
                  <a href="about.html" className="theme-btn btn-style-seven">
                    <span className="txt">Lets Start</span>
                  </a>
                  <div className="phone-box">
                    <span className="phone-icon fas fa-phone-alt"></span>
                    <a className="phone" href="tel:+9999-000-999">
                      9999 000 999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}

      {/* we provide engg start */}
      <section className="services-section style-two">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">We Provide</div>
            <h2>We provide engineering team for technology companies</h2>
          </div>
          <div className="row clearfix">
            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer"></div>
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern.png)",
                  }}
                ></div>
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern-2.png)",
                  }}
                ></div>
                <div className="icon-box">
                  <span className="icon flaticon-shuttle"></span>
                </div>
                <h5>
                  <a href="#">Expertise</a>
                </h5>
                <div className="text">
                  Hire certified and qualified engineers with average 7 years of
                  Experience from a wide array of technology stack
                </div>
              </div>
            </div>

            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer"></div>
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern.png)",
                  }}
                ></div>
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern-2.png)",
                  }}
                ></div>
                <div className="icon-box">
                  <span className="icon flaticon-globe"></span>
                </div>
                <h5>
                  <a href="#">Cost effective</a>
                </h5>
                <div className="text">
                  All our engagement plans provide at least a saving of 50% with
                  the monthly rate card starting from $2400.
                </div>
              </div>
            </div>

            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer"></div>
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern.png)",
                  }}
                ></div>
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern-2.png)",
                  }}
                ></div>
                <div className="icon-box">
                  <span className="icon flaticon-network"></span>
                </div>
                <h5>
                  <a href="#">Transparency</a>
                </h5>
                <div className="text">
                  Daily scrum, time log sheets, and 24X7 support, <br /> to
                  ensure Complete visibility <br /> of the engineering team
                </div>
              </div>
            </div>

            <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="color-layer"></div>
                <div
                  className="pattern-layer-one"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern.png)",
                  }}
                ></div>
                <div
                  className="pattern-layer-two"
                  style={{
                    backgroundImage: "url(images/icons/service-pattern-2.png)",
                  }}
                ></div>
                <div className="icon-box">
                  <span className="icon flaticon-bar-chart"></span>
                </div>
                <h5>
                  <a href="#">Availability</a>
                </h5>
                <div className="text">
                  We manage a strong bench to ensure faster <br /> ramp up and
                  ability to meet your requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we provide engg end */}

      <section
        className="call-to-action-section-two"
        style={{ backgroundImage: "url(images/background/map-pattern-1.png)" }}
      >
        <div
          className="pattern-layer-one"
          style={{ backgroundImage: "url(images/background/pattern-22.png)" }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{ backgroundImage: "url(images/background/pattern-9.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt data-tilt-max="3">
                  <img src="images/resource/cta-1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Take Your Site to Next Level At this moment!</h2>
                <div className="text">
                  Make the Right Choice for Your Future. Choose Moto!
                </div>
                <a href="about.html" className="theme-btn btn-style-eight">
                  <span className="txt">Lets Start</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients start */}
      {/* clients end */}

      {/* choose right start */}
      {/* choose right end */}

      {/* tech we are excel start */}
      <section className="services-section-two">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Technologies we excel at</h2>
          </div>
          <div className="inner-container">
            <div className="sec-title centered pt-5 mb-4">
              <div className="title">Web Development</div>
            </div>
            <div className="clearfix">
              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">Frontend Development</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> Java, HTML, CSS and JavaScript
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> AngularJS, ReactJS, React Native, JQuery and Ionic
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">Backend Development</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> PHP, Ruby, C#, C++, Python, JavaScript and Node.js
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> Django, Ruby on Rails, Springboot, Flask, Laravel,
                    ExpressJS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section-two mt-5">
        <div className="auto-container">
          <div className="inner-container">
            <div className="sec-title centered pt-5 mb-4">
              <div className="title">Mob Development</div>
            </div>
            <div className="clearfix">
              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">iOS</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> Swift, Objective C and Swift UI
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> Cocoa Pods, ReactJS, Firebase, Cloudkit and Mapkit
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Software:</span>
                    <br /> Xcode
                  </div>
                  <div style={{ opacity: "0" }}>Lorem ipsum dolor sit</div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="content-marketing.html">Android</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> Kotlin and Java
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> Spring Rest Templates, Sencha Touch and Appcelerator
                    Titanium
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Software:</span>
                    <br /> Andriod Studio, Greenrobot, Eventbus and Sweet Alert
                    Dialog
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="content-marketing.html">Cross Platform</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> Dart and JS/TS
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> Flutter, Ionic, React Native <br /> and Xamarin
                  </div>
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>Software:</span>
                    <br /> Andriod Studio, Greenrobot, Eventbus and Sweet Alert
                    Dialog
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section-two mt-5">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">AI & ML</a>
                  </h5>
                  <div className="text">
                    NLP, Chatbots, Image Processing, Amazon, Textract, ASR, OCR
                    and KNN Algorithm
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">Database</a>
                  </h5>
                  <div className="text">
                    Microsoft SQL Server, MongoDB, <br /> MySQL, Oracle
                    PostgreSQL and DynamoDB
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">DevOps</a>
                  </h5>
                  <div className="text">
                    AWS, Google Cloud, <br /> Docker, Jenkins <br /> and
                    Kubernetes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section-two mt-5">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">Testing</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Automation: </span>
                    <br /> Appium, selenium and Mocha
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Manual:</span>
                    <br /> Black box testing and White box testing
                  </div>
                </div>
              </div>

              <div className="service-block-two col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer"></div>
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  ></div>
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  ></div>
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  ></div>
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  ></div>
                  <div className="icon-box">
                    <span className="icon flaticon-pie-chart"></span>
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(images/icons/icon-6.png)",
                      }}
                    ></div>
                  </div>
                  <h5>
                    <a href="#">Tools</a>
                  </h5>
                  <div className="text">
                    Tesseract, PowerBI, Qlikview, MS Excel, BIRT, Hibernate/
                    NHibernate and GitHub
                  </div>
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>Manual:</span>
                    <br /> Black box testing and White box testing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tech we are excel start */}

      {/* on boarding process start */}
      <section
        className="steps-section"
        style={{ backgroundImage: "url(images/background/pattern-14.png)" }}
      >
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Process</div>
            <h2>Onboarding Process</h2>
            <h5 className="mt-2">Hire developer in just 3 simple steps.</h5>
          </div>

          <div className="row clearfix">
            <div className="step-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">01</div>
                </div>
                <h6>Share your team requirements</h6>
                <p>
                  Share your technical engineers requirement — project
                  information, the tech stacks, roles and number of engineers -
                  so we can curate the best suited engineers.
                </p>
              </div>
            </div>

            <div className="step-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">02</div>
                </div>
                <h6>Approve proposed engineering team</h6>
                <p>
                  Share your technical engineers requirement — project
                  information, the tech stacks, roles and number of engineers -
                  so we can curate the best suited engineers.
                </p>
              </div>
            </div>

            <div className="step-block third-block-arrow col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <div className="number">03</div>
                </div>
                <h6>Launch your project</h6>
                <p>
                  Share your technical engineers requirement — project
                  information, the tech stacks, roles and number of engineers -
                  so we can curate the best suited engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* on boarding process end */}
    </>
  );
};

export default Home;
