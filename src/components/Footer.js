import React from "react";
import LogoFooterImg from "../assets/img/logofooter.png";
import Nav from "./Nav";
import SocialsNav from "./SocialsNav";

function Footer() {
  return (
    <footer className="container footer-container">
      <section className="footer">
        <div>
          <img src={LogoFooterImg} alt="Little Lemon" />
        </div>
        <div>
          <h3>Navigation</h3>
          <Nav />
        </div>
        <div>
          <h3>Contact</h3>
          <p>Little Italy Square, 23</p>
          <p>New York</p>
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <SocialsNav />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
