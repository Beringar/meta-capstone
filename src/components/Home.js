import React from "react";
import BottomHero from "./BottomHero";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <BottomHero />
    </main>
  );
}

export default Home;
