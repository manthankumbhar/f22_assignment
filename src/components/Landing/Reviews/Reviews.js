import React from "react";
import Card from "./Card/Card";
import "./Reviews.scss";
import message from "../../../assets/message.svg";

export default function Reviews() {
  return (
    <div className="reviews">
      <h1 className="reviews__h1">Customers are loving our Omega!</h1>
      <div className="reviews__container">
        <Card
          name="Jonathan Taylor"
          designation="CEO at Creativex"
          description="OMG! I cannot believe that I have got a brand new landing page after getting @Omega…"
        />
        <Card
          name="Gavin Park"
          designation="CEO at Orbital"
          description="@Omega is great for creating landing pages within minutes! It actually takes less time…"
        />
        <Card
          name="Betty Norton"
          designation="Freelance Designer"
          description="Whenever I need to create a new landing page for clients, @Omega is my solution…"
        />
      </div>
      <a href="/" className="reviews__a">
        <img src={message} className="reviews__a--message" alt="message" />
        See all testimonials
      </a>
    </div>
  );
}
