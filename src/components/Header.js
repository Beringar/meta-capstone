import React from "react";
import LittleLemonLogo from "../assets/img/Logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header-container">
      <img src={LittleLemonLogo} alt="Little Lemon Restaurant logo" />
      <Nav />
    </header>
  );
}

export default Header;
