import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-style-two"
        style={{ backgroundImage: "url(images/background/map-pattern-2.png)" }}
      >
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="index.html">
                          <img src="images/logo-3.png" alt="" />
                        </a>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor amet consectetur adip- ielit sed eiusm
                        tempor incididunt ut labore dolore magna aliqua enim ad
                        minim veniam quis....
                      </div>
                    </div>
                  </div>

                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Quicky links</h4>
                      <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <ul className="list-link-two">
                            <li>
                              <a href="#">How It Works</a>
                            </li>
                            <li>
                              <a href="#">Guarantee</a>
                            </li>
                            <li>
                              <a href="#">Report Bug</a>
                            </li>
                            <li>
                              <a href="#">Pricing</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <ul className="list-link-two">
                            <li>
                              <a href="#">About Singleton</a>
                            </li>
                            <li>
                              <a href="#">Team</a>
                            </li>
                            <li>
                              <a href="#">Testimonials</a>
                            </li>
                            <li>
                              <a href="#">Blog</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-info-widget">
                      <h4>Contact us</h4>
                      <div className="widget-content">
                        <ul>
                          <li>Mon – Sat 10:00pm - 8:00pm</li>
                          <li>
                            <a href="tel:+0987-654-321">0987 654 321</a>{" "}
                            <a href="tel:+0123-456-789">0123 456 789</a>
                          </li>
                          <li>
                            <a href="mailto:Merix@gmail.com">Merix@gmail.com</a>
                          </li>
                          <li>
                            16122 Collins Street West, Melbourne, VIC Srsars
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget app-widget">
                      <h4>Download the App</h4>
                      <div className="app-btns clearfix">
                        <a href="#">
                          <img src="images/icons/app-btn.png" alt="" />
                        </a>
                        &ensp;
                        <a href="#">
                          <img src="images/icons/google-btn.png" alt="" />
                        </a>
                      </div>
                      <ul className="social-box">
                        <li className="follow">Follow Us Now</li>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
                <div className="copyright">
                  Copyright &copy; 2021. All Rights Reserved By{" "}
                  <a href="https://themeforest.net/user/noor_tech">
                    noor_tech.
                  </a>
                </div>
              </div>

              <div className="nav-column col-lg-6 col-md-12 col-sm-12">
                <ul>
                  <li>
                    <a href="privacy.html">Privacy</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="account.html">Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
