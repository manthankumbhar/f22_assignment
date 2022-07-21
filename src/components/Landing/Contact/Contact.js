import React from "react";
import "./Contact.scss";
import background from "../../../assets/end_bg.svg";

export default function Contact() {
  return (
    <div className="contact">
      <img src={background} className="contact__background" alt="background" />
      <h1 className="contact__h1">Get Started</h1>
      <h4 className="contact__description">
        Create custom landing pages with Omega that converts more visitors than
        any website. With lots of unique blocks, you can easily build a page
        without coding.
      </h4>
      <form className="contact__form">
        <input
          required
          className="contact__form--input"
          type="text"
          placeholder="Your name"
        />
        <input
          required
          className="contact__form--input"
          type="email"
          placeholder="Email address"
        />
        <button className="contact__form--btn">Get Started</button>
      </form>
    </div>
  );
}
