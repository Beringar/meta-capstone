import React from "react";
import { useNavigate } from "react-router-dom";

import ItalianFoodImage from "../assets/img/foodspecials.png";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container hero-container">
      <section className="hero-section">
        <div>
          <h1 className="display-title primary-color">Little Lemon</h1>
          <h2 className="subtitle white-color">Chicago</h2>
          <p className="white-color">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className="btn"
            aria-label="On click"
            onClick={() => {
              navigate(`/reservation`);
            }}
          >
            Reserve a Table
          </button>
        </div>
        <img src={ItalianFoodImage} alt="italian food" />
      </section>
    </div>
  );
}

export default Hero;
