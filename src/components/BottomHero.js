import React from "react";
import ItalianFoodImage from "../assets/img/food1.jpg";

function BottomHero() {
  return (
    <div className="container bottomhero-container">
      <section className="hero-section">
        <div>
          <h1 className="secondary-color">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <img src={ItalianFoodImage} alt="italian food" width="80%" />
      </section>
    </div>
  );
}

export default BottomHero;
