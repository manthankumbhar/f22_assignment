import React from "react";
import About from "./About/About";
import Clients from "./Clients/Clients";
import Closing from "./Closing/Closing";
import Contact from "./Contact/Contact";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Reviews from "./Reviews/Reviews";
import Topbar from "./Topbar/Topbar";

export default function Landing() {
  return (
    <div>
      <Topbar />
      <Home />
      <Clients />
      <About />
      <Feature />
      <Closing />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
