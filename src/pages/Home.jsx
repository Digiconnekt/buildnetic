import React from "react";

const Home = () => {
  return (
    <>
      {/* banner start */}
      <section className="banner-section-three">
        <div
          className="icon-layer-one"
          style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
        ></div>
        <div
          className="icon-layer-two"
          style={{ backgroundImage: "url(images/icons/icon-17.png)" }}
        ></div>
        <div
          className="icon-layer-three"
          style={{ backgroundImage: "url(images/background/pattern-12.png)" }}
        ></div>
        {/* <ul className="social-box">
          <li>
            <a href="#" className="fa fa-facebook-f"></a>
          </li>
          <li>
            <a href="#" className="fa fa-linkedin"></a>
          </li>
          <li>
            <a href="#" className="fa fa-twitter"></a>
          </li>
          <li>
            <a href="#" className="fa fa-google"></a>
          </li>
        </ul> */}

        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h1 style={{ marginTop: "10px" }}>
                  Compiling your ideas, to generate desired solutions
                </h1>
                {/* <div className="text">
                  World leading reliable research &amp; AI based Data Analytics
                  solutions for Big Data companies and consumer business
                  products
                </div> */}
                {/* <div className="clearfix">
                  <a
                    href="https://www.youtube.com/watch?v=kxPCFljwJws"
                    className="lightbox-image video-box"
                  >
                    <span className="fa fa-play">
                      <i className="ripple"></i>
                    </span>{" "}
                    WATCH VIDEO
                  </a>
                  <a href="about.html" className="theme-btn btn-style-three">
                    <span className="txt">about us</span>
                  </a>
                </div> */}
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/banner-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              ></use>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              ></use>
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>
          </svg>
        </div>
      </section>
      {/* banner end */}

      {/* banner start */}
      {/* <section className="banner-section-two">
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
              </div>
            </div>
          </div>
        </div>
      </section> */}
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

      {/* take to next level start */}
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
      {/* take to next level end */}

      {/* clients start */}
      {/* clients end */}

      {/* engagement model start */}
      <section className="newsletter-section mt-5">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Model</div>
            <h2>Choose the right engagement model</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" className="table-active"></th>
                  <th scope="col" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Offshore Dev Center</h6>
                  </th>
                  <th scope="col" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Dedicated Engineers</h6>
                  </th>
                  <th scope="col" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Project Team</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Best for</h6>
                  </th>
                  <td>Setting up a team of min 3 FTE</td>
                  <td>Scaling your in-house tech team</td>
                  <td>Hiring team for a defined project</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Team</h6>
                  </th>
                  <td>Custom as per technical skill requirement</td>
                  <td>Custom as per technical skill requirement</td>
                  <td>
                    Full-Time: 1 Backend, 1 Frontend, 1 Testing Part-time:
                    Architect, Designer, DevOps, PM
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Min engagement period</h6>
                  </th>
                  <td>6 Months</td>
                  <td>3 Months</td>
                  <td>3 Months</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Min engagement period</h6>
                  </th>
                  <td colSpan="3">
                    100% flexibility to ramp up or ramp down the team, Easy
                    replacement
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Ramp up time</h6>
                  </th>
                  <td>15-30 days</td>
                  <td>7-14 days</td>
                  <td>1-14 days</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Ramp down time</h6>
                  </th>
                  <td>60 days</td>
                  <td>30 days</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>
                      Cost savings on US rates
                    </h6>
                  </th>
                  <td>Min 60%</td>
                  <td>Min 50%</td>
                  <td>Min 50%</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Pricing</h6>
                  </th>
                  <td>Starts from $2400 monthly rate</td>
                  <td>Starts from $3000 monthly rate</td>
                  <td>$8999 per month</td>
                </tr>
                <tr>
                  <th scope="row" className="table-active">
                    <h6 style={{ fontWeight: "500" }}>Support</h6>
                  </th>
                  <td colSpan="3">24 X 7 Support - Email and Chat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* engagement model end */}

      {/* tech we are excel start */}
      <section className="services-section-two">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Technologies</div>
            <h2>Technologies we excel at</h2>
          </div>
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
                    <a href="#">Web Development</a>
                  </h5>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    <br /> Java, HTML, CSS, JavaScript, PHP, Ruby, C#, C++,
                    Python and Node.js
                  </div>
                  <div className="text">
                    <span style={{ fontWeight: "bold" }}>
                      Frameworks & Library:
                    </span>
                    <br /> AngularJS, ReactJS, React Native, JQuery, Ionic,
                    Django, Ruby on Rails, Springboot, Flask, Laravel, ExpressJS
                  </div>
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>lorem:</span>
                  </div>
                </div>
              </div>

              {/* <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
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
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>lorem:</span>
                    <br /> lorem
                  </div>
                </div>
              </div> */}

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
                    <br /> Swift, Objective C <br /> and Swift UI
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
                    <a href="#">AI & ML</a>
                  </h5>
                  <div className="text">
                    NLP, Chatbots, Image Processing, Amazon, Textract, ASR, OCR
                    and KNN Algorithm
                  </div>
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>lorem:</span>
                    <br /> lorem
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
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>lorem:</span>
                    <br /> lorem
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
                  <div className="text" style={{ opacity: "0" }}>
                    <span style={{ fontWeight: "bold" }}>lorem:</span>
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

      {/* clients start */}
      <section className="clients-section style-three">
        <div className="auto-container">
          <div className="sponsors-outer">
            <ul className="sponsors-carousel owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0.5s ease 0s",
                    width: "4212px",
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/4.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/5.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/1.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/2.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/3.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item active" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/1.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item active" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/2.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item active" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/3.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item active" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/4.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item active" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/5.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/1.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/2.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/3.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/1.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/2.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/3.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/4.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                  <div className="owl-item cloned" style={{ width: "234px" }}>
                    <li className="slide-item">
                      <figure className="image-box">
                        <a href="#">
                          <img src="images/clients/5.png" alt="" />
                        </a>
                      </figure>
                    </li>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <div className="owl-prev">
                  <span className="fa fa-angle-left"></span>
                </div>
                <div className="owl-next">
                  <span className="fa fa-angle-right"></span>
                </div>
              </div>
              <div className="owl-dots">
                <div className="owl-dot active">
                  <span></span>
                </div>
                <div className="owl-dot">
                  <span></span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
      {/* clients end */}

      {/* get in touch start */}
      <section
        className="call-to-action-section"
        style={{ backgroundImage: "url(images/background/map-pattern.png)" }}
      >
        <div
          className="circle-layer"
          style={{ backgroundImage: "url(images/resource/cta-bg.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Get in Touch</h2>
                <div className="text">
                  Make the Right Choice for Your Future. Choose Moto!
                </div>
                <a href="about.html" className="theme-btn btn-style-three">
                  <span className="txt">Lets Start</span>
                </a>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div
                  className="image titlt"
                  data-tilt=""
                  data-tilt-max="3"
                  style={{ willChange: "transform" }}
                >
                  <img src="images/resource/cta.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get in touch end */}

      {/* counter start */}
      <section className="counter-section margin-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="fact-counter">
              <div className="row clearfix">
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft animated"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "0ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="content">
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="2500"
                          data-stop="230"
                        >
                          230
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">ACTIVE CLIENTS</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "300ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="content">
                      <div className="count-outer count-box alternate counted">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="95"
                        >
                          95
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">TEAM ADVISORS</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "600ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="content">
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="4000"
                          data-stop="820"
                        >
                          820
                        </span>
                        +
                      </div>
                      <h4 className="counter-title">PROJECTS DONE</h4>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft animated"
                    data-wow-delay="900ms"
                    data-wow-duration="1500ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "1500ms",
                      animationDelay: "900ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <div className="content">
                      <div className="count-outer count-box counted">
                        <span
                          className="count-text"
                          data-speed="2000"
                          data-stop="25"
                        >
                          25
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

      {/* newsletter start */}
      <section className="newsletter-section mt-5">
        <div className="auto-container">
          <div className="row clearfix">
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
                        placeholder="Enter Your Email"
                        required=""
                        fdprocessedid="zqjhk"
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-three"
                        fdprocessedid="onz4o6"
                      >
                        <span className="txt">Subscribe Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max="3">
                  <img src="images/resource/newsletter.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter end */}

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

      {/* blog start */}
      <section className="news-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(images/resource/cta-bg.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">OUR BLOG</div>
                <h2>Our Latest Media</h2>
                <div className="text">
                  Our campaigns get your business in front of the right people
                  at the <br /> right time to increase organic traffic and boost
                  engagement.
                </div>
              </div>
              <div className="pull-right">
                <a href="blog.html" className="theme-btn btn-style-three">
                  <span className="txt">All News</span>
                </a>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft animated"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "fadeInLeft",
                }}
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
                        <span className="icon fa fa-calendar"></span> November
                        21, 2020
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="news-detail.html">
                      Google now disregards or overlooks all reciprocal links
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInUp animated"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "fadeInUp",
                }}
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
                        <span className="icon fa fa-calendar"></span> November
                        21, 2020
                      </a>
                    </li>
                  </ul>
                  <h5>
                    <a href="news-detail.html">
                      Absolute Links vs. Relative Links – SEO Intrinsic Value
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInRight animated"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: "0ms",
                  animationName: "fadeInRight",
                }}
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
                        <span className="icon fa fa-calendar"></span> November
                        21, 2020
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
        </div>
      </section>
      {/* blog end */}
    </>
  );
};

export default Home;
