import React from "react";
import "./Feature.scss";
import img from "../../../assets/img.png";
import bell from "../../../assets/bell.svg";
import frame from "../../../assets/rectangle.svg";

export default function Feature() {
  return (
    <div className="feature">
      <div className="feature__left">
        <h1 className="feature__left--h1">
          Save tons of time on design & coding.
        </h1>
        <h4 className="feature__left--h4">
          Create custom landing pages with Omega that convert more visitors than
          any website. With lots of unique blocks, you can easily build a page
          without coding.
        </h4>
        <button className="feature__left--btn">Get Started</button>
      </div>
      <div className="feature__right">
        <img src={img} className="feature__right--img" alt="demo img" />
        <img src={frame} className="feature__right--frame" alt="frame" />
        <div className="feature__right--lower">
          <img src={bell} alt="bell" className="feature__right--lower-bell" />
          <p className="feature__right--lower-content">
            <span className="feature__right--lower-header">
              Next meeting in 30mins
            </span>
            Project Discussion with John.
          </p>
        </div>
      </div>
    </div>
  );
}
