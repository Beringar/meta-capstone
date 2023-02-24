import React from "react";
import BruschettaImg from "../assets/img/bruschetta.jpg";
import BikeDeliveryImg from "../assets/img/bike-delivery-icon.png";

function Specials() {
  return (
    <div className="container">
      <section id="specials">
        <div className="specials-top">
          <h2 className="section-title">Specials</h2>
          <button className="btn">Online Menu</button>
        </div>
        <div className="specials-list">
          <article className="dish-card">
            <img className="special-img" src={BruschettaImg} alt="bruschetta" />
            <div className="card-description">
              <div className="special-title-price">
                <h3 className="special-title">Bruschetta</h3>
                <h3 className="special-price">$12.99</h3>
              </div>
              <p className="special-description">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="special-delivery">
                <p className="special-order">Order a delivery</p>
                <img src={BikeDeliveryImg} alt="bike delivery icon" />
              </div>
            </div>
          </article>
          <article className="dish-card">
            <img className="special-img" src={BruschettaImg} alt="bruschetta" />
            <div className="card-description">
              <div className="special-title-price">
                <h3 className="special-title">Bruschetta</h3>
                <h3 className="special-price">$12.99</h3>
              </div>
              <p className="special-description">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="special-delivery">
                <p className="special-order">Order a delivery</p>
                <img src={BikeDeliveryImg} alt="bike delivery icon" />
              </div>
            </div>
          </article>
          <article className="dish-card">
            <img className="special-img" src={BruschettaImg} alt="bruschetta" />
            <div className="card-description">
              <div className="special-title-price">
                <h3 className="special-title">Bruschetta</h3>
                <h3 className="special-price">$12.99</h3>
              </div>
              <p className="special-description">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <div className="special-delivery">
                <p className="special-order">Order a delivery</p>
                <img src={BikeDeliveryImg} alt="bike delivery icon" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Specials;
