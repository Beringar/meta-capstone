import React from "react";
import ChefsImg from "../assets/img/chefs.jpg";

function BottomHero() {
  return (
    <div className="container bottomhero-container">
      <section className="hero-section">
        <div>
          <h1 className="display-title secondary-color">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <img
          src={ChefsImg}
          alt="chefs of restaurant Little Lemon"
          width="80%"
        />
      </section>
    </div>
  );
}

export default BottomHero;
