import React from "react";
import "./Closing.scss";
import img from "../../../assets/img1.png";
import bell from "../../../assets/bell.svg";
import frame from "../../../assets/rectangle.svg";
import icon from "../../../assets/icon.svg";
import mobile from "../../../assets/mobile.svg";

export default function Closing() {
  return (
    <div className="closing">
      <div className="closing__left">
        <img src={img} className="closing__left--img" alt="demo img" />
        <img src={frame} className="closing__left--frame" alt="frame" />
        <div className="closing__left--lower">
          <img src={bell} alt="bell" className="closing__left--lower-bell" />
          <p className="closing__left--lower-content">
            <span className="closing__left--lower-header">
              Deadline: Oct 29, 2020
            </span>
            Project Discussion with John.
          </p>
        </div>
      </div>
      <div className="closing__right">
        <h1 className="closing__right--h1">
          It's everything you'll ever need.
        </h1>
        <h4 className="closing__right--h4">
          Create custom landing pages with Omega that convert more visitors than
          any website. With lots of unique blocks, you can easily build a page
          without coding.
        </h4>
        <div className="closing__right--lower">
          <img src={icon} alt="icon" className="closing__right--lower-icon" />
          <p className="closing__right--lower-content">
            <span className="closing__right--lower-header">
              50+ Unique Design Blocks
            </span>
            with Carefully Coded.
          </p>
        </div>
        <div className="closing__right--lower">
          <img
            src={mobile}
            alt="mobile"
            className="closing__right--lower-icon"
          />
          <p className="closing__right--lower-content">
            <span className="closing__right--lower-header">
              Mobile Fist Design
            </span>
            On Every Device.
          </p>
        </div>
      </div>
    </div>
  );
}
