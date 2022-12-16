import React from "react";

const Contact = () => {
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
          <h2>Contact Us</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Follow Our Info</div>
            <h2>Contact information</h2>
            <div className="text">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. <br /> We will be
              happy to answer your questions.
            </div>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <div className="box-inner">
                    <div className="icon flaticon-clock"></div>
                    10:00am to 6:00pm <br /> Sunday Closed
                  </div>
                </div>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <div className="box-inner">
                    <div className="icon flaticon-pin"></div>
                    13005 Greenville Avenue <br /> California, TX 70240
                  </div>
                </div>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="info-box">
                  <div className="box-inner">
                    <div className="icon flaticon-phone-call"></div>
                    <a href="tel:+1-000999-0099">+1 000999 0099</a>
                    <a href="mailto:mail@example.com">mail@example.com</a>
                  </div>
                </div>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <ul className="social-box">
                  <span>
                    Our Socials Links{" "}
                    <i>
                      Print this page to PDF for the complete set of vectors.
                    </i>
                  </span>
                  <li className="facebook">
                    <a className="fab fa-facebook-f" href="#"></a>
                  </li>
                  <li className="twitter">
                    <a className="fab fa-twitter" href="#"></a>
                  </li>
                  <li className="linkedin">
                    <a href="#" className="fab fa-google-plus"></a>
                  </li>
                  <li className="pinterest">
                    <a href="#" className="fa fa-pinterest-p"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="map-boxed">
            <div className="map-outer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
                style={{
                  border: "0px",
                  frameborder: "0px",
                  width: "100%",
                  height: "560px",
                  allowfullscreen: "",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Don’t Hasitate To Contact With us</div>
            <h2>Now Very Easy</h2>
            <div className="text">
              Our approach to SEO is uniquely built around what we know
              works…and what we know <br /> doesn’t work. With over 200 verified
              factors in play.
            </div>
          </div>
          <div className="inner-container">
            <div className="contact-form">
              <form method="post" action="sendemail.php" id="contact-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-user-2"></span>
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-phone-call"></span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-notepad"></span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <span className="icon flaticon-message"></span>
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                    <button
                      className="theme-btn btn-style-three"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="txt">Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
