import React from "react";
import "./Home.scss";
import img1 from "../../../assets/i-phone-body.png";
import tick from "../../../assets/tick.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <h1 className="home__left--h1">
          Redesigned, how you build landing page!
        </h1>
        <h4 className="home__left--h4">
          Create custom landing pages with Omega that convert more visitors than
          any website. With lots of unique blocks, you can easily build a page
          without coding.
        </h4>
        <button className="home__left--btn">Get Started</button>
        <a className="home__left--a" href="/">
          <span>&#9658;</span> Watch the intro video
        </a>
      </div>
      <div className="home__right">
        <div className="home__right--upper">
          <img src={tick} alt="tick" className="home__right--upper-tick" />
          <p className="home__right--upper-content">
            You have successfully logged in.
          </p>
        </div>
        <img src={img1} className="home__right--img1" alt="mobile demo" />
        <div className="home__right--lower">
          <img src={tick} alt="tick" className="home__right--lower-tick" />
          <p className="home__right--lower-content">
            Appointment with the doctor was successful.
          </p>
        </div>
      </div>
    </div>
  );
}
