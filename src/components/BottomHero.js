import React from "react";
import ItalianFoodImage from "../assets/img/food1.jpg";

function BottomHero() {
  return (
    <div className="container bottomhero-container">
      <section className="hero-section">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>lorem ssdf sdf ljk ljlsd lksj flksjf slkdjf lkjs fdlkjs flkj.</p>
        </div>
        <img src={ItalianFoodImage} alt="italian food" width="80%" />
      </section>
    </div>
  );
}

export default BottomHero;
