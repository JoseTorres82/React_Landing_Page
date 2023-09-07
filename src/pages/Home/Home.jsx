import React from "react";
import  {HomeWrapper} from "../../pages/Home/HomeStyles";
import Hero from "../../components/Hero/Hero";
import Destacados from "../Home/Destacados/Destacados";
import Subscribe from "../../components/Suscripcion/Suscribe";

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Destacados />
      <Subscribe />
    </HomeWrapper>
  );
}

export default Home;
