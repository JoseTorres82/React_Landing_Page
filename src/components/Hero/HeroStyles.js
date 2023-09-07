import { styled } from "styled-components";

export const HeroContainerStyled = styled.section`
    /* max-width: fit-content; */
    padding: 0;
    margin-top: 0;
    display: flex;
    position: relative;
    top:0px;


  #bg-container img {
    max-width: 100vw;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
    overflow: hidden;
    margin-bottom: 20px;
    top:0;
  }
  #hero-container h2 {
    color: #6e6043;
    position: absolute;
    font-family: "PT Sans", sans-serif;
    font-size: 60px;
    bottom: 50%;
    transform: rotate(-90deg);
    left: 0;
    text-align: center;

  }

  #hero-container p {
    width: 325px;
    height: 450px;
    color: #6e6043;
    font-weight: 500;
    position: absolute;
    font-family: "PT Sans", sans-serif;
    font-size: 30px;
    top: 20vh;
    right: 0;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: 980px) {
    #bg-container {
      display: block;
    }
    #bg-container img {
      filter: blur(2px);
    }
    #hero-container h2 {
      transform: rotate(0);
      bottom: 30px;
      color: #efefef;
      text-align: center;
      right: 25%;
      /* left: 25%; */
      text-shadow: 1px 2px #000;
      width: 100%;
    }
    #hero-container p {
      bottom: 50px;
      color: #6e6043;
      text-align: center;
      width: 100%;
      position: absolute;
      display: none;
    }
  }
`;
