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
  value: 5,
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
              <ReactStars {...testimonial2} />
              <p className="testimonial-name">Michael</p>
            </div>
            <p className="testimonial-review">
              Everyone was impressed and were quite taken with how cost
              effective it was to have Little Lemon Restaurant do what you did.
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial1} />
              <p className="testimonial-name">Lucia</p>
            </div>
            <p className="testimonial-review">
              How delicious the food was and the presentation was excellent!
              Full marks!!!
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial3} />
              <p className="testimonial-name">Oya</p>
            </div>
            <p className="testimonial-review">
              Thank you so much for organising such a seamless catering
              experience! The food was amazing, the staff were so polite and
              helpful!
            </p>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-rating">
              <ReactStars {...testimonial4} />
              <p className="testimonial-name">Angelo</p>
            </div>
            <p className="testimonial-review">
              Please thank your team for their professional, efficient and
              friendly service on Sat night. The chefs smashed it and the drinks
              flowed freely!
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
