import React from "react";
import ItalianFoodImage from "../assets/img/foodspecials.png";

function Hero() {
  return (
    <div className="container hero-container">
      <section className="hero-section">
        <div>
          <h1 className="primary-color">Little Lemon</h1>
          <h2 className="white-color">Chicago</h2>
          <p className="white-color">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn">Reserve a Table</button>
        </div>
        <img src={ItalianFoodImage} alt="italian food" />
      </section>
    </div>
  );
}

export default Hero;
