import React from "react";
import BruschettaImg from "../assets/img/bruschetta.jpg";
import LemonImg from "../assets/img/lemon.jpg";
import GreekImg from "../assets/img/greek.jpg";
import BikeDeliveryImg from "../assets/img/bike-delivery-icon.png";

function Specials() {
  return (
    <div className="container">
      <section id="specials">
        <div className="specials-top">
          <h2 className="section-title">Specials</h2>
          <button className="btn" aria-label="On click" onClick={() => {}}>
            Online Menu
          </button>
        </div>
        <div className="specials-list">
          <article className="dish-card">
            <img className="special-img" src={GreekImg} alt="greek salad" />
            <div className="card-description">
              <div className="special-title-price">
                <h3 className="special-title">Greek Salad</h3>
                <h3 className="special-price">$12.99</h3>
              </div>
              <p className="special-description">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
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
                <h3 className="special-price">$5.99</h3>
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
            <img className="special-img" src={LemonImg} alt="lemon cake" />
            <div className="card-description">
              <div className="special-title-price">
                <h3 className="special-title">Lemon Dessert</h3>
                <h3 className="special-price">$5.00</h3>
              </div>
              <p className="special-description">
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
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
