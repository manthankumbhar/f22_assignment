import React from "react";
import "./Topbar.scss";
import logo from "../../../assets/omega.svg";
import oval from "../../../assets/oval.svg";

export default function Topbar() {
  return (
    <div className="topbar">
      <img className="topbar__logo" src={logo} alt="logo" />
      <img src={oval} className="topbar__oval" alt="oval" />
      <div className="topbar__menu">
        {/* <div className="topbar__menu--dropdown">
          <a href="/">SaaS Landing</a>
          <a href="/">Startup Landing</a>
          <a href="/">App Landing</a>
          <a href="/">Desktop Landing</a>
        </div> */}
        <a
          href="/"
          className="topbar__menu--option topbar__menu--dropdownContainer"
        >
          Demo
        </a>
        <a href="/" className="topbar__menu--option">
          Pages
        </a>
        <a href="/" className="topbar__menu--option">
          Support
        </a>
        <button className="topbar__menu--btn">Get Started</button>
      </div>
    </div>
  );
}
