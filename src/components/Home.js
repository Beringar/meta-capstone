import React from "react";
import BottomHero from "./BottomHero";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <BottomHero />
    </>
  );
}

export default Home;
