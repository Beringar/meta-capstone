import React from "react";
import LittleLemonLogo from "../assets/img/Logo.svg";
import IconHamburguer from "../assets/img/icon_hamburguer.svg";

import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <header className="nav-container">
        <img
          className="only-mobile clickable"
          aria-label="On Click"
          onClick={() => {
            navigate("/");
          }}
          src={IconHamburguer}
          alt="Little Lemon Restaurant logo"
        />
        <img
          className="clickable"
          src={LittleLemonLogo}
          alt="Little Lemon Restaurant logo"
          aria-label="On Click"
          onClick={() => {
            navigate("/");
          }}
        />
        <Nav />
      </header>
    </div>
  );
}

export default Header;
