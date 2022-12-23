import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(../images/background/pattern-16.png)" }}
      >
        <div
          className="pattern-layer-one"
          style={{
            backgroundImage: "url(../images/main-slider/pattern-1.png)",
          }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(../images/background/pattern-17.png)",
          }}
        ></div>
        <div className="auto-container">
          <h2>{title}</h2>
        </div>
      </section>
    </>
  );
};

export default Title;
