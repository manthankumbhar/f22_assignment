import React from "react";
import "./About.scss";
import background from "../../../assets/bg.svg";
import AboutBlock from "./AboutBlock/AboutBlock";
import about_1 from "../../../assets/about_1.svg";
import about_2 from "../../../assets/about_2.svg";
import about_3 from "../../../assets/about_3.png";
import about_4 from "../../../assets/about_4.svg";

export default function About() {
  return (
    <div className="about">
      <img src={background} className="about__background" alt="background" />
      <div className="about__left">
        <AboutBlock
          src={about_1}
          header="Multiple Layouts"
          description="With lots of unique blocks, you can easily build a page without coding."
        />
        <AboutBlock
          src={about_2}
          header="Fully Responsive"
          description="With lots of unique blocks, you can easily build a page without coding."
        />
        <AboutBlock
          src={about_3}
          header="Well Documented"
          description="With lots of unique blocks, you can easily build a page without coding."
        />
        <AboutBlock
          src={about_4}
          header="Great Support"
          description="With lots of unique blocks, you can easily build a page without coding."
        />
      </div>
      <div className="about__right">
        <h1 className="about__right--h1">
          Building a perfect landing page fast.
        </h1>
        <h4 className="about__right--h4">
          Create custom landing pages with Omega that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without coding.
        </h4>
        <button className="about__right--btn">Check all features</button>
      </div>
    </div>
  );
}
