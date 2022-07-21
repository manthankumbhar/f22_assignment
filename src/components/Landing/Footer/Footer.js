import React from "react";
import "./Footer.scss";
import twitter from "../../../assets/twitter.svg";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <h2 className="footer__h2">Omega</h2>
        <div className="footer__menu">
          <h4 className="footer__menu--h4">About</h4>
          <a href="/" className="footer__menu--a">
            Our mission
          </a>
          <a href="/" className="footer__menu--a">
            Our story
          </a>
          <a href="/" className="footer__menu--a">
            Team members
          </a>
        </div>
        <div className="footer__menu">
          <h4 className="footer__menu--h4">Learn</h4>
          <a href="/" className="footer__menu--a">
            Tutorials
          </a>
          <a href="/" className="footer__menu--a">
            How it works
          </a>
          <a href="/" className="footer__menu--a">
            F.A.Q
          </a>
        </div>
        <div className="footer__menu">
          <h4 className="footer__menu--h4">Stories</h4>
          <a href="/" className="footer__menu--a">
            Blog
          </a>
          <a href="/" className="footer__menu--a">
            Tech stories
          </a>
        </div>
        <div className="footer__menu">
          <h4 className="footer__menu--h4">Hire</h4>
          <a href="/" className="footer__menu--a">
            Careers
          </a>
          <a href="/" className="footer__menu--a">
            Freelancing
          </a>
          <a href="/" className="footer__menu--a">
            Training
          </a>
        </div>
      </div>
      <div className="footer__end">
        <p className="footer__end--p">© 2020 UXTheme, All Rights Reserved</p>
        <div>
          <img src={twitter} className="footer__end--logo" alt="logo" />
          <img src={facebook} className="footer__end--logo" alt="logo" />
          <img src={google} className="footer__end--logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}
