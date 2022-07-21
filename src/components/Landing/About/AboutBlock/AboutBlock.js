import React from "react";
import "./AboutBlock.scss";

export default function AboutBlock({ src, header, description }) {
  return (
    <div className="aboutblock">
      <img src={src} className="aboutblock__img" alt="logo" />
      <h1 className="aboutblock__h1">{header}</h1>
      <p className="aboutblock__p">{description}</p>
    </div>
  );
}
