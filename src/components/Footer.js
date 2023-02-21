import React from "react";
import LogoFooterImg from "../assets/img/logofooter.png";

function Footer() {
  return (
    <footer className="container footer-container">
      <section className="footer">
        <div>
          <img src={LogoFooterImg} alt="Little Lemon" />
        </div>
        <div>
          <h3>Navigation</h3>
          <p>Home...</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Address...</p>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <p>Facebook...</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
