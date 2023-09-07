import React from "react";
import { HeroContainerStyled } from "./HeroStyles";
import heroImg from "/assets/images/Hero.jpg";



const Hero = () => {
  return (
    <HeroContainerStyled>
      <div id="hero-container">
        <div id="bg-container">
            <img
            src={heroImg}
            alt=""/>
            <h2>Hasta 30% OFF </h2> 
          <p>Buenas Olas Store, los mejores outfits para cualquier temoprada, entrena con estilo, comodidad y con la mas amplia combinacion de conjuntos deportivos. Aprovecha las ofertas de temporada</p>
        </div>
        
      </div>
    </HeroContainerStyled>
  );
};
export default Hero;
