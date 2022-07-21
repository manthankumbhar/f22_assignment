import React from "react";
import "./Clients.scss";
import logo1 from "../../../assets/logo-1.png";
import logo2 from "../../../assets/logo-2.png";
import logo3 from "../../../assets/logo-3.png";
import logo4 from "../../../assets/logo-4.png";
import logo5 from "../../../assets/logo-5.png";

export default function Clients() {
  return (
    <div className="clients">
      <p className="clients__p">Popular teams who use Omega for appoinments:</p>
      <div className="clients__container">
        <img src={logo1} className="clients__container--logo" alt="logos" />
        <img src={logo2} className="clients__container--logo" alt="logos" />
        <img src={logo3} className="clients__container--logo" alt="logos" />
        <img src={logo4} className="clients__container--logo" alt="logos" />
        <img src={logo5} className="clients__container--logo" alt="logos" />
      </div>
    </div>
  );
}
