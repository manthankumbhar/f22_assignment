import React from "react";
import "./Card.scss";
import twitter from "../../../../assets/twitter.svg";

export default function Card({ name, designation, description }) {
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__container--pfp">{name.slice(0, 1)}</p>
        <div>
          <h3 className="card__container--h3">{name}</h3>
          <h5 className="card__container--h5">{designation}</h5>
        </div>
        <img src={twitter} className="card__container--logo" alt="twitter" />
      </div>
      <p className="card__description">{description}</p>
    </div>
  );
}
