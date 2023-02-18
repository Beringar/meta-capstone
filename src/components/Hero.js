import React from "react";
import ItalianFoodImage from "../assets/img/food1.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>lorem ssdf sdf ljk ljlsd lksj flksjf slkdjf lkjs fdlkjs flkj.</p>
        <button>Reserve a Table</button>
      </div>
      <img src={ItalianFoodImage} alt="italian food" width="80%" />
    </section>
  );
}

export default Hero;
