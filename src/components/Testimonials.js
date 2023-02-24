import React from "react";
import ReactStars from "react-rating-stars-component";

const testimonial1 = {
  size: 24,
  value: 4,
  edit: false,
};
const testimonial2 = {
  size: 24,
  value: 5,
  edit: false,
};
const testimonial3 = {
  size: 24,
  value: 4,
  edit: false,
};
const testimonial4 = {
  size: 24,
  value: 3,
  edit: false,
};

function Testimonials() {
  return (
    <div className="container testimonials-container">
      <section id="testimonials">
        <div className="testimonials-top">
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div className="testimonials-list">
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial1} />
              <p className="testimonial-name">John Doe</p>
            </div>
            <p className="testimonial-review">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial2} />
              <p className="testimonial-name">John Doe</p>
            </div>
            <p className="testimonial-review">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial3} />
              <p className="testimonial-name">John Doe</p>
            </div>
            <p className="testimonial-review">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial4} />
              <p className="testimonial-name">John Doe</p>
            </div>
            <p className="testimonial-review">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
