import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Error = () => {
  const style = {
    position: "relative",
    display: "inline-block",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#ffffff",
    padding: "14px 44px",
    fontWeight: "400",
    overflow: "hidden",
    borderRadius: "6px",
    overflow: "hidden",
    textTransform: "capitalize",
    background: "#6917B4",
    background: "-webkit-linear-gradient(to right, #6917B4 0%, #d54be1 100%)",
    background: "-moz-linear-gradient(to right, #6917B4 0%, #d54be1 100%)",
    background: "linear-gradient(to right, #6917B4 0%, #d54be1 100%)",
  };

  return (
    <>
      {/* <section
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
          <h2>Not Found</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="index.html">home</a>
            </li>
            <li>404</li>
          </ul>
        </div>
      </section> */}

      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <div className="error-image">
              <img src="images/resource/error.png" alt="" />
            </div>
            <h2>Oops.... Page Not Found</h2>
            <div className="text">
              Sorry, but the page you are looking for does not existing
            </div>
            <NavLink style={style} to="/" className="theme-btn btn-style-five">
              <span className="txt">Go to home page</span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
