import React from "react";
import LittleLemonLogo from "../assets/img/Logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header-container">
      <header className="nav-container">
        <img src={LittleLemonLogo} alt="Little Lemon Restaurant logo" />
        <Nav />
      </header>
    </div>
  );
}

export default Header;
